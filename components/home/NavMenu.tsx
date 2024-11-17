import Image from 'next/image'
import React from 'react'
import { RiHome5Line, RiUser3Line,RiSearch2Line } from "react-icons/ri";

const MenuPages = [
    {
        "name": "Home",
        "icon": RiHome5Line,
        "link": "/"
    },
    {
        "name": "Search",
        "icon": RiSearch2Line,
        "link": "/search"
    },
]

interface MenuProps {
    activePage: number; //0 home 1 search //account
}

const NavMenu = ({ activePage }: MenuProps) => {

    return (
        <nav className='border fixed z-40 border-[#ebebeb] bg-white md:w-[88px] left-0 md:top-2 bottom-0 md:left-2 md:h-[calc(100%-16px)]  w-full rounded-2xl flex md:flex-col items-center justify-center md:justify-between md:py-8 md:px-0 p-3'>
            <div className='hidden md:block'>
                <Image src="/images/sitelogo.svg" height={32} width={32} alt='logo' />
            </div>
            <div className='flex md:flex-col gap-4'>
                {MenuPages.map((page, index) =>
                    <div className={`w-12 h-12 rounded-xl ${activePage == index ? "bg-[#191A20] pointer-events-none text-white " : "text-[#191A20]"}`} key={index}>
                        <a className='h-full group/page w-full flex justify-center items-center' href={page.link}>
                            <page.icon className='text-lg ' size={32} />
                            <span className='group-hover/page:block absolute hidden left-[78px] z-20 bg-white text-[#191A20] [box-shadow:rgba(0,_0,_0,_0.07)_0px_0.796192px_1.43315px_-0.75px,_rgba(0,_0,_0,_0.07)_0px_2.41451px_4.34611px_-1.5px,_rgba(0,_0,_0,_0.063)_0px_6.38265px_11.4888px_-2.25px,_rgba(0,_0,_0,_0.047)_0px_20px_36px_-3px]
                            py-3 px-4 rounded-xl border border-[rgba(0,0,0,0.08)]
                            '>{page.name}</span>
                        </a>
                    </div>
                )}
            </div>
            <div>
                <div className={`w-12 h-12 rounded-xl  ${activePage == 3 ? "bg-[#191A20] text-white pointer-events-none" : "text-[#191A20]"}`}>
                    <a className='h-full group/page w-full flex justify-center items-center' href="/user">
                        <RiUser3Line className='text-lg' size={32} />
                        <span className='group-hover/page:block absolute hidden left-[78px] z-20 bg-white text-[#191A20] [box-shadow:rgba(0,_0,_0,_0.07)_0px_0.796192px_1.43315px_-0.75px,_rgba(0,_0,_0,_0.07)_0px_2.41451px_4.34611px_-1.5px,_rgba(0,_0,_0,_0.063)_0px_6.38265px_11.4888px_-2.25px,_rgba(0,_0,_0,_0.047)_0px_20px_36px_-3px]
                            py-3 px-4 rounded-xl border border-[rgba(0,0,0,0.08)]
                            '>Accounts</span>
                        
                    </a>
                </div>

            </div>
        </nav>
    )
}

export default NavMenu