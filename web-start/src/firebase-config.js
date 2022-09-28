/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyDC1eqLs7n_e8-IhAVR6IfRnxDpGnKTcP8",
  authDomain: "sugarfreeit.firebaseapp.com",
  projectId: "sugarfreeit",
  storageBucket: "sugarfreeit.appspot.com",
  messagingSenderId: "870554272037",
  appId: "1:870554272037:web:46e1c7115121fe42ca9acc"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}