import React from 'react'

export default function Hero() {

    return (
        <div style={{ background: "url('/static/section/home/hero.png')" }} className={` w-screen h-screen bg-no-repeat bg-center`}>
            <div className="w-full h-full px-20 pt-28 justify-center flex flex-col">
                <h1 className='text-9xl font-semibold lowercase leading-[0.75] '>We are <br /> Baxa</h1>
                <br />
                <h4 className='text-xl'>We turn businesses into brands that people <span className='text-[#80D3FF]'>love</span>.</h4>
            </div>

        </div>
    )
}
