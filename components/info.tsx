import React from 'react';
import { useState } from 'react';
import { IoInformationCircle } from "react-icons/io5";

const InfoBubble = ({ text }: { text: string }) => {
    const [isInfoVisible, setIsInfoVisible] = useState(false);
    

    return (
        <div
            onMouseEnter={() => setIsInfoVisible(true)} 
            onMouseLeave={() => setIsInfoVisible(false)}
        >
            <span className="text-blue-500">
                <IoInformationCircle size={16} />
            </span>
            {
                isInfoVisible && (
                    <div className="absolute -top-10 right-2 p-2 bg-gray-100 rounded shadow">
                        {text}
                    </div>
                )
            }
        </div>
    )
}

export default InfoBubble;