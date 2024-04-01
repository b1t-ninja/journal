import {createNewNote} from "@/models/Note";
import NotesView from "@/components/NotesView/NotesView";

export default function Home() {
    const notes = [
        createNewNote("title1", "Content content content"),
        createNewNote("title1", "Content content content"),
        createNewNote("title1", "Content content content"),
        createNewNote("title1", "Content content content"),
        createNewNote("title1", "Content content content"),
    ]
    return (
        <>
            <NotesView notes={notes}/>
        </>
    );
}