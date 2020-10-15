import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCQ3u-p5KRW_-QsaNAkAO-RhXOajKmO6tw",
  authDomain: "discord-clone-dd4e1.firebaseapp.com",
  databaseURL: "https://discord-clone-dd4e1.firebaseio.com",
  projectId: "discord-clone-dd4e1",
  storageBucket: "discord-clone-dd4e1.appspot.com",
  messagingSenderId: "362511819414",
  appId: "1:362511819414:web:433dcd62166577305698b7",
  measurementId: "G-L28KL0YVMY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db