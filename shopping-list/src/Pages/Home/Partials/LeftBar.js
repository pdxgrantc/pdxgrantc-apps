import React from 'react'

export default function LeftBar() {
    return (
        <div class="bg-black h-full flex flex-col">
            <div class="px-[1.5vw] py-[3vh]">
                <h2 class="text-[2.75rem]">Your Stuff</h2>
                <div class="h-[1vh]"></div>
                <Lists />
                <div class="h-[3vh]"></div>
                <Friends />
            </div>
        </div>
    )
}

function Lists() {
    if (window.location.pathname === "/") {
        return (
            <div>
                <h3 class="text-[1.75rem] font-semibold">Your Lists</h3>
                <div class="text-[1.5rem]">
                    <YourLists />
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <h3 class="text-[1.75rem] font-semibold">Your Lists</h3>
                <div class="text-[1.5rem]">
                    <YourLists />
                    <div class="h-[.75vh]"></div>
                    <h4 class="w-fit text-2xl border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.5vh]">Create New List</h4>
                </div>
            </div>
        )
    }
}

function YourLists() {
    return (
        <div class="flex flex-col text-[1.25rem]">
            <p>List Item</p>
            <p>List Item</p>
            <p>List Item</p>
            <p>List Item</p>
            <p>List Item</p>
            <p>List Item</p>
        </div>
    )
}

function Friends() {
    return (
        <div>
            <h3 class="text-[1.75rem]">Your Friends</h3>
            <div class="text-[1.5rem]">
                <YourFriends />
                <div class="h-[.75vh]"></div>
                <h4 class="w-fit text-2xl border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.5vh]">Find Friends</h4>
            </div>
        </div>
    )
}

function YourFriends() {
    return (
        <div class="flex flex-col text-[1.25rem]">
            <p>Friend Item</p>
            <p>Friend Item</p>
            <p>Friend Item</p>
            <p>Friend Item</p>
            <p>Friend Item</p>
        </div>
    )
}
