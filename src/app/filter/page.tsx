"use client"
import {useState} from "react";
import {motion} from "framer-motion"

const FilterPage = () => {
    let [isSelected, setIsSelected] = useState(false)
    const sayHi = () => {
        console.log("Hello ! I was tapped !")
    }
    return (
        <>
            <div className={"flex gap-4 align-middle justify-center"}>
                <motion.p
                    whileHover={{scale: 1.2}}
                    whileTap={{scale: 0.9}}
                    onTap={sayHi}
                    className={"p-2 bg-gray-500 rounded"}>Title
                </motion.p>
                <motion.p
                    className={"p-2 bg-gray-500 rounded"}>Content
                </motion.p>
                <motion.p
                    className={"p-2 bg-gray-500 rounded"}>Date
                </motion.p>
            </div>
        </>
    )
}

export default FilterPage