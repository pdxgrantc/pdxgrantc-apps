import React from 'react'

import { Link } from 'react-router-dom'

import { signInWithGoogle, signOutProvider } from '../../../service/firebase';

import firebase from 'firebase/compat/app'
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getAuth } from "firebase/auth";

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const auth = getAuth();

export default function DesktopHeader() {
    const [user] = useAuthState(auth);

    return (
        <div class="flex justify-between">
            <Link class="w-[35vw] bg-black pl-[5vw] text-[3.75rem] font-bold leading-[5.75rem] h-[12vh] cursor-pointer whitespace-nowrap" to="/">Ez Shop</Link>
            <div class="flex text-[2.75rem] font-semibold">
                <div class="flex h-[85%] cursor-pointer over:ease-in-out duration-[350ms]">
                    <Link class="h-fit align-middle px-[1.5vw] py-[.5vw] hover:bg-button_pressed_color hover:ease-in-out duration-[350ms]" to="/My-Lists">My Lists</Link>
                    <h2 class="h-fit align-middle px-[1.5vw] py-[.5vw] hover:bg-button_pressed_color hover:ease-in-out duration-[350ms]">Account</h2>
                    <section>
                        {user ?
                            <h2 onClick={signOutProvider} class="h-fit align-middle bg-button_accent_color hover:bg-transparent px-[1.5rem] mr-[0rem] py-[.5rem]">Logout</h2>
                            :
                            <h2 onClick={signInWithGoogle} class="h-fit align-middle bg-button_accent_color hover:bg-transparent px-[1.5rem] mr-[0rem] py-[.5rem]">Login</h2>
                        }
                    </section>
                </div>
                {/*<Link class="h-fit align-middle px-[1vw] py-[.5vw] hover:bg-button_pressed_color hover:cursor-pointer hover:ease-in-out duration-[350ms]" to="/Code">Code</Link>*/}
            </div>
        </div>
    )
}
