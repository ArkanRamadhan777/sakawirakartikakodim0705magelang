/**
 * Calculate user's learning streak based on quiz activity
 */
export const calculateStreak = (quizResults) => {
    if (!quizResults || quizResults.length === 0) {
        return {
            currentStreak: 0,
            longestStreak: 0,
            lastActivityDate: null
        };
    }

    // Get unique dates of quiz activity
    const activityDates = quizResults
        .map(result => {
            const date = result.timestamp?.toDate();
            if (!date) return null;
            // Get date string in YYYY-MM-DD format
            return date.toISOString().split('T')[0];
        })
        .filter(date => date !== null)
        .sort()
        .reverse(); // Most recent first

    // Remove duplicates
    const uniqueDates = [...new Set(activityDates)];

    if (uniqueDates.length === 0) {
        return {
            currentStreak: 0,
            longestStreak: 0,
            lastActivityDate: null
        };
    }

    // Calculate current streak
    let currentStreak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < uniqueDates.length; i++) {
        const activityDate = new Date(uniqueDates[i]);
        activityDate.setHours(0, 0, 0, 0);

        const daysDiff = Math.floor((today - activityDate) / (1000 * 60 * 60 * 24));

        if (daysDiff === i) {
            currentStreak++;
        } else {
            break;
        }
    }

    // Calculate longest streak
    let longestStreak = 1;
    let tempStreak = 1;

    for (let i = 1; i < uniqueDates.length; i++) {
        const prevDate = new Date(uniqueDates[i - 1]);
        const currDate = new Date(uniqueDates[i]);

        const daysDiff = Math.floor((prevDate - currDate) / (1000 * 60 * 60 * 24));

        if (daysDiff === 1) {
            tempStreak++;
            longestStreak = Math.max(longestStreak, tempStreak);
        } else {
            tempStreak = 1;
        }
    }

    return {
        currentStreak,
        longestStreak: Math.max(longestStreak, currentStreak),
        lastActivityDate: uniqueDates[0]
    };
};
