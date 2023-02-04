import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAOkTVV6wKk-imFjnluQJvOl8qNwclbMkk",
  authDomain: "task-manager-bbbe7.firebaseapp.com",
  projectId: "task-manager-bbbe7",
  storageBucket: "task-manager-bbbe7.appspot.com",
  messagingSenderId: "457764221068",
  appId: "1:457764221068:web:9da7db50a00604f5364ba9",
  databaseURL:
    "https://task-manager-bbbe7-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
