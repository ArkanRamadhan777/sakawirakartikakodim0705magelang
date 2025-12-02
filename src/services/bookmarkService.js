import { db } from '../config/firebase';
import { 
  collection, 
  addDoc, 
  deleteDoc, 
  getDocs, 
  query, 
  where, 
  doc,
  serverTimestamp,
  orderBy
} from 'firebase/firestore';

const BOOKMARKS_COLLECTION = 'bookmarks';

/**
 * Add a bookmark
 */
export const addBookmark = async (userId, itemData) => {
  try {
    const bookmarkRef = collection(db, BOOKMARKS_COLLECTION);
    
    const bookmark = {
      userId,
      itemId: itemData.itemId,
      itemType: itemData.itemType, // 'article' or 'tkk'
      title: itemData.title,
      description: itemData.description || '',
      imageUrl: itemData.imageUrl || '',
      createdAt: serverTimestamp()
    };

    const docRef = await addDoc(bookmarkRef, bookmark);
    
    return { 
      success: true, 
      bookmarkId: docRef.id 
    };
  } catch (error) {
    console.error('Error adding bookmark:', error);
    return { 
      success: false, 
      error: error.message 
    };
  }
};

/**
 * Remove a bookmark
 */
export const removeBookmark = async (bookmarkId) => {
  try {
    const bookmarkRef = doc(db, BOOKMARKS_COLLECTION, bookmarkId);
    await deleteDoc(bookmarkRef);
    
    return { success: true };
  } catch (error) {
    console.error('Error removing bookmark:', error);
    return { 
      success: false, 
      error: error.message 
    };
  }
};

/**
 * Get all bookmarks for a user
 */
export const getUserBookmarks = async (userId, itemType = null) => {
  try {
    const bookmarksRef = collection(db, BOOKMARKS_COLLECTION);
    let q;
    
    if (itemType) {
      q = query(
        bookmarksRef, 
        where('userId', '==', userId),
        where('itemType', '==', itemType)
      );
    } else {
      q = query(
        bookmarksRef, 
        where('userId', '==', userId)
      );
    }

    const querySnapshot = await getDocs(q);
    
    // Sort in memory by createdAt descending
    const bookmarks = querySnapshot.docs
      .map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate()
      }))
      .sort((a, b) => {
        if (!a.createdAt) return 1;
        if (!b.createdAt) return -1;
        return b.createdAt - a.createdAt;
      });
    
    return { 
      success: true, 
      bookmarks 
    };
  } catch (error) {
    console.error('Error getting bookmarks:', error);
    return { 
      success: false, 
      error: error.message,
      bookmarks: []
    };
  }
};

/**
 * Check if an item is bookmarked
 */
export const isBookmarked = async (userId, itemId) => {
  try {
    const bookmarksRef = collection(db, BOOKMARKS_COLLECTION);
    const q = query(
      bookmarksRef,
      where('userId', '==', userId),
      where('itemId', '==', itemId)
    );

    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      return { 
        success: true, 
        isBookmarked: true,
        bookmarkId: querySnapshot.docs[0].id
      };
    }
    
    return { 
      success: true, 
      isBookmarked: false,
      bookmarkId: null
    };
  } catch (error) {
    console.error('Error checking bookmark:', error);
    return { 
      success: false, 
      error: error.message,
      isBookmarked: false
    };
  }
};

/**
 * Get bookmark count for user
 */
export const getBookmarkCount = async (userId) => {
  try {
    const bookmarksRef = collection(db, BOOKMARKS_COLLECTION);
    const q = query(bookmarksRef, where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    
    return { 
      success: true, 
      count: querySnapshot.size 
    };
  } catch (error) {
    console.error('Error getting bookmark count:', error);
    return { 
      success: false, 
      error: error.message,
      count: 0
    };
  }
};
