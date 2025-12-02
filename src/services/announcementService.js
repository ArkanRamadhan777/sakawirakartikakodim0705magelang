import { collection, addDoc, updateDoc, deleteDoc, doc, getDoc, getDocs, query, orderBy, where, limit } from 'firebase/firestore';
import { db } from '../config/firebase';

// Create new announcement
export const createAnnouncement = async (announcementData, authorId, authorName) => {
  try {
    const docRef = await addDoc(collection(db, 'announcements'), {
      title: announcementData.title,
      content: announcementData.content,
      type: announcementData.type,
      published: announcementData.published || false, // Use the passed value
      authorId,
      authorName,
      createdAt: new Date(),
      updatedAt: new Date(),
      views: 0
    });
    
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error creating announcement:', error);
    return { success: false, message: error.message };
  }
};

// Update announcement
export const updateAnnouncement = async (announcementId, announcementData) => {
  try {
    const announcementRef = doc(db, 'announcements', announcementId);
    await updateDoc(announcementRef, {
      ...announcementData,
      updatedAt: new Date()
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error updating announcement:', error);
    return { success: false, message: error.message };
  }
};

// Delete announcement
export const deleteAnnouncement = async (announcementId) => {
  try {
    const announcementRef = doc(db, 'announcements', announcementId);
    await deleteDoc(announcementRef);
    
    return { success: true };
  } catch (error) {
    console.error('Error deleting announcement:', error);
    return { success: false, message: error.message };
  }
};

// Get announcement by ID
export const getAnnouncementById = async (announcementId) => {
  try {
    const announcementRef = doc(db, 'announcements', announcementId);
    const announcementSnap = await getDoc(announcementRef);
    
    if (announcementSnap.exists()) {
      return { 
        success: true, 
        data: { 
          id: announcementSnap.id, 
          ...announcementSnap.data() 
        } 
      };
    } else {
      return { success: false, message: 'Announcement not found' };
    }
  } catch (error) {
    console.error('Error getting announcement:', error);
    return { success: false, message: error.message };
  }
};

// Get all announcements (for admin)
export const getAllAnnouncements = async () => {
  try {
    const q = query(
      collection(db, 'announcements'), 
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    
    const announcements = [];
    querySnapshot.forEach((doc) => {
      announcements.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return { success: true, data: announcements };
  } catch (error) {
    console.error('Error getting all announcements:', error);
    return { success: false, message: error.message };
  }
};

// Get published announcements (for public)
export const getPublishedAnnouncements = async (limitCount = 10) => {
  try {
    const q = query(
      collection(db, 'announcements'),
      where('published', '==', true),
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    );
    const querySnapshot = await getDocs(q);
    
    const announcements = [];
    querySnapshot.forEach((doc) => {
      announcements.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return { success: true, data: announcements };
  } catch (error) {
    console.error('Error getting published announcements:', error);
    return { success: false, message: error.message };
  }
};

// Get latest announcement (for banner)
export const getLatestAnnouncement = async () => {
  try {
    // Get all published announcements and sort in memory to avoid index requirement
    const q = query(
      collection(db, 'announcements'),
      where('published', '==', true)
    );
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      // Sort by createdAt in memory
      const announcements = [];
      querySnapshot.forEach((doc) => {
        announcements.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      // Sort by createdAt descending
      announcements.sort((a, b) => {
        const aTime = a.createdAt?.toDate?.() || new Date(0);
        const bTime = b.createdAt?.toDate?.() || new Date(0);
        return bTime - aTime;
      });
      
      return {
        success: true,
        data: announcements[0]
      };
    }
    
    return { success: false, message: 'No announcements found' };
  } catch (error) {
    console.error('Error getting latest announcement:', error);
    return { success: false, message: error.message };
  }
};

// Increment view count
export const incrementAnnouncementViews = async (announcementId) => {
  try {
    const announcementRef = doc(db, 'announcements', announcementId);
    const announcementSnap = await getDoc(announcementRef);
    
    if (announcementSnap.exists()) {
      const currentViews = announcementSnap.data().views || 0;
      await updateDoc(announcementRef, {
        views: currentViews + 1
      });
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error incrementing views:', error);
    return { success: false, message: error.message };
  }
};
