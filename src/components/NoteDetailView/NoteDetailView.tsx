import Note from "@/models/Note/Note";

const NoteDetailView = ({title, content, created, bookmarked}: Note) => {
    return (
        <>
            <div>
                <h1>{title}</h1>
                <p>{content}</p>
                <p>Created: {created.toString()}</p>
                <p>Bookmarked: {bookmarked ? "Yes" : "No"}</p>
            </div>
        </>
    )
}

export default NoteDetailView