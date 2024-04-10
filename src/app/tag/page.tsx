'use client'
import {useState} from "react";
import {motion} from "framer-motion";
import Tag, {createNewTag, tags} from "@/models/Tag/Tag";
import TagView from "@/components/TagView/TagView";

// TODO: Add Tag model and Tag view as well as a Tags view containing all tags
// also refactor the input fields to separate components as they are pretty much the same thing
const TagPage = () => {
    let [tagName, setTagName] = useState('new tag')
    let [tagColor, setTagColor] = useState('pink')
    let [tagSymbol, setTagSymbol] = useState('🏷️')
    let [tagList, setTagList] = useState(tags)

    const handleClick = (tag: Tag) => {
        if (tag.name === "new tag" || tag.name === "") {
            return
        }

        return () => {
            setTagList(prevTagList => [...prevTagList, tag])
            resetTagInfos()
        }
    }

    const resetTagInfos = () => {
        setTagName("new tag")
        setTagColor("pink")
        setTagSymbol("🏷️")
    }

    return (
        <>
            <div className={"flex flex-col justify-center items-center"}>
                <p className={"text-xl capitalize font-bold"}>Create a new Tag</p>
                <p>Name</p>
                <input className={"p-4 rounded bg-purple-500"} onChange={(e) => setTagName(e.target.value)}
                       value={tagName}/>
                <p>Color</p>
                <input className={"p-4 rounded bg-purple-500"} onChange={(e) => setTagColor(e.target.value)}
                       value={tagColor}/>
                <p>Symbol</p>
                <input className={"p-4 rounded bg-purple-500"} onChange={(e) => setTagSymbol(e.target.value)}
                       value={tagSymbol}/>

                <motion.div
                    style={{background: tagColor}}
                    className={`p-4 mt-4 rounded flex justify-center items-center`}>
                    <p className={"text-4xl"}>{tagSymbol}</p>
                    <p className={"p-4"}>{tagName}</p>
                </motion.div>

                <motion.button
                    onClick={handleClick(createNewTag(tagName, tagColor, tagSymbol))}
                    whileHover={{scale: 1.2}}
                    className={"bg-purple-500 p-4 mt-4 rounded"}>
                    <p>Add Tag</p>
                </motion.button>
                <p className={"text-2xl mt-4"}>All tags</p>
                {/*TODO: Fix the scrollview, it's not scrolling at the moment,
                 * by i am sure that this is simply do to the width of parent,
                 * but i might be wrong who is to know*/}
                <div className={"grid grid-cols-3 gap-4 max-w-2xl mx-auto"}>
                    {tagList.map(((tag, index) => <TagView key={index} name={tag.name} color={tag.color}
                                                           symbol={tag.symbol}/>))}
                </div>
            </div>

        </>
    )
}

export default TagPage