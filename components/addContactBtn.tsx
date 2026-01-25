import { BtnDegradedOrange } from "./ui/btn-degraded-orange"
import { FaPlus } from "react-icons/fa";

const AddContactBtn = () => {

    const onClick = () => {
        console.log("Add Contact button clicked");
    }

    return (
        <BtnDegradedOrange style="rounded-lg" onClick={onClick}>
            <span className="flex items-center gap-2">
                <FaPlus /> Nouveau contact
            </span>
        </BtnDegradedOrange>
    )
}

export default AddContactBtn