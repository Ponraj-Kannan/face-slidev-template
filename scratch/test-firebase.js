import { initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBsNQ_QDJScHgMUv4blklp2fCACKtmzYQ",
  authDomain: "test-db-2647b.firebaseapp.com",
  projectId: "test-db-2647b",
  storageBucket: "test-db-2647b.firebasestorage.app",
  messagingSenderId: "593195733830",
  appId: "1:593195733830:web:dcd89130dd877694d58b47"
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
