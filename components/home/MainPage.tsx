import React from 'react'
import TopComponent from './TopComponent'
import FeaturedCafes from './FeaturedCafes'
import PopularCafes from './PopularCafes'
import Copyright from './Copyright'

const MainPage = () => {
    return (
        <div className='w-full md:border rounded-2xl my-2 pt-8 md:pt-16   px-2 flex  md:justify-center  md:px-4 lg:px-8 md:border-[#ebebeb]'>
            <div className='flex flex-col max-w-[1200px] w-full gap-[56px]'>
                <TopComponent />
                <FeaturedCafes />
                <PopularCafes />
                <Copyright />
            </div>
        </div>
    )
}

export default MainPage