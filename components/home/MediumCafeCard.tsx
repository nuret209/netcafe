import Image from 'next/image';
import React from 'react'
import { CiImageOn } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import { RiComputerLine } from "react-icons/ri";
import { TbBadgeVr, TbBrandAppleArcade } from "react-icons/tb";
import { LiaPlaystation } from "react-icons/lia";


interface MediumCafeCardProps {
  name: string;
  types: string[];
  locationCounty: string;
  img: string;
  description: string;
  numberofImages: number;
  numberofComputers: number;
  numberofPlaystations: number,
  numberofSimulations: number,
  numberofVRs: number,
  price: string;
}

const MediumCafeCard = (props: MediumCafeCardProps) => {
  return (
    <div className='flex flex-col w-full  md:w-[calc(50%-16px)] lg:w-[calc(33.3333%-16px)] gap-4 overflow-hidden text-[#47484D] '>
      <div className="w-full h-[243px] relative overflow-hidden rounded-xl text-[#191A20]">
        <Image className='w-full hover:scale-110 transition-all duration-300 ' src={`/images/${props.img}`} width={320} height={247} alt='images' />
        <div className='absolute bottom-4 left-4 text-xs flex gap-1 '>
          {props.types.map((type, i) => <div key={i} className='bg-white px-2 py-1 rounded'>
            {type}
          </div>)}
        </div>
      </div>
      <h4 className='text-[#191A20]'>{props.name}</h4>
      <h3 className='flex items-center text-xs gap-1'>
        <span className='flex gap-2'>
          <SlLocationPin size={16} /> {props.locationCounty}
        </span>
        <GoDotFill size={16} />
        <span className='flex gap-2'>
          <CiImageOn size={16} /> {props.numberofImages < 10 ? `0${props.numberofImages}` : props.numberofImages}
        </span>
      </h3>
      <h4 className='text-xs'>
        {props.description}
      </h4>
      <h3 className='text-xs flex gap-2'>
        {props.numberofComputers != 0 && <span className='flex items-center gap-1'>
          <RiComputerLine size={16} /> {props.numberofComputers} PC
        </span>}
        {props.numberofPlaystations != 0 && <span className='flex items-center gap-1'>
          <LiaPlaystation size={16} /> {props.numberofPlaystations} Playstations
        </span>}
        {props.numberofVRs != 0 && <span className='flex items-center gap-1'>
          <TbBadgeVr size={16} /> {props.numberofVRs} VRs
        </span>}
        {props.numberofSimulations != 0 && <span className='flex items-center gap-1'>
          <TbBrandAppleArcade size={16} /> {props.numberofSimulations} Simulations
        </span>}
      </h3>
      <h4 className='font-medium text-[#191A20] text-sm'>₺ {props.price}</h4>
    </div>
  )
}

export default MediumCafeCard