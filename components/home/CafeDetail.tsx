import React from 'react'
import { RiBookmarkLine, RiComputerLine } from 'react-icons/ri';
import { SlLocationPin } from 'react-icons/sl';
import { LiaPlaystation } from 'react-icons/lia';
import { TbBadgeVr, TbBrandAppleArcade } from 'react-icons/tb';
interface CafeProps {
  name: string;
  locationCity: string;
  images: string[];
  description: string;
  types: string[];
  locationCounty: string;
  locationStreet: string;
  locationZip: string;
  locationNeighbourhood: string
  img: string;
  numberofComputers: number;
  numberofPlaystations: number,
  numberofSimulations: number,
  numberofVRs: number,
  price: string;
  key: number;
}

const CafeDetail = (props: CafeProps) => {

  const CafeDetailImage = () => {
    return (
      <div className='flex flex-wrap   gap-2  w-full'>
        <div style={{ backgroundImage: `url(/images/${props.img})` }} className={` w-full h-[316px] bg-cover rounded-2xl`} />
        {props.images.map((img, i) =>
          <div key={i} style={{ backgroundImage: `url(/images/${img})` }} className='w-[calc(50%-4px)] h-[200px] bg-cover rounded-2xl' />
        )}
      </div>
    )
  }

  return (
    <div className='flex flex-col lg:flex-row  gap-3 w-full min-h-full'>
      <div className='md:block hidden w-full'>
        <CafeDetailImage />
      </div>
      <div className='w-full'>
        <div className='w-full flex justify-between'>
          <div className='flex gap-3 '>
            {props.types.map((type, i) =>
              <div key={i} className='rounded-lg text-xs border border-[#191A20] p-1 px-2 text-gray-500'>
                {type}
              </div>
            )}
          </div>
          <div className='rounded-lg border border-[#191A20] p-1  text-gray-500'>
            <RiBookmarkLine size={16} />
          </div>
        </div>
        <div className='w-full flex flex-col md:flex-row mt-5 justify-between'>
          <div className='text-[22px]'>
            {props.name}
          </div>
          <div >
            ₺{props.price}
          </div>
        </div>
        <div className='flex items-center gap-1 mt-3'>
          <SlLocationPin />
          <span>{props.locationCity},  </span><span>{props.locationCounty}</span>
        </div>
        <div>
          <h3 className='text-xs md:text-sm flex  gap-2 mt-2'>
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
        </div>
        <div className='md:hidden block mt-5'>
          <CafeDetailImage />
        </div>
        <div className='flex flex-col mt-5 gap-4'>
          <span className='text-xs'>ACIKLAMA</span>
          <p className='text-sm'> {props.description}</p>
        </div>
        <div className='flex flex-col mt-5 gap-4'>
          <span className='text-xs'>ADRES</span>
          <div className='grid grid-cols-[auto_auto]  gap-y-3 text-sm'>
            <div className=''>
              <span className='border-b text-xs  text-[#aaa] pb-2'>Sokak</span>
              <h2 className='mt-3 '>{props.locationStreet}</h2>
            </div>
            <div className=''>
              <span className='border-b text-xs text-[#aaa] pb-2'>Mahalle</span>
              <h2 className='mt-3'>{props.locationNeighbourhood}</h2>
            </div>
            <div className=''>
              <span className='border-b text-xs text-[#aaa] pb-2'>No</span>
              <h2 className='mt-3'>{props.locationZip}</h2>
            </div>
            <div className=''>
              <span className='border-b text-xs text-[#aaa] pb-2'>İlçe</span>
              <h2 className='mt-3'>{props.locationCounty}</h2>
            </div>
            <div className=''>
              <span className='border-b text-xs text-[#aaa] pb-2'>Şehir</span>
              <h2 className='mt-3'>{props.locationCity}</h2>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default CafeDetail