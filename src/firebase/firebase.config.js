import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRE_API_KEY,
  authDomain: import.meta.env.VITE_FIRE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIRE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIRE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIRE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIRE_APP_ID,
};
// const firebaseConfig = {
//   apiKey: process.env.FIRE_API_KEY,
//   authDomain: process.env.FIRE_AUTH_DOMAIN,
//   projectId: process.env.FIRE_PROJECT_ID,
//   storageBucket: process.env.FIRE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIRE_MESSAGING_SENDER_ID,
//   appId: process.env.FIRE_APP_ID,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
