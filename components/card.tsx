import React from 'react';
import { useState } from 'react';
import { IoInformationCircle } from "react-icons/io5";
import InfoBubble from './info';

const Card = ({ title, infoBubble, children } : { title: string, infoBubble?: string, children?: React.ReactNode }) => {

    const [isInfoVisible, setIsInfoVisible] = useState(false);

    return (
        <div className="flex flex-col p-4 gap-2 rounded-2xl bg-white shadow-md">
            <div className='relative flex justify-between'>
                <h1 className="font-semibold text-sm">{title}</h1>
                <InfoBubble text={infoBubble || ""} />
            </div>
            { children }
        </div>
    );
}

export default Card;