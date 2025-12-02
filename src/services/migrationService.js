import { collection, doc, setDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { kridas } from '../data/kridas';

/**
 * Migrate artikel dari kridas.jsx ke Firestore
 * @param {string} userId - ID user yang melakukan migrasi
 * @param {string} userName - Nama user
 * @returns {Promise<Object>} Result dengan success status dan pesan
 */
export const migrateAllArticles = async (userId, userName) => {
  try {
    let successCount = 0;
    let skipCount = 0;
    const errors = [];

    for (const krida of kridas) {
      for (const tkk of krida.tkk) {
        // Check if TKK has syllabus with articles
        if (!tkk.syllabus || !Array.isArray(tkk.syllabus)) {
          continue;
        }

        // Loop through syllabus modules
        for (const module of tkk.syllabus) {
          if (!module.items || !Array.isArray(module.items)) {
            continue;
          }

          // Loop through articles in each module
          for (const article of module.items) {
            // Buat unique ID dari kridaId, tkkId, dan articleId
            const articleId = article.id;
            
            // Check if article already exists
            const articleRef = doc(db, 'articles', articleId);
            const existingArticles = await getDocs(
              query(collection(db, 'articles'), 
                where('kridaId', '==', krida.id),
                where('tkkId', '==', tkk.id),
                where('migratedFrom', '==', 'kridas.jsx')
              )
            );

            // Skip if already exists
            const alreadyExists = existingArticles.docs.some(doc => doc.id === articleId);
            if (alreadyExists) {
              skipCount++;
              continue;
            }

            try {
              // Convert markdown content to HTML (simple conversion)
              let htmlContent = article.content || '';
              
              // Simple markdown to HTML conversion
              htmlContent = htmlContent
                .replace(/### (.*)/g, '<h3>$1</h3>')
                .replace(/## (.*)/g, '<h2>$1</h2>')
                .replace(/# (.*)/g, '<h1>$1</h1>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>')
                .replace(/\n\n/g, '</p><p>')
                .replace(/\n/g, '<br>');
              
              // Wrap in paragraph if not already wrapped
              if (!htmlContent.startsWith('<')) {
                htmlContent = '<p>' + htmlContent + '</p>';
              }

              // Create article document with fallback values
              const tkkTitle = tkk.title || tkk.name || `TKK ${tkk.id}`;
              const articleTitle = article.title || `Artikel ${article.id}`;
              const articleDescription = article.description || `Materi ${tkkTitle}`;
              
              const articleData = {
                title: articleTitle,
                description: articleDescription,
                content: htmlContent,
                kridaId: krida.id,
                kridaTitle: krida.title,
                tkkId: tkk.id,
                tkkTitle: tkkTitle,
                moduleId: module.id,
                moduleTitle: module.title,
                published: true,
                authorId: userId,
                authorName: userName,
                createdAt: new Date(),
                updatedAt: new Date(),
                migratedFrom: 'kridas.jsx'
              };

              await setDoc(articleRef, articleData);
              successCount++;
              
            } catch (error) {
              console.error(`Error migrating ${articleId}:`, error);
              errors.push({
                articleId,
                error: error.message
              });
            }
          }
        }
      }
    }

    return {
      success: true,
      message: `Migrasi selesai! Berhasil: ${successCount}, Dilewati: ${skipCount}, Error: ${errors.length}`,
      stats: {
        success: successCount,
        skipped: skipCount,
        errors: errors.length,
        errorDetails: errors
      }
    };

  } catch (error) {
    console.error('Migration error:', error);
    return {
      success: false,
      message: error.message
    };
  }
};

/**
 * Get migration status - check berapa artikel sudah di migrate
 * @returns {Promise<Object>} Status migrasi
 */
export const getMigrationStatus = async () => {
  try {
    // Count total articles from kridas.jsx
    let totalInKridas = 0;
    kridas.forEach(krida => {
      if (krida.tkk && Array.isArray(krida.tkk)) {
        krida.tkk.forEach(tkk => {
          if (tkk.syllabus && Array.isArray(tkk.syllabus)) {
            tkk.syllabus.forEach(module => {
              if (module.items && Array.isArray(module.items)) {
                totalInKridas += module.items.length;
              }
            });
          }
        });
      }
    });

    // Count articles in Firestore
    const articlesSnapshot = await getDocs(collection(db, 'articles'));
    const totalInFirestore = articlesSnapshot.size;

    // Count migrated articles (yang punya flag migratedFrom)
    const migratedArticles = articlesSnapshot.docs.filter(
      doc => doc.data().migratedFrom === 'kridas.jsx'
    ).length;

    return {
      success: true,
      data: {
        totalInKridas,
        totalInFirestore,
        migratedArticles,
        needMigration: totalInKridas - migratedArticles,
        percentage: totalInKridas > 0 
          ? Math.round((migratedArticles / totalInKridas) * 100) 
          : 0
      }
    };

  } catch (error) {
    console.error('Error getting migration status:', error);
    return {
      success: false,
      message: error.message
    };
  }
};

/**
 * Clear all migrated articles (untuk testing)
 * @returns {Promise<Object>} Result
 */
export const clearMigratedArticles = async () => {
  try {
    const articlesSnapshot = await getDocs(collection(db, 'articles'));
    const migratedDocs = articlesSnapshot.docs.filter(
      doc => doc.data().migratedFrom === 'kridas.jsx'
    );

    const deletePromises = migratedDocs.map(doc => 
      deleteDoc(doc.ref)
    );

    await Promise.all(deletePromises);

    return {
      success: true,
      message: `Berhasil menghapus ${migratedDocs.length} artikel yang di-migrate`
    };

  } catch (error) {
    console.error('Error clearing migrated articles:', error);
    return {
      success: false,
      message: error.message
    };
  }
};
