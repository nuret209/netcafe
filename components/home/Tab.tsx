import React, { useContext } from 'react'
import { SearchFilterContext } from './context';
const Tab = ({ text, icon, parentCategory }: { text: string, icon: React.ReactNode, parentCategory: string }) => {
    const { setFilter, type } = useContext(SearchFilterContext);
    const [active, setActive] = React.useState(false);
    React.useEffect(() => {
        console.log(active);

    }, [active])
    function handleClick() {
        const number = Number(text.match(/\d+/)?.[0]);
        console.log(parentCategory);
        setActive(true);
        if (!active)
            switch (parentCategory) {
                case 'Tür':
                    if (type.includes('all'))
                        setFilter(prevFilter => ({ ...prevFilter, type: [text] }));
                    else
                        setFilter(prevFilter => ({ ...prevFilter, type: [...prevFilter.type, text] }));
                    break;
                case 'PC Sayısı':
                    setFilter(prevFilter => ({ ...prevFilter, minPC: number}));
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
            }
    }
    return (
        <div
            onClick={handleClick}
            className={`border md:border-[#ebebebsetParentCaregoryex-col inline-flex  cursor-pointer p-3 rounded-lg ${active ? "bg-[#191a20] text-white" : "text-[#191a20]"}`} >
            {icon}
            <span className='text-xs'>{text}</span>
        </div>
    )
}

export default Tab