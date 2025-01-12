import React from 'react'
import { Bricolage_Grotesque } from "next/font/google"
import { RiSearch2Line, RiFilter3Line } from 'react-icons/ri'
import Image from 'next/image'


const EmojiFont = Bricolage_Grotesque({ weight: ['400'], subsets: ["latin"] })
const TopComponent = () => {
    return (
        <div>
            <div className='md:hidden block'>
                <Image src="/images/sitelogo.svg" height={32} width={32} alt='logo' />
            </div>
            <div className='md:flex mt-6 md:mt-0  items-center justify-between '>
                <div className='text-[22px] font-medium flex'>
                    <span>Hi</span>
                    <span className={EmojiFont.className + " ml-1"}>👋</span>
                </div>
                <div className='text-label-xs text-[#A3A3A6]  flex gap-4 mt-6 md:mt-0'>
                    <a href="/search" className='border w-full md:min-w-[222px] justify-between border-[#f4f4f4] px-4 py-2 rounded-lg flex items-center font-medium '>
                        <span>Search properties</span>
                        <RiSearch2Line size={20} />
                    </a>
                    <a href='/search' className="border border-[#f4f4f4] flex items-center py-2 px-4 rounded-lg gap-2">
                        <RiFilter3Line size={20} />
                        <span>Filter</span>
                    </a>
                </div>
            </div >
        </div>
    )
}

export default TopComponent