import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';

/**
 * Get all goals for a user
 */
export const getUserGoals = async (userId) => {
    try {
        const goalsRef = collection(db, 'userGoals', userId, 'goals');
        const querySnapshot = await getDocs(goalsRef);

        const goals = [];
        querySnapshot.forEach((doc) => {
            goals.push({
                id: doc.id,
                ...doc.data()
            });
        });

        return { success: true, data: goals };
    } catch (error) {
        console.error('Error fetching goals:', error);
        return { success: false, error: error.message };
    }
};

/**
 * Create a new goal
 */
export const createGoal = async (userId, goalData) => {
    try {
        const goalsRef = collection(db, 'userGoals', userId, 'goals');
        const docRef = await addDoc(goalsRef, {
            ...goalData,
            createdAt: new Date(),
            completed: false
        });

        return { success: true, id: docRef.id };
    } catch (error) {
        console.error('Error creating goal:', error);
        return { success: false, error: error.message };
    }
};

/**
 * Update goal progress
 */
export const updateGoalProgress = async (userId, goalId, current) => {
    try {
        const goalRef = doc(db, 'userGoals', userId, 'goals', goalId);
        await updateDoc(goalRef, { current });

        return { success: true };
    } catch (error) {
        console.error('Error updating goal:', error);
        return { success: false, error: error.message };
    }
};

/**
 * Mark goal as completed
 */
export const completeGoal = async (userId, goalId) => {
    try {
        const goalRef = doc(db, 'userGoals', userId, 'goals', goalId);
        await updateDoc(goalRef, {
            completed: true,
            completedAt: new Date()
        });

        return { success: true };
    } catch (error) {
        console.error('Error completing goal:', error);
        return { success: false, error: error.message };
    }
};

/**
 * Delete a goal
 */
export const deleteGoal = async (userId, goalId) => {
    try {
        const goalRef = doc(db, 'userGoals', userId, 'goals', goalId);
        await deleteDoc(goalRef);

        return { success: true };
    } catch (error) {
        console.error('Error deleting goal:', error);
        return { success: false, error: error.message };
    }
};

/**
 * Calculate current progress for goals based on quiz results
 */
export const calculateGoalProgress = (goals, quizResults, stats) => {
    return goals.map(goal => {
        let current = goal.current || 0;

        switch (goal.type) {
            case 'complete_tkk':
                current = stats.completedTKKs || 0;
                break;
            case 'achieve_score':
                current = stats.averageScore || 0;
                break;
            case 'daily_streak':
                // This would come from streak calculation
                current = goal.current || 0;
                break;
            case 'total_quizzes':
                current = stats.totalQuizzes || 0;
                break;
            default:
                break;
        }

        const percentage = goal.target > 0 ? Math.min(Math.round((current / goal.target) * 100), 100) : 0;
        const isCompleted = current >= goal.target;

        return {
            ...goal,
            current,
            percentage,
            completed: isCompleted || goal.completed
        };
    });
};
