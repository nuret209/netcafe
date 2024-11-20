import React from 'react'
import Image from 'next/image'
const Copyright = () => {
    return (
        <div className='flex justify-between mt-12 w-full items-center'>
            <span className='flex gap-2 mt-[-4px]'>
                <Image src={"/images/sitelogo.svg"} alt='logo' width={24} height={24} />
                wagmigg
            </span>
            <span className='text-xs flex gap-2'>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </span>
        </div>
    )
}

export default Copyright