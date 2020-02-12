// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app"

// Add the Firebase services that you want to use
import "firebase/auth"

const config = {
  apiKey: "AIzaSyAGbXy_ZkBtfuWg8b08mvf3l9OvAhB3L8s",
  authDomain: "steamery-a42b9.firebaseapp.com",
  databaseURL: "https://steamery-a42b9.firebaseio.com",
  projectId: "steamery-a42b9",
  storageBucket: "steamery-a42b9.appspot.com",
  messagingSenderId: "638511264596",
  appId: "1:638511264596:web:6789d00049d14294360ec1",
  measurementId: "G-BW4GKXVTJ0"
}

firebase.initializeApp(config)

const githubAuthProvider = new firebase.auth.GithubAuthProvider()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

const auth = firebase.auth()

export { firebase, auth, githubAuthProvider, googleAuthProvider }
