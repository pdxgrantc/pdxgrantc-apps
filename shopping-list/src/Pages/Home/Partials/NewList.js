import React from 'react'

export default function NewList() {
    return (
        <div class="px-[2.5vw] py-[3vh]">
            <h3 class="text-[2.75rem] font-semibold">Create New List</h3>
            <div class="h-[1vh]"></div>
            <div class="flex flex-col">
                <div>
                    <h4 class="text-[1.75rem]">List Name</h4>
                    <input class="w-[50vw] h-[5vh] text-[1.5rem] border-[1.5px] border-black" type="text" placeholder="List Name" />
                </div>
                <div class="h-[1vh]"></div>
                <div>
                    <h4 class="text-[1.75rem]">List Description</h4>
                    <input class="w-[50vw] h-[5vh] text-[1.5rem] border-[1.5px] border-black" type="text" placeholder="List Description" />
                </div>
                <div class="h-[1vh]"></div>
                <h4 class="text-[1.75rem]">Share with</h4>
                <form action="/action_page.php">
                    <input type="checkbox" id="one"></input>
                    <label for="one">Grant</label><br></br>
                    <input type="checkbox" id="two"></input>
                    <label for="two">Daniel</label><br></br>
                    <input type="checkbox" id="three"></input>
                    <label for="three">Quinn</label><br></br>
                    <input type="checkbox" id="four"></input>
                    <label for="four">Adrian</label><br></br>
                    <input type="submit" class="w-fit text-2xl border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.5vh]" value="Submit"></input>
                </form>
            </div>
        </div>
    )
}
