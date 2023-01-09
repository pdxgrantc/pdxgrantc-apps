import React from 'react'
import { Link } from 'react-router-dom'
import { auth, SignInComponent, SignOutComponent } from '../../../Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function DesktopHeader() {
    const [user] = useAuthState(auth);

    return (
        <div class="flex justify-between h-full">
            <Link class="w-[20vw] bg-black pl-[3vw] text-[3.75rem] font-bold leading-[5.75rem] h-[10vh] cursor-pointer whitespace-nowrap" to="/">Ez Shop</Link>
            <div class="flex text-[2.75rem] font-semibold">
                <div class="flex h-[85%] cursor-pointer over:ease-in-out duration-[350ms]">
                    <Link class="h-fit align-middle px-[1.5vw] py-[.5vw] hover:bg-button_pressed_color hover:ease-in-out duration-[350ms]" to="/My-Lists">Your Lists</Link>
                    <section>
                        {user ? <SignOutComponent /> : <SignInComponent />}
                    </section>
                </div>
                {/*<Link class="h-fit align-middle px-[1vw] py-[.5vw] hover:bg-button_pressed_color hover:cursor-pointer hover:ease-in-out duration-[350ms]" to="/Code">Code</Link>*/}
            </div>
        </div>
    )
}
