importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDS9_Ev32yr6q4801I5YOxzaFezW7SEYg4",
  authDomain: "mammocare.firebaseapp.com",
  projectId: "mammocare",
  storageBucket: "mammocare.firebasestorage.app",
  messagingSenderId: "440171934985",
  appId: "1:440171934985:web:dab31a294e12636fd94fd8"
});

const messaging = firebase.messaging();
