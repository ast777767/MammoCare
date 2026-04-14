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

// Handle foreground messages (when app is open)
messaging.onMessage(function(payload) {
  console.log('Foreground message received:', payload);

  const notificationTitle = payload.notification?.title || 'MammoCare';
  const notificationOptions = {
    body: payload.notification?.body || 'Новое уведомление',
    icon: 'icon-192.png',
    badge: 'icon-192.png',
    tag: payload.notification?.tag || 'default',
    data: payload.data
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle background messages (service worker)
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('Background message received:', payload);

  return self.registration.showNotification(
    payload.notification?.title || 'MammoCare',
    {
      body: payload.notification?.body || 'Новое уведомление',
      icon: 'icon-192.png',
      badge: 'icon-192.png',
      tag: payload.notification?.tag || 'default',
      data: payload.data
    }
  );
});

// Handle notification click
self.addEventListener('notificationclick', function(event) {
  console.log('Notification clicked:', event.notification);
  event.notification.close();

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(self.location.origin);
      }
    })
  );
});
