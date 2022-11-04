// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyA2gKfD32am4t_TtVVDd-StcxQmSktbz0Y",
  authDomain: "trabajo-final-react-3d6aa.firebaseapp.com",
  projectId: "trabajo-final-react-3d6aa",
  storageBucket: "trabajo-final-react-3d6aa.appspot.com",
  messagingSenderId: "252403756626",
  appId: "1:252403756626:web:d3c1eed9ec45572b9a398b"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);