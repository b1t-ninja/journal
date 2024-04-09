import Tag from "@/models/Tag/Tag";

const TagView = ({name, color, symbol}: Tag) => {
    return (
        <>
            <div
                style={{background: color}}
                className={`p-4 mt-4 rounded flex justify-center items-center rounded`}>
                <p className={"text-4xl"}>{symbol}</p>
                <p className={"p-4"}>{name}</p>
            </div>
        </>
    )
}

export default TagView