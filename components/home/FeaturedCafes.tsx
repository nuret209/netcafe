import React from 'react'
import Cafes from "@/data/Cafe.json"
import HugeCafeCard from './HugeCafeCard'
const FeaturedCafes = () => {
  return (
    <div>
      <h3 className='text-[#191A20] text-xs mb-6'>FEATURED PROPERTIES</h3>
      <div className='flex flex-wrap gap-4'>
        {Cafes.filter(cafe => cafe.featured).map((cafe, i) =>
          <HugeCafeCard key={i} name={cafe.name} mainImage={cafe.mainImage} images={cafe.images} description={cafe.description} locationCity={cafe.location.city} />
        )}
      </div>
    </div>
  )
}

export default FeaturedCafes