// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth" 
import {getFirestore,collection,addDoc} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDv9yVAkoD7WJD5OuDNxLrZSgso34UyUgQ",
  authDomain: "imdb-project-a3154.firebaseapp.com",
  projectId: "imdb-project-a3154",
  storageBucket: "imdb-project-a3154.appspot.com",
  messagingSenderId: "796257354808",
  appId: "1:796257354808:web:70c638f30684b89f3552cd",
  measurementId: "G-SBZCTX6PEZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()
const db =  getFirestore()

const registerUser=(email,password) => createUserWithEmailAndPassword(auth, email, password)
const logininUser=(email,password) => signInWithEmailAndPassword(auth,email,password)
const logoutUser=() => signOut(auth)
// for table of the database
const addData = (tableName,data) => addDoc(collection(db,tableName),data)

export {registerUser,logininUser,logoutUser,addData}
export default app
