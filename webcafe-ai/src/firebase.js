import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyAU48IZGsfWH7YGu-okKoYKigC0ei2mcnw",
    authDomain: "my-react-app-c05e9.firebaseapp.com",
    projectId: "my-react-app-c05e9",
    storageBucket: "my-react-app-c05e9.firebasestorage.app",
    messagingSenderId: "423785605541",
    appId: "1:423785605541:web:72eea2a3baa3f09b8b604c",
    measurementId: "G-L3K70YBQ89"
}

const app = initializeApp(firebaseConfig)

export default app

