/**
 * Generate share text for achievements
 */
export const generateShareText = (type, data) => {
    switch (type) {
        case 'badge':
            return `🏆 Saya baru saja mendapatkan lencana "${data.name}" di Saka Wira Kartika!\n\n${data.description}\n\n#SakaWiraKartika #Belajar #Achievement`;

        case 'streak':
            return `🔥 Streak belajar saya sudah ${data.days} hari berturut-turut di Saka Wira Kartika!\n\nAyo ikutan belajar juga!\n\n#SakaWiraKartika #Belajar #Streak`;

        case 'tkk_complete':
            return `✅ Saya berhasil menyelesaikan ${data.count} TKK di Saka Wira Kartika!\n\nTerus belajar, terus berkembang!\n\n#SakaWiraKartika #TKK #Belajar`;

        case 'score':
            return `🎯 Rata-rata nilai saya di Saka Wira Kartika: ${data.score}%!\n\nSemangat terus belajar!\n\n#SakaWiraKartika #Belajar #Achievement`;

        default:
            return `🎓 Saya sedang belajar di Saka Wira Kartika!\n\n#SakaWiraKartika #Belajar`;
    }
};

/**
 * Share via Web Share API (if available)
 */
export const shareViaWebShare = async (text) => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Saka Wira Kartika',
                text: text
            });
            return { success: true };
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error('Error sharing:', error);
                return { success: false, error: error.message };
            }
            return { success: false, error: 'Share cancelled' };
        }
    } else {
        return { success: false, error: 'Web Share API not supported' };
    }
};

/**
 * Copy text to clipboard
 */
export const copyToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        return { success: true };
    } catch (error) {
        console.error('Error copying to clipboard:', error);
        return { success: false, error: error.message };
    }
};

/**
 * Share to WhatsApp
 */
export const shareToWhatsApp = (text) => {
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
};

/**
 * Share to Twitter
 */
export const shareToTwitter = (text) => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
};

/**
 * Share to Facebook
 */
export const shareToFacebook = (text) => {
    const url = `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
};
