import React, { useState } from 'react'
import Cafe from "@/data/Cafe.json"
import MediumCafeCard from './MediumCafeCard'
import { SearchFilterContext } from './context'
import { RiSearch2Line } from 'react-icons/ri'

const ListFilteredTabs = () => {
  const { minPC, minPS, minVR, minSimulation, city, type, popular } = React.useContext(SearchFilterContext)
  const [search, setSearch] = useState("");
  return (
    <div className='md:border-[#ebebeb] md:border  md:m-2 p-4 w-full max-w-full rounded-xl'>
      <div className='mb-4 border  relative rounded-lg w-2/3 md:w-full'>
        <RiSearch2Line className='absolute top-2 left-2' size={32} />
        <input value={search} onChange={e => setSearch(e.target.value)} className='w-full outline-none rounded-lg p-3 pl-14 text-lg' placeholder='Search...' type='text' />
      </div>
      <div className='flex flex-wrap gap-4   md:ml-2  box-border rounded-xl w-full   max-h-[calc(100vh-122px)] overflow-auto'>
        {Cafe.map((cafe, i) =>
          (((search == "" || cafe.name.toLowerCase().includes(search.toLowerCase())) &&
            (popular ? cafe.popularNow : true) &&
            cafe.numberofComputers >= minPC &&
            cafe.numberofPlaystations >= minPS &&
            cafe.numberofVRs >= minVR &&
            cafe.numberofSimulations >= minSimulation &&
            (city === 'all' || cafe.location.city === city)
            && (type.includes('all') ||
              type.includes(cafe.types[1]) || type.includes(cafe.types[2]) || type.includes(cafe.types[3]) || type.includes(cafe.types[4]) || type.includes(cafe.types[5]) || type.includes(cafe.types[6]))
          ))
          &&
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

export default ListFilteredTabs