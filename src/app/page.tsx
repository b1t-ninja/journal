import {notes} from "@/models/Note";
import NotesView from "@/components/NotesView/NotesView";

export default function Home() {

    return (
        <>
            <NotesView notes={notes}/>
        </>
    );
}