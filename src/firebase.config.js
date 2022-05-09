import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyCVZdXSF3iREHe7UiM2cUsAibcoTUBC1A4',
  authDomain: 'homebase-9f636.firebaseapp.com',
  projectId: 'homebase-9f636',
  storageBucket: 'homebase-9f636.appspot.com',
  messagingSenderId: '1066255969006',
  appId: '1:1066255969006:web:44fef2b94b268f7fbf61ff',
  measurementId: 'G-GCQNFS7E34',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
const analytics = getAnalytics(app)
