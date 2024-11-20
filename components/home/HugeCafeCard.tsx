
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { SlLocationPin } from "react-icons/sl";


interface HugeCafeCard {
    name: string;
    locationCity: string;
    mainImage: string;
    images: string[];
    description: string,
    key: number
}    
const HugeCafeCard = (props: HugeCafeCard) => {
    return (
        <Link href={"/cafe/"+props.name.toLowerCase().replace(/\s/g, '')} style={{backgroundImage:`url(/images/${props.mainImage})`}} className={`bg-cover rounded-3xl relative flex w-full md:w-[calc(50%-16px)]
        h-[313px] pl-4 flex-col justify-end text-white pb-6 hover:pb-10 transition-all
        [box-shadow:0px_-145px_78px_-81px_rgba(0,0,0,0.8)_inset]
        `}>
            <div className="p-3 rounded-xl text-xs text-[#191A20] gap-2 bg-white absolute top-4 left-4 flex items-center">
                <SlLocationPin size={20} />
                <h5>{props.locationCity}</h5>
            </div>
            <div className='absolute top-4 right-4 p-1 rounded-xl bg-white gap-1 flex'>
                {props.images.map((image, index) => index < 3 && <Image className='rounded-md h-8 ' src={`/images/${image}`} width={32} height={32} alt='images' key={index} />)}
                {props.images.length > 3 && <span className=' text-[#191A20] absolute right-3 top-2 z-30'>+{props.images.length - 3}</span>}
            </div>
           <h2 className='text-[22px]'>{props.name}</h2>
           <h4 className='text-sm'>{props.description}</h4>
        </Link>
    )
}

export default HugeCafeCard