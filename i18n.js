// i18n.js

// Language translations
const translations = {
    en: {
        navigation: 'Navigation',
        home: 'Home',
        statistics: 'Statistics',
        riskAssessment: 'Risk Assessment',
        cycleTracking: 'Cycle Tracking',
        clinics: 'Clinics',
        learning: 'Learning',
        account: 'Account',
        notifications: 'Notifications',
    },
    ru: {
        navigation: 'Навигация',
        home: 'Главная',
        statistics: 'Статистика',
        riskAssessment: 'Оценка Риска',
        cycleTracking: 'Отслеживание Циклов',
        clinics: 'Клиники',
        learning: 'Обучение',
        account: 'Учётная Запись',
        notifications: 'Уведомления',
    },
    kz: {
        navigation: 'Навигация',
        home: 'Басты',
        statistics: 'Статистика',
        riskAssessment: 'Тәуекелді бағалау',
        cycleTracking: 'Циклдерді бақылау',
        clinics: 'Клиникалар',
        learning: 'Оқыту',
        account: 'Аккаунт',
        notifications: 'Хабарландырулар',
    }
};

// Language persistence using localStorage
const defaultLanguage = 'en';
const currentLanguage = localStorage.getItem('language') || defaultLanguage;

// Function to set the language
function setLanguage(language) {
    localStorage.setItem('language', language);
    updateUI();
}

// Function to update the UI with the selected language
function updateUI() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((element) => {
        const key = element.getAttribute('data-i18n');
        element.innerText = translations[currentLanguage][key];
    });
}

// Initialize UI
updateUI();

// Example of how to switch language
// setLanguage('ru'); // Uncomment to switch to Russian
