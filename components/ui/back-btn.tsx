
import { IoArrowBackSharp } from "react-icons/io5"

export const BackButton = ({ onClick }: { onClick: () => void }) => {

    return (
        <button onClick={onClick} className="flex items-center gap-2 text-xs font-medium self-start border border-gray-200 rounded-full py-2 px-3 cursor-pointer hover:bg-gray-100">
            <IoArrowBackSharp size={16} />
            Retour
        </button>
    )

}

