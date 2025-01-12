import React from 'react'

const Map = ({mapLink} : {mapLink : string}) => {
    return (
        <div className='w-[min(100%,1200px)] '>
            <span className='text-label-xs'>MAP</span>
            <iframe src={mapLink}
             width="600" height="700" className='w-full rounded-xl outline-none mt-5 h-80 md:h-[700px]'  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Map