import Link from 'next/link'
import React from 'react'
const navLinks = [
    {
        title: 'About us',
        link: '/about'
    },
    {
        title: 'Kaam Dhaam',
        link: '/work'
    },
    {
        title: 'Sampark',
        link: '/#sampark'
    },
    {
        title: 'Blog',
        link: '/blog'
    }
]

const socialLinks = [
    { title: 'Instagram', link: 'instagram.com/creativebaxa' }, { title: 'LinkedIn', link: '' }, { title: 'Privacy Policy', link: '/policies', }, { title: 'Careers', link: 'hiring.creativebaxa.com' }
]

export default function Footer() {
    return (
        <div className='bg-white uppercase p-20   text-secondary h-[85vh]'>
            <div className="flex gap-12 flex-col">
                <div className="">
                    <h2 className=' font-bold text-7xl'>
                        Let's turn your <br />
                        business into  <br />
                        a <span className='text-primary'> brand</span>.
                    </h2>
                </div>
                <div className="flex justify-between py-3 items-center ">
                    <div className="">
                        <div className="">
                            <h3 className='text-2xl'>drop in for a coffee</h3>
                            <span className='lowercase text-xl text-[#808080]'>address</span>
                        </div>
                        <div className="mt-5">
                            <h3 className='text-2xl'>Say hello</h3>
                            <span className='lowercase text-xl text-[#808080]'>hello@creativebaxa.com</span>
                        </div>
                    </div>
                    <div className="grid gap-20 items-center  justify-center place-items-center grid-cols-2">
                        <div className="flex justify-end  flex-col">
                            {navLinks.map((item, index) => {
                                return (
                                    <div className='pb-2' key={index}>
                                        <Link className='text-xl  text-[#808080]' href={item.link}>{item.title}</Link>
                                    </div>
                                )
                            })}</div>
                        <div className="">
                            {socialLinks.map((item, index) => {
                                return (
                                    <div className='pb-2' key={index}>
                                        <Link className='text-xl  text-[#808080]' href={item.link}>{item.title}</Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
