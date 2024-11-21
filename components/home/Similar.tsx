import React from 'react'
import Cafes from "@/data/Cafe.json"
import MediumCafeCard from './MediumCafeCard'
const Similar = ({ types, name }: { types: string[], name: string }) => {
    return (
        <div>
            <span className='text-xs'>SIMILAR PROPERTIES</span>
            <div className='flex flex-col md:flex-row mt-5 gap-4'>

                {Cafes.filter(cafe => cafe.types[1] == types[1] && cafe.name != name).map((cafe, i) =>
                    i < 3 &&
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

export default Similar