import React from 'react'

export default function NewList() {
    return (
        <div class="px-[2.5vw] py-[3vh]">
            <h3 class="text-[3rem] font-semibold">Create New List</h3>
            <div class="h-[1vh]"></div>
            <div class="flex flex-col">
                <form>
                    <div>
                        <input class="text-black w-[50vw] h-[5vh] text-[1.5rem] border-[1.5px] border-black focus:outline-none px-2" type="text" placeholder="List Name" />
                    </div>
                    <div class="h-[2vh]"></div>
                    <div>
                        <input class="text-black w-[50vw] h-[5vh] text-[1.5rem] border-[1.5px] border-black focus:outline-none px-2" type="text" placeholder="Description" />
                    </div>
                    <div class="h-[2.5vh]"></div>
                    <h4 class="text-[2.5rem] font-semibold">Share with</h4>
                    <section class="text-[1.75rem] leading-9">
                        <input class="cursor-pointer" type="checkbox" id="one"></input>
                        <label class="cursor-pointer pl-3" for="one">Grant</label><br></br>
                        <input class="cursor-pointer" type="checkbox" id="two"></input>
                        <label class="cursor-pointer pl-3" for="two">Daniel</label><br></br>
                        <input class="cursor-pointer" type="checkbox" id="three"></input>
                        <label class="cursor-pointer pl-3" for="three">Quinn</label><br></br>
                        <input class="cursor-pointer" type="checkbox" id="four"></input>
                        <label class="cursor-pointer pl-3" for="four">Adrian</label><br></br>
                    </section>
                    <div class="h-[1vh]"></div>
                    <section class="flex on_desktop:gap-[1.25vw] on_mobile:gap-[2.5vh] on_mobile:flex-col">
                        <input type="submit" class="cursor-pointer w-fit text-2xl border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.5vh]" value="Create"></input>
                        <input class="cursor-pointer w-fit text-2xl border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.5vh]" type="reset"></input>
                    </section>
                </form>
            </div>
        </div>
    )
}
