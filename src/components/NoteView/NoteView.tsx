"use client"
import {getCreatedDate, getCreatedTime, toggleBookmarked} from "@/models/Note";
import Note from "@/models/Note/Note";
import {useState} from "react";
import {motion} from "framer-motion"

interface NotePropInterface {
    note: Note
}

/* TODO: fix toggleBookmark such that it actually updates state inside the object
*   as of rn, it does not
*/
const NoteView = ({note}: NotePropInterface) => {
    const bodyIsBelowFiveHundredSymbols = note.content.length < 500
    let [isBookmarked, setIsBookmarked] = useState(note.bookmarked)

    const handleClick = () => {
        toggleBookmarked(note)
        setIsBookmarked(!isBookmarked)
    }

    return (
        <div>
            <motion.div
                whileHover={{scale: 1.2}}
                className={"p-4 bg-purple-500 m-4 size-fit rounded-md"}>
                <div className={"flex justify-between"}>
                    <h2 className={"text-gray-400"}>{getCreatedDate(note)}</h2>
                    <h2 className={"text-gray-400"}>{getCreatedTime(note)}</h2>
                </div>
                {/* add a line limit to the note.title */}
                <h2 className={"text-xl capitalize font-bold line-clamp-1"}>{note.title}</h2>
                <h2 className={"max-w-md"}>{bodyIsBelowFiveHundredSymbols ? note.content : note.content.slice(0, 499)}</h2>
                <svg
                    onClick={() => handleClick()}
                    xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={isBookmarked ? `w-6 h-6 fill-amber-400` : `w-6 h-6`}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                </svg>
            </motion.div>
        </div>
    )
}
export default NoteView