"use client"
import ListFilteredTabs from '@/components/home/ListFilteredTabs'
import NavMenu from '@/components/home/NavMenu'
import React, { useState } from 'react'
import { SearchFilterContext } from '@/components/home/context'
import SearchTabs from '@/components/home/SearchTabs'
const Page = () => {
    const [{ minPC, minPS, minVR, minSimulation, city, type,popular }, setFilter] =
        useState({ minPC: 0, minPS: 0, minVR: 0, minSimulation: 0, city: 'all', popular: false, type: ['all'] });
    React.useEffect(() => {
        console.log(popular);
    }, [popular])
    return (
        <div className='md:pl-[104px] flex'>
            <SearchFilterContext.Provider value={
                {
                    minPC,
                    minPS,
                    minVR,
                    minSimulation,
                    city,
                    type,
                    popular,
                    setFilter,
                }
            }>
                <NavMenu activePage={1} />
                <SearchTabs />
                <ListFilteredTabs />
            </SearchFilterContext.Provider>
        </div>
    )
}

export default Page