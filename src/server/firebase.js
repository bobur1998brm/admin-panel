import * as firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyAAXXT0ndOcGMG8_Pkp2bNGonVkXDEKIek",
    authDomain: "admin-6fd38.firebaseapp.com",
    projectId: "admin-6fd38",
    storageBucket: "admin-6fd38.appspot.com",
    messagingSenderId: "806334232192",
    appId: "1:806334232192:web:8f349d918e335b189bd865",
    measurementId: "G-NT68DV0R6J"
};

const app = firebase.initializeApp(firebaseConfig)

export { firebase}