import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.FIRE_API_KEY,
  authDomain: import.meta.env.FIRE_AUTH_DOMAIN,
  projectId: import.meta.env.FIRE_PROJECT_ID,
  storageBucket: import.meta.env.FIRE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.FIRE_MESSAGING_SENDER_ID,
  appId: import.meta.env.FIRE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
