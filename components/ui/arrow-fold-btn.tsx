import { colors } from "flowbite-react/plugin/tailwindcss/colors";
import { IconContext } from "react-icons/lib";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const ArrowFoldBtn = ({ isFold, onClick} : { isFold: boolean, onClick: () => void }) => {
    return (
        <div className="flex justify-center items-center bg-orange-200 rounded-full p-1 border border-4 border-white" onClick={onClick}>
            { 
                isFold ? 
                <IconContext.Provider value={{ color: colors.orange[600], size: "14px" }} >
                    <IoIosArrowBack/>
                </IconContext.Provider> :
                <IconContext.Provider value={{ color: colors.orange[600], size: "14px" }} >
                    <IoIosArrowForward />
                </IconContext.Provider>
            }
        </div>
    )
}

export default ArrowFoldBtn