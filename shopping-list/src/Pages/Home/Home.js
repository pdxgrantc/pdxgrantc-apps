import React from 'react'
import { Helmet } from 'react-helmet'

import LeftBar from './Partials/LeftBar'
import NewList from './Partials/NewList'

import Header from '../../Static/Partials/Header'
import Footer from '../../Static/Partials/Footer'

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth'

firebase.initializeApp({
    apiKey: "AIzaSyCD_-9ryz2E4RRouaxeE1bKOl6xoPZVIwY",
    authDomain: "shopping-list-f4612.firebaseapp.com",
    projectId: "shopping-list-f4612",
    storageBucket: "shopping-list-f4612.appspot.com",
    messagingSenderId: "492725925529",
    appId: "1:492725925529:web:c0865252c5de8645572a08"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export default function Home() {
    const [user] = useAuthState(auth);

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div class="m-auto bg-main_bg_color text-text_white min-h-screen">
                <Header />
                <div class="h-[5vh]"></div>
                <div class="w-full h-[85vh] flex gap-[5vw]">
                    {user ? <SignedIn /> : <SignedOut />}
                </div>
                {/*<Footer />*/}
            </div>
        </>
    )
}

function SignedIn() {
    return (
        <>
            <div class="w-[26vw] h-full">
                <LeftBar />
            </div>
            <div class="w-full bg-black">
                <NewList />
            </div>
        </>
    )
}

function SignedOut() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }
    return (
        <>
            <div class="px-[10vw] py-[8vh] w-[90%] mx-auto h-[95%] bg-black">
                <h2 class="text-[3.25rem]">You must be signed in to Google to use this app</h2>
                <button onClick={signInWithGoogle}>Sign In</button>
            </div>
        </>
    )
}
