"use client"
import React from 'react'
import Cafe from "@/data/Cafe.json"
import NavMenu from '@/components/home/NavMenu';
import Copyright from '@/components/home/Copyright';
import CafeDetail from '@/components/home/CafeDetail';
import Video from '@/components/home/Video';
import Map from '@/components/home/Map';
import Similar from '@/components/home/Similar';

interface CafeType {
  name: string;
  location: {
    city: string;
    county: string;
    zip: string;
    neighbourhood: string,
    street: string,
  };
  description: string;
  numberofComputers: number;
  numberofPlaystations: number;
  numberofSimulations: number;
  numberofVRs: number;
  time: string;
  price: string;
  img: string;
  images: string[];
  types: string[];
  featured: boolean;
  popularNow: boolean;
  videoLink: string;
  mapLink: string;
}

const Page = ({ params }: { params: Promise<{ cafename: string }> }) => {
  const [cafe, setCafe] = React.useState<CafeType>()
  React.useEffect(() => {
    params.then(res => {
      const foundCafe = Cafe.find(caf => caf.name.toLowerCase().replace(/\s/g, '') === res.cafename);
      if (foundCafe) {
        setCafe(foundCafe);
      }
    });
  }, [params]);

  return (
    <div className='md:pl-[100px]'>
      <NavMenu activePage={999} />
      <div className='md:border-[#ebebeb] md:border  md:m-2  rounded-xl flex flex-col items-center px-8 py-14'>
        <div className='w-[min(100%,1200px)] flex flex-col gap-14'>
          {cafe ? (
            <>
              <CafeDetail
                img={cafe.img}
                types={cafe.types}
                description={cafe.description}
                name={cafe.name}
                images={cafe.images}
                locationCounty={cafe.location.county}
                locationNeighbourhood={cafe.location.neighbourhood}
                locationZip={cafe.location.zip}
                locationStreet={cafe.location.street}
                numberofComputers={cafe.numberofComputers}
                numberofPlaystations={cafe.numberofPlaystations}
                numberofSimulations={cafe.numberofSimulations}
                numberofVRs={cafe.numberofVRs}
                locationCity={cafe.location.city}
                price={cafe.price} key={0} />

              <Video videoLink={cafe.videoLink} />
              <Map mapLink={cafe.mapLink} />
              <Similar name={cafe.name} types={cafe.types} />
              <Copyright />
            </>
          ) : "not found"}
        </div>
      </div>
    </div>
  )
}

export default Page