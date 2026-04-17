// notifications.js

// Comprehensive notification system for MammoCare

// Import necessary modules
import firebase from 'firebase/app';
import 'firebase/messaging';

// Initialize Firebase Messaging
const messaging = firebase.messaging();

// Function to request permission for notifications
export const requestNotificationPermission = () => {
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
        } else {
            console.log('Notification permission denied.');
        }
    });
};

// Function to send a local notification
export const sendLocalNotification = (title, body) => {
    const options = {
        body: body,
        icon: '/path/to/icon.png',
    };
    new Notification(title, options);
};

// Schedule daily notifications
export const scheduleDailyNotification = (title, body, time) => {
    const notificationTime = new Date();
    notificationTime.setHours(time.getHours());
    notificationTime.setMinutes(time.getMinutes());

    // Schedule the notification using setTimeout
    const timeout = notificationTime.getTime() - Date.now();
    if (timeout > 0) {
        setTimeout(() => {
            sendLocalNotification(title, body);
        }, timeout);
    }
};

// Set reminders for self-exams and mammograms
export const setSelfExamReminder = () => {
    const message = 'Time for your monthly self-exam!';
    scheduleDailyNotification('Self-Exam Reminder', message, new Date(new Date().setHours(9, 0, 0))); // 9 AM
};

export const setMammogramReminder = () => {
    const message = 'Don’t forget your mammogram appointment!';
    scheduleDailyNotification('Mammogram Reminder', message, new Date(new Date().setHours(8, 0, 0))); // 8 AM
};

// Function to handle achievements notifications
export const sendAchievementNotification = (achievement) => {
    const message = `Congrats! You've achieved: ${achievement}`;
    sendLocalNotification('Achievement Unlocked!', message);
};

// Local Storage for multi-language support
export const setLanguagePreference = (lang) => {
    localStorage.setItem('preferredLanguage', lang);
};

export const getLanguagePreference = () => {
    return localStorage.getItem('preferredLanguage') || 'en';
};

// Weekly summary notifications
export const scheduleWeeklySummary = () => {
    const message = 'Here is your weekly summary!';
    scheduleDailyNotification('Weekly Summary', message, new Date(new Date().setHours(17, 0, 0))); // 5 PM
};

// Get token for FCM
export const getFCMToken = () => {
    messaging.getToken().then((currentToken) => {
        if (currentToken) {
            console.log(`FCM Token: ${currentToken}`);
        } else {
            console.log('No registration token available. Request permission to generate one.');
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
    });
};

// Initialize notifications
export const initializeNotifications = () => {
    requestNotificationPermission();
    setSelfExamReminder();
    setMammogramReminder();
    scheduleWeeklySummary();
    getFCMToken();
};

initializeNotifications();