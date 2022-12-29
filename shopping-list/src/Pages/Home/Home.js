import React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../../Static/Partials/Header'

import firebase from 'firebase/compat/app'
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

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
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div class="m-auto bg-main_bg_color text-text_white min-h-screen">
                <Header />
            </div>
        </>
    )
}
