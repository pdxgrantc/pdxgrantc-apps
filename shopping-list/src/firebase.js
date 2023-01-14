import firebase from 'firebase/compat/app'

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCD_-9ryz2E4RRouaxeE1bKOl6xoPZVIwY",
  authDomain: "shopping-list-f4612.firebaseapp.com",
  projectId: "shopping-list-f4612",
  storageBucket: "shopping-list-f4612.appspot.com",
  messagingSenderId: "492725925529",
  appId: "1:492725925529:web:c0865252c5de8645572a08"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export function SignInComponent() {
  const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      signInWithPopup(auth, provider);
  }
  return (
      <>
          <button class="bg-button_accent_color h-fit align-middle px-[1.5vw] py-[.5vw] hover:bg-button_pressed_color hover:ease-in-out duration-[350ms]" onClick={signInWithGoogle}>Sign In</button>
      </>
  )
}

export function SignOutComponent() {
  return auth.currentUser && (
      <>
          <button class="bg-button_accent_color h-fit align-middle px-[1.5vw] py-[.5vw] hover:bg-button_pressed_color hover:ease-in-out duration-[350ms]" onClick={() => auth.signOut()}>Sign Out</button>
      </>
  )
}
