import { db } from '../config/firebase';
import { 
  collection, 
  addDoc, 
  updateDoc,
  deleteDoc, 
  getDocs, 
  getDoc,
  query, 
  where, 
  doc,
  serverTimestamp,
  orderBy
} from 'firebase/firestore';

const NOTES_COLLECTION = 'user_notes';

/**
 * Create a new note
 */
export const createNote = async (userId, noteData) => {
  try {
    const notesRef = collection(db, NOTES_COLLECTION);
    
    const note = {
      userId,
      tkkId: noteData.tkkId,
      tkkTitle: noteData.tkkTitle,
      title: noteData.title,
      content: noteData.content,
      tags: noteData.tags || [],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };

    const docRef = await addDoc(notesRef, note);
    
    return { 
      success: true, 
      noteId: docRef.id 
    };
  } catch (error) {
    console.error('Error creating note:', error);
    return { 
      success: false, 
      error: error.message 
    };
  }
};

/**
 * Update a note
 */
export const updateNote = async (noteId, noteData) => {
  try {
    const noteRef = doc(db, NOTES_COLLECTION, noteId);
    
    await updateDoc(noteRef, {
      title: noteData.title,
      content: noteData.content,
      tags: noteData.tags || [],
      updatedAt: serverTimestamp()
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error updating note:', error);
    return { 
      success: false, 
      error: error.message 
    };
  }
};

/**
 * Delete a note
 */
export const deleteNote = async (noteId) => {
  try {
    const noteRef = doc(db, NOTES_COLLECTION, noteId);
    await deleteDoc(noteRef);
    
    return { success: true };
  } catch (error) {
    console.error('Error deleting note:', error);
    return { 
      success: false, 
      error: error.message 
    };
  }
};

/**
 * Get all notes for a user
 */
export const getUserNotes = async (userId, tkkId = null) => {
  try {
    const notesRef = collection(db, NOTES_COLLECTION);
    let q;
    
    if (tkkId) {
      q = query(
        notesRef, 
        where('userId', '==', userId),
        where('tkkId', '==', tkkId)
      );
    } else {
      q = query(
        notesRef, 
        where('userId', '==', userId)
      );
    }

    const querySnapshot = await getDocs(q);
    
    // Sort in memory by updatedAt descending
    const notes = querySnapshot.docs
      .map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate(),
        updatedAt: doc.data().updatedAt?.toDate()
      }))
      .sort((a, b) => {
        if (!a.updatedAt) return 1;
        if (!b.updatedAt) return -1;
        return b.updatedAt - a.updatedAt;
      });
    
    return { 
      success: true, 
      notes 
    };
  } catch (error) {
    console.error('Error getting notes:', error);
    return { 
      success: false, 
      error: error.message,
      notes: []
    };
  }
};

/**
 * Get a single note by ID
 */
export const getNoteById = async (noteId) => {
  try {
    const noteRef = doc(db, NOTES_COLLECTION, noteId);
    const noteDoc = await getDoc(noteRef);
    
    if (!noteDoc.exists()) {
      return { 
        success: false, 
        error: 'Note not found' 
      };
    }
    
    return { 
      success: true, 
      note: {
        id: noteDoc.id,
        ...noteDoc.data(),
        createdAt: noteDoc.data().createdAt?.toDate(),
        updatedAt: noteDoc.data().updatedAt?.toDate()
      }
    };
  } catch (error) {
    console.error('Error getting note:', error);
    return { 
      success: false, 
      error: error.message 
    };
  }
};

/**
 * Get note count for user
 */
export const getNoteCount = async (userId) => {
  try {
    const notesRef = collection(db, NOTES_COLLECTION);
    const q = query(notesRef, where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    
    return { 
      success: true, 
      count: querySnapshot.size 
    };
  } catch (error) {
    console.error('Error getting note count:', error);
    return { 
      success: false, 
      error: error.message,
      count: 0
    };
  }
};

/**
 * Search notes by keyword
 */
export const searchNotes = async (userId, keyword) => {
  try {
    const result = await getUserNotes(userId);
    
    if (!result.success) {
      return result;
    }
    
    // Filter notes by keyword in title or content
    const filteredNotes = result.notes.filter(note => 
      note.title.toLowerCase().includes(keyword.toLowerCase()) ||
      note.content.toLowerCase().includes(keyword.toLowerCase()) ||
      (note.tags && note.tags.some(tag => tag.toLowerCase().includes(keyword.toLowerCase())))
    );
    
    return {
      success: true,
      notes: filteredNotes
    };
  } catch (error) {
    console.error('Error searching notes:', error);
    return {
      success: false,
      error: error.message,
      notes: []
    };
  }
};
