import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
 } from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyA2ZpKjXBTWmHN4vDgEhXrpKi5cj7F9WVE",
    authDomain: "fire-auth-page.firebaseapp.com",
    projectId: "fire-auth-page",
    storageBucket: "fire-auth-page.appspot.com",
    messagingSenderId: "46109873568",
    appId: "1:46109873568:web:e38847b073c858c64940c5"
};

initializeApp(firebaseConfig)

const auth = getAuth()


const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = signupForm.email.value
    const password = signupForm.password.value

    createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log('user created',cred.user)

            signupForm.reset()
        })
        .catch((err) => console.log(err.message))
})


const loginForm = document.querySelector('#login-form')

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = loginForm.email.value
    const password = loginForm.password.value
    
    signInWithEmailAndPassword(auth, email, password) 
        .then((cred) => {
            console.log('user logged in', cred.user)

            loginForm.reset()
        })
        .catch((err) => console.log(err.message))
})