import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBB58sv5ecIsZ7UZanX9lESBHG35IAD1sM",
    authDomain: "vue-playlists-liba.firebaseapp.com",
    projectId: "vue-playlists-liba",
    storageBucket: "vue-playlists-liba.appspot.com",
    messagingSenderId: "41654894410",
    appId: "1:41654894410:web:d848e0a39552f27a4c4bb3"
};


// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }

