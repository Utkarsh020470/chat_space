import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'chatspace-51dd6.firebaseapp.com',
  projectId: 'chatspace-51dd6',
  storageBucket: 'chatspace-51dd6.appspot.com',
  messagingSenderId: '843754431622',
  appId: '1:843754431622:web:f77212329b32880fd0dd07',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
