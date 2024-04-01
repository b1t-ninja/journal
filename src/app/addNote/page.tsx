"use client"
import Note from "@/models/Note/Note";
import {motion} from "framer-motion"

const AddNotePage = (note: Note) => {
    return (
        <>
            <form className={'m-4'}>
                <div>
                    <label htmlFor="small-input"
                           className="font-bold block mb-2 text-m text-gray-900 dark:text-white">Note</label>
                    <textarea
                        placeholder={"# title\nsome content\n\n🪽titles must be marked by a # symbol 🪽"}
                        id="small-input"
                        className="block min-h-96 mt-2 w-full text-xl p-2 text-gray-900 text-m border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>

                <motion.button
                    whileHover={{scale: 1.2, textDecoration: "underline"}}
                    whileTap={{scale: 0.9}}
                    className={"p-4 bg-purple-500 mt-2 rounded"} role={"submit"}>Add Note
                </motion.button>
            </form>
        </>
    )
}

export default AddNotePage