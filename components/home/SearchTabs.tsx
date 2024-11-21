import React, { useContext } from 'react'
import { LiaPlaystation } from 'react-icons/lia'
import { RiComputerLine, RiFilter3Line } from 'react-icons/ri'
import { Tab, TabGroup, TabList } from '@headlessui/react'
import { TbBadgeVr, TbBrandAppleArcade } from 'react-icons/tb'
import { IoClose } from "react-icons/io5";

import Reset from './Reset'
import { SearchFilterContext } from './context'
const multiSelectinPages = [
    {
        "name": "Internet",
        icon: RiComputerLine,
    },
    {
        "name": "Playstation",
        icon: LiaPlaystation,
    },
    {
        "name": "VR",
        icon: TbBadgeVr,
    },
    {
        "name": "Simulasyon",
        icon: TbBrandAppleArcade,
    }
]
const Tabs = [

    [
        {
            "name": "10 PC"
        },
        {
            "name": "20 PC"
        },
        {
            "name": "30 PC"
        },
        {
            "name": "40 PC"
        },
    ],
    [
        {
            "name": "3 Playstation"
        },
        {
            "name": "5 Playstation"
        },
        {
            "name": "7 Playstation"
        },
        {
            "name": "9 Playstation"
        }
    ],
    [
        {
            "name": "1 VR"
        },
        {
            "name": "2 VR"
        },
        {
            "name": "3 VR"
        },
        {
            "name": "4 VR"
        },
    ],
    [
        {
            "name": "1 Simulasyon"
        },
        {
            "name": "2 Simulasyon"
        },
        {
            "name": "3 Simulasyon"
        },
    ]
]
const TabTitles = ["PC Sayısı", "Playstation Sayısı", "VR Sayısı", "Simulasyon Sayısı"]

const SearchTabs = () => {
    const { setFilter, type, popular } = useContext(SearchFilterContext);
    const [mobileActive, setMobileActive] = React.useState(false);
    const filterRef = React.useRef(null);

    const filterSet = (text: string, typeOfFilter: string) => {
        const number = Number(text.match(/\d+/)?.[0]);
        switch (typeOfFilter) {
            case 'Tür':
                if (type.includes('all'))
                    setFilter(prevFilter => ({ ...prevFilter, type: [text] }));
                else
                    setFilter(prevFilter => ({ ...prevFilter, type: [...prevFilter.type, text] }));
                break;
            case 'PC Sayısı':
                setFilter(prevFilter => ({ ...prevFilter, minPC: number }));
                break;
            case 'Playstation Sayısı':
                setFilter(prevFilter => ({ ...prevFilter, minPS: number }));
                break;
            case 'VR Sayısı':
                setFilter(prevFilter => ({ ...prevFilter, minVR: number }));
                break;
            case 'Simulasyon Sayısı':
                setFilter(prevFilter => ({ ...prevFilter, minSimulation: number }));
                break;
            case 'Popular':
                setFilter(prevFilter => ({ ...prevFilter, popular: !popular }));
                break;
        }

    }
    return (
        <>
            <div onClick={() => setMobileActive(true)} className='md:p-4  md:hidden absolute top-4 right-4 z-[2] border border-[#ebebeb] flex items-center py-[14px] px-4 rounded-lg gap-2 text-[#aaa]'>
                <RiFilter3Line size={20} />
                <span>Filter</span>
            </div>
            <div ref={filterRef} className={`${mobileActive ? "visible" : "invisible"} min-w-[292px] max-w-[292px] max-h-full md:max-h-[calc(100vh-16px)] absolute md:visible top-0 right-0 bg-white z-[3] md:relative md:block  md:border md:my-2 
            md:border-[#ebebeb] rounded-xl overflow-auto md:overflow-hidden transition-all before:content[""] before:bg-black/50 before:z-[5] before:w-[calc(100%-292px)] before:md:hidden before:h-full before:fixed before:top-0 before:left-0 `}>

                <span className='text-[22px] w-full p-4 border-b flex justify-between items-center'>
                    Filters
                    <IoClose onClick={() => setMobileActive(false)} size={28} className='block md:hidden' />
                </span>
                <div className="grid gap-4 border-b grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]  overflow-auto  max-h-full pb-16">
                    <div className='m-4'>
                        <span className='text-[#191A20] text-xs'>Popular</span>
                        <label className="block mt-3 cursor-pointer ">
                            <input type="checkbox" checked={popular} onChange={() => filterSet("", "Popular")} className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-[#ededed] 
                         rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
                          peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px]
                           after:bg-white after:[box-shadow:(0,_0,_0,_0.08)_0px_4px_4px_0px] after:border after:rounded-full after:h-5 after:w-5 
                           after:transition-all peer-checked:bg-[#90D48C]"></div>
                        </label>
                    </div>

                    <div className='m-4'>
                        <span className='text-[#191A20] text-xs'>Tür</span>
                        <div className='flex flex-wrap gap-2 flex-grow mt-3'>
                            {multiSelectinPages.map((tab, i) =>
                                <div key={i}
                                    onClick={() => filterSet(tab.name, "Tür")}
                                    className={`border md:border-[#ebebebsetParentCaregoryex-col inline-flex  cursor-pointer p-3 gap-1 rounded-lg ${type.includes(tab.name) ? "bg-[#191a20] text-white" : "text-[#191a20]"}`} >
                                    {<tab.icon />}
                                    <span className='text-xs'>{tab.name}</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <Reset />
                    {Tabs.map((t, i) => (
                        <TabGroup onChange={(index) => filterSet(t[index].name, TabTitles[i])} key={i} className='m-4 overflow-auto'>
                            <span className='text-[#191A20] text-xs'>{TabTitles[i]}</span>
                            <TabList className='flex flex-wrap gap-2 flex-grow mt-3'>
                                {t.map((item, j) => (
                                    <Tab className={`outline-none`} key={j}>
                                        {({ selected }) => (
                                            <div
                                                className={`border md:border-[#ebebebsetParentCaregoryex-col inline-flex  cursor-pointer p-3 rounded-lg ${selected ? "bg-[#191a20] text-white" : "text-[#191a20]"}`} >

                                                <span className='text-xs'>{item.name}</span>
                                            </div>
                                        )}
                                    </Tab>
                                ))}
                            </TabList>
                        </TabGroup>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SearchTabs