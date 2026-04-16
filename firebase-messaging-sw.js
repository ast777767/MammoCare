<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "mammocare.firebaseapp.com",
  projectId: "mammocare",
  storageBucket: "mammocare.firebasestorage.app",
  messagingSenderId: "440171934985",
  appId: "1:440171934985:web:dab31a294e12636fd94fd8"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

window.enableNotifications = async function () {
  const permission = await Notification.requestPermission();

  if (permission !== "granted") {
    alert("Разрешение отклонено");
    return;
  }

  const token = await getToken(messaging, {
    vapidKey: "BF0-LZVn9xMFGyJdtSzATl1y25CyxOd1eldpQ43zzY57OImPeE0FhMKFT3dNsYbnwnnALkf_k-LQtgwbVBQW5Vs"
  });

  console.log("TOKEN:", token);
  alert("Уведомления включены");
};

onMessage(messaging, (payload) => {
  new Notification(payload.notification.title, {
    body: payload.notification.body
  });
});
</script>
