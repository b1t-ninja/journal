export default interface Note {
    title: string;
    content: string;
    created: Date;
    bookmarked: boolean;
}

const createNewNote = (title: string, content: string): Note => {
    return {
        title: title,
        content: content,
        created: new Date(),
        bookmarked: false
    }
}
const getCreatedDate = (note: Note) => {
    return `${note.created.getDay()}.${note.created.getMonth()}.${note.created.getFullYear()}`;
}
const getCreatedTime = (note: Note) => {
    let hours = note.created.getHours();
    let minutes = note.created.getMinutes();

    return `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`
}
const toggleBookmarked = (note: Note) => {
    note.bookmarked = !note.bookmarked;
}

export {createNewNote, getCreatedDate, getCreatedTime, toggleBookmarked}