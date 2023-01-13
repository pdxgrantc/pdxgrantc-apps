import React from 'react'

import { db } from "../../../firebase"

export default function NewList() {
    const [listName, setListName] = React.useState('');
    const [listDescription, setListDescription] = React.useState('');

    const submit = (e) => {
        e.preventDefault();
        db.collection("list").add({
            list_title: listName,
            list_description: listDescription,
        });

        setListName("");
        setListDescription("");
    };

    return (
        <div class="px-[2.5vw] py-[3vh]">
            <h3 class="text-[3rem] font-semibold">Create New List</h3>
            <div class="h-[1vh]"></div>
            <div class="flex flex-col">
                <input
                    class="text-black w-[50vw] h-[5vh] text-[1.5rem] border-[1.5px] border-black focus:outline-none px-2"
                    type="text"
                    placeholder="Name"
                    value={listName}
                    onChange={(e) => setListName(e.target.value)}
                />
                <div class="h-[2vh]"></div>
                <input
                    class="text-black w-[50vw] h-[5vh] text-[1.5rem] border-[1.5px] border-black focus:outline-none px-2"
                    type="text"
                    placeholder="Password"
                    value={listDescription}
                    onChange={(e) => setListDescription(e.target.value)}
                />
                <button onClick={submit} class="cursor-pointer w-fit text-2xl border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.5vh]">Submit</button>
                {/*<form>
                    <div>
                        <input class="text-black w-[50vw] h-[5vh] text-[1.5rem] border-[1.5px] border-black focus:outline-none px-2"
                            type="text"
                            placeholder="List Name"
                            value={listName}
                        />
                    </div>
                    <div class="h-[2vh]"></div>
                    <div>
                        <input class="text-black w-[50vw] h-[5vh] text-[1.5rem] border-[1.5px] border-black focus:outline-none px-2"
                            type="text"
                            placeholder="Description"
                            value={listDescription}
                        />
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
                        <input type="submit" class="cursor-pointer w-fit text-2xl border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.5vh]" value="Create List"></input>
                        <input class="cursor-pointer w-fit text-2xl border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.5vh]" type="reset"></input>
                    </section>
                </form>*/}
            </div>
        </div>
    )
}
