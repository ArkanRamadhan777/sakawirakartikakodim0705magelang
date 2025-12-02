import { collection, addDoc, updateDoc, deleteDoc, doc, getDoc, getDocs, query, where, orderBy } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '../config/firebase';
import { compressImage } from '../utils/imageCompressor';

// Upload image to Firebase Storage with compression
export const uploadArticleImage = async (file, articleId) => {
  try {
    // Compress image first
    const compressedFile = await compressImage(file, 1200, 0.8);
    
    const timestamp = Date.now();
    const fileName = `${timestamp}_${file.name}`;
    const storageRef = ref(storage, `articles/${articleId}/${fileName}`);
    
    // Upload compressed image
    await uploadBytes(storageRef, compressedFile);
    const downloadURL = await getDownloadURL(storageRef);
    
    return { success: true, url: downloadURL };
  } catch (error) {
    console.error('Error uploading image:', error);
    return { success: false, message: error.message };
  }
};

// Create new article
export const createArticle = async (articleData, authorId, authorName) => {
  try {
    const docRef = await addDoc(collection(db, 'articles'), {
      ...articleData,
      authorId,
      authorName,
      createdAt: new Date(),
      updatedAt: new Date(),
      published: false
    });
    
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error creating article:', error);
    return { success: false, message: error.message };
  }
};

// Update article
export const updateArticle = async (articleId, articleData) => {
  try {
    const articleRef = doc(db, 'articles', articleId);
    await updateDoc(articleRef, {
      ...articleData,
      updatedAt: new Date()
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error updating article:', error);
    return { success: false, message: error.message };
  }
};

// Delete article
export const deleteArticle = async (articleId) => {
  try {
    await deleteDoc(doc(db, 'articles', articleId));
    return { success: true };
  } catch (error) {
    console.error('Error deleting article:', error);
    return { success: false, message: error.message };
  }
};

// Get article by ID
export const getArticleById = async (articleId) => {
  try {
    const articleDoc = await getDoc(doc(db, 'articles', articleId));
    
    if (articleDoc.exists()) {
      return { 
        success: true, 
        data: { id: articleDoc.id, ...articleDoc.data() } 
      };
    } else {
      return { success: false, message: 'Article not found' };
    }
  } catch (error) {
    console.error('Error getting article:', error);
    return { success: false, message: error.message };
  }
};

// Get all articles
export const getAllArticles = async () => {
  try {
    const q = query(collection(db, 'articles'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const articles = [];
    querySnapshot.forEach((doc) => {
      articles.push({ id: doc.id, ...doc.data() });
    });
    
    return { success: true, data: articles };
  } catch (error) {
    console.error('Error getting articles:', error);
    return { success: false, message: error.message };
  }
};

// Get articles by Krida
export const getArticlesByKrida = async (kridaId) => {
  try {
    const q = query(
      collection(db, 'articles'),
      where('kridaId', '==', kridaId),
      where('published', '==', true),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    
    const articles = [];
    querySnapshot.forEach((doc) => {
      articles.push({ id: doc.id, ...doc.data() });
    });
    
    return { success: true, data: articles };
  } catch (error) {
    console.error('Error getting articles by krida:', error);
    return { success: false, message: error.message };
  }
};

// Get articles by TKK
export const getArticlesByTkk = async (tkkId) => {
  try {
    const q = query(
      collection(db, 'articles'),
      where('tkkId', '==', tkkId),
      where('published', '==', true),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    
    const articles = [];
    querySnapshot.forEach((doc) => {
      articles.push({ id: doc.id, ...doc.data() });
    });
    
    return { success: true, data: articles };
  } catch (error) {
    console.error('Error getting articles by tkk:', error);
    return { success: false, message: error.message };
  }
};
