// Admin Configuration
// Email whitelist for admin access

// Admin emails - can be configured via environment variable
const ADMIN_EMAILS_ENV = import.meta.env.VITE_ADMIN_EMAILS || '';
const ADMIN_EMAILS_FROM_ENV = ADMIN_EMAILS_ENV.split(',').map(email => email.trim()).filter(Boolean);

// Default admin emails (fallback)
const DEFAULT_ADMIN_EMAILS = [
    'fastforreflek@gmail.com',
    'fadlinabilaazka@gmail.com',
    // Add admin emails here
];

// Combine both sources
export const ADMIN_EMAILS = [
    ...DEFAULT_ADMIN_EMAILS,
    ...ADMIN_EMAILS_FROM_ENV
];

/**
 * Check if an email is an admin
 * @param {string} email - Email to check
 * @returns {boolean} - True if email is in admin list
 */
export const isAdmin = (email) => {
    if (!email) return false;
    return ADMIN_EMAILS.includes(email.toLowerCase().trim());
};

/**
 * Get all admin emails
 * @returns {string[]} - Array of admin emails
 */
export const getAdminEmails = () => {
    return [...ADMIN_EMAILS];
};
