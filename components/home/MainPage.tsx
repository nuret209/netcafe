import React from 'react'
import TopComponent from './TopComponent'
import FeaturedCafes from './FeaturedCafes'
import PopularCafes from './PopularCafes'

const MainPage = () => {
    return (
        <div className='w-full md:border rounded-2xl pt-8 md:pt-16 md:pb-8 px-2 flex  md:justify-center  min-h-full md:px-4 lg:px-8 md:border-[#ebebeb]'>
            <div className='flex flex-col max-w-[1200px] w-full gap-[56px]'>
                <TopComponent />
                <FeaturedCafes />
                <PopularCafes />
            </div>
        </div>
    )
}

export default MainPage