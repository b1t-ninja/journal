"use client"
import {motion} from "framer-motion";

interface FilterButtonProps {
    text: String
    onClickMethod: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const FilterButton = ({text, onClickMethod}: FilterButtonProps) => {
    return (
        <>
            <motion.button
                onClick={onClickMethod}
                whileHover={{scale: 1.2}}
                whileTap={{scale: 0.9}}
                className={"p-2 bg-gray-500 rounded"}>
                {text}
            </motion.button>
        </>
    )
}

export default FilterButton