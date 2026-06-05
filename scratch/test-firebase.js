import { initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTG-okJuoxNlxJ9rizvLkwOjjn4AT0pW8",
  authDomain: "slidev-pro-vercel-app-db.firebaseapp.com",
  projectId: "slidev-pro-vercel-app-db",
  storageBucket: "slidev-pro-vercel-app-db.firebasestorage.app",
  messagingSenderId: "390478860852",
  appId: "1:390478860852:web:a4045993367fe4e740b061"
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

async function runTest() {
  console.log('Starting Firestore Connection Test...')
  const docRef = doc(db, 'whitelist', 'emails')

  try {
    console.log('Writing test emails to Firestore...')
    await setDoc(docRef, { list: ['ponraij@gmail.com'] })
    console.log('Write successful!')

    console.log('Reading emails back from Firestore...')
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data())
    } else {
      console.error('No such document!')
    }
  } catch (error) {
    console.error('Error during Firestore test:', error)
  }
  process.exit(0)
}

runTest()
