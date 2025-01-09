import React from 'react'

export default function Title({ text, color }: { text: string, color: string }) {
    return (
        <div className='p-16'>
            <h3 className={`text-2xl text-${color}`}>{text}<span className='text-[#80D3FF] text-3xl'>.</span> </h3>
        </div>
    )
}
