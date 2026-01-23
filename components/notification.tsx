import { colors } from "flowbite-react/plugin/tailwindcss/colors";
import { IconContext } from "react-icons";
import { AiOutlineBell } from "react-icons/ai";

const Notification = () => {
    return (
        <div className="relative flex items-center justify-center py-4 px-6 bg-orange-200 rounded-2xl cursor-pointer">
            <IconContext.Provider value={{ color: colors.orange[600], size: "24px" }} >
                <AiOutlineBell />
            </IconContext.Provider>
            <div className="absolute -top-3 -right-3 bg-red-500 w-8 h-8 flex items-center justify-center rounded-full border-4 border-white text-xs text-white font-medium">
                12
            </div>
        </div>
    )
}

export default Notification;