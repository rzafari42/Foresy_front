'use client';
import React from 'react';
import { BackButton } from '@/components/ui/back-btn';
import { BtnDegradedOrange } from '@/components/ui/btn-degraded-orange';
import Card from '@/components/card';

const Components = () => {
    return  (
        <div className='flex flex-col gap-6'>
            <div className='flex flex-col justify-start border p-8 gap-4 m-6'>
                <h1 className='font-bold text-xl'>UI</h1>
                <BackButton onClick={() => console.log("Back button clicked")} />
                <BtnDegradedOrange>
                    Bouton Dégradé Orange
                </BtnDegradedOrange>
            </div>
             <div className='flex flex-col justify-start border p-8 gap-4 m-6'>
                <h1 className='font-bold text-xl'>Components</h1>
                <Card title='Test Card' infoBubble='test info bubble text very very long'>
                    <p>Ceci est le contenu de la carte.</p>
                </Card>
            </div>
        </div>
    )
}

export default Components;