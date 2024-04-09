"use client"
import NotesView from "@/components/NotesView/NotesView";
import Note, {notes} from "@/models/Note/Note";
import FilterButton from "@/components/FilterButton/FilterButton";
import {useState} from "react";

/* TODO, make component cleaner take sortedentries in its own component so
*   this page can be pure client component */
const FilterPage = () => {
    const titleComparator = (note1: Note, note2: Note): number => note1.title.localeCompare(note2.title)
    const contentComparator = (note1: Note, note2: Note): number => note1.content.localeCompare(note2.content)
    const dateComparator = (note1: Note, note2: Note): number => note1.created.getTime() - note2.created.getTime()
    let [sortedEntries, setSortedEntries] = useState<Note[]>(notes.sort(contentComparator))

    const handleClick = (comparator: (note1: Note, note2: Note) => number) => {
        return () => {
            console.log(notes.sort(comparator))
            setSortedEntries([...notes].sort(comparator))
        }
    }

    return (
        <>
            <div className={"flex gap-4 align-middle justify-center"}>
                <FilterButton text={"Title"} onClickMethod={handleClick(titleComparator)}/>
                <FilterButton text={"Content"} onClickMethod={handleClick(contentComparator)}/>
                <FilterButton text={"Date"} onClickMethod={handleClick(dateComparator)}/>
            </div>

            <NotesView notes={sortedEntries}/>
        </>
    )
}

export default FilterPage