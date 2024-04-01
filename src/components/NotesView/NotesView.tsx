import NoteView from "@/components/NoteView/NoteView";
import Note from "@/models/Note/Note";

interface NotesViewProps {
    notes: Note[]
}

const NotesView = ({notes}: NotesViewProps) => {
    return (
        <div className={"grid grid-cols-3 gap-4 max-w-2xl mx-auto"}>
            {notes.map((note, index) => <NoteView key={index} note={note}/>)}
        </div>
    )
}

export default NotesView