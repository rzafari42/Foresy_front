import { useState } from 'react';
import { IoInformationCircle } from "react-icons/io5";

const InfoBubble = ({ info }: { info: { title: string, content: string } }) => {
    const [isInfoVisible, setIsInfoVisible] = useState(false);
    const { title, content } = info;

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
                    <div className="flex w-full flex-col absolute bottom-5 right-2 px-3 py-2.5 gap-1.5 bg-gray-800 rounded shadow">
                        <strong
                            className='text-white'
                        >
                            {title}
                        </strong>
                        <span
                            className='text-gray-400'
                        >
                            {content}
                        </span>
                    </div>
                )
            }
        </div>
    )
}

export default InfoBubble;