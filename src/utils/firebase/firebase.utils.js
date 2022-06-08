import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADL_iGB0Ue4K5PGtPuKkucLDIu9u4gBpE",
  authDomain: "clothingyredo.firebaseapp.com",
  projectId: "clothingyredo",
  storageBucket: "clothingyredo.appspot.com",
  messagingSenderId: "271609614274",
  appId: "1:271609614274:web:0642340090286ec623d05b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})
export const auth = getAuth();
export const signInWithGooglePopup = ()=>signInWithPopup(auth,provider);

export const db = getFirestore();

const createUserDocumentFromAuth = async(userAuth)=>{
    const userDocRef = doc(db,'users',userAuth.uid)

    const userSnapShot = await getDoc(userDocRef)
    console.log(userSnapShot.exists())
}
    

    
