import {Glob} from "bun";

const getAllNotes = async () => {
    // read all notes in src/api/notes
    const glob = new Glob("*.json")
    for await (const file of glob.scan(".")) {
        console.log(file)
    }
    // create a Note object for every one of those notes
    // store all of those in a Note[]
}

export default getAllNotes