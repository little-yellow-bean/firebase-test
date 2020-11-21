importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyBYfq5kvYZP1lDnHma3FJ4M3Fe1PsfKZ1E',
  authDomain: 'yellowbean.firebaseapp.com',
  databaseURL: 'https://yellowbean.firebaseio.com',
  projectId: 'yellowbean',
  storageBucket: 'yellowbean.appspot.com',
  messagingSenderId: '264666539006',
  appId: '1:264666539006:web:ebd239f7a1f121393c16af',
  measurementId: 'G-QVP1FCB2R5',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message!!! ', payload);
  /******************************* */
  // firebase会自动弹出消息, 所以不需要手动在这里写, 前提是设备开启了相应浏览器的通知提醒
  /******************************* */
  // const notificationTitle = 'Background Message Title';
  // const notificationOptions = {
  //   body: 'Background Message body.',
  //   icon: '../icons/icon-72x72.png'
  // };
  // globalThis.registration.showNotification(notificationTitle,
  //   notificationOptions);
});
