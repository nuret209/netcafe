import React from 'react'
import Cafes from "@/data/Cafe.json"
import MediumCafeCard from './MediumCafeCard'
const PopularCafes = () => {
  return (
    <div className=''>
      <h3 className='text-[#191A20] text-xs mb-6'>LATEST PROPERTIES</h3>
      <div className='flex flex-wrap gap-4'>
        {Cafes.filter(cafe => cafe.popularNow).map((cafe, i) =>
          <MediumCafeCard
            img={cafe.img}
            types={cafe.types}
            description={cafe.description}
            name={cafe.name}
            locationCounty={cafe.location.county}
            numberofImages={cafe.images.length}
            numberofComputers={cafe.numberofComputers}
            numberofPlaystations={cafe.numberofPlaystations}
            numberofSimulations={cafe.numberofSimulations}
            numberofVRs={cafe.numberofVRs}
            price={cafe.price}
            key={i} />
        )}
      </div>
    </div>
  )
}

export default PopularCafes