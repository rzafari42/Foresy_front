'use client'
import React from 'react';
import InfoBubble from './info';

const Card = ({ title, infoBubble, children } : { title: string, infoBubble?: {title: string, content: string}, children?: React.ReactNode }) => {

    return (
        <div className="flex flex-1 flex-col justify-between p-4 gap-2 rounded-2xl bg-white shadow-md">
            <div className='relative flex justify-between'>
                <h1 className="font-semibold text-sm">{title}</h1>
                {
                    infoBubble && <InfoBubble info={infoBubble} />
                }
            </div>
            { children }
        </div>
    );
}

export default Card;