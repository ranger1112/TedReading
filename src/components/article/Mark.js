import {Tooltip} from "@material-tailwind/react";

export default function Mark({grammar, description, type = 1}) {

    if (type === 1) {
        return (
            <Tooltip content={description} className="bg-yellow-900 text-white">
                <span className="px-1 bg-yellow-900 text-white hover:cursor-pointer rounded">{grammar}</span>
            </Tooltip>
        )
    } else {
        return (
            <Tooltip content={description} className="bg-blue-500 text-white">
                <span className="px-1 bg-blue-500 text-white hover:cursor-pointer rounded">{grammar}</span>
            </Tooltip>
        )
    }
}