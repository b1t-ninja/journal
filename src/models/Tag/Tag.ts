export default interface Tag {
    name: string
    color: string
    symbol: string
}

export const createNewTag = (name: string, color: string, symbol: string): Tag => {
    return {
        name: name,
        color: color,
        symbol: symbol,
    }
}

export const tags = [
    createNewTag("Important", "red", "🪽"),
    createNewTag("Done", "green", "✅"),
    createNewTag("Annoying", "orange", "😈"),
    createNewTag("Never again", "cyan", "🐦‍⬛"),
]