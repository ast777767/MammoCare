const i18n = require('i18n');

// Configure i18n translations
const translations = {
    en: {
        greeting: 'Hello',
        farewell: 'Goodbye',
    },
    ru: {
        greeting: 'Здравствуйте',
        farewell: 'До свидания',
    },
    kk: {
        greeting: 'Сәлеметсіз бе',
        farewell: 'Сау болыңыз',
    }
};

// Initialize i18n with translations
i18n.configure({
    locales: Object.keys(translations),
    directory: './locales',
    defaultLocale: 'en',
    syncFiles: true,
    fallbacks: {
        'ru': 'en',
        'kk': 'en',
    }
});

// Function to store language preference in localStorage
function setLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    i18n.setLocale(lang);
}

// Function to load language preference from localStorage
function loadLanguage() {
    const lang = localStorage.getItem('preferredLanguage') || 'en';
    i18n.setLocale(lang);
}

module.exports = { translations, setLanguage, loadLanguage };