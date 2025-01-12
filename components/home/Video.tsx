import React from 'react'

const Video = ({ videoLink }: { videoLink: string }) => {
    return (
        <div className='w-[min(100%,1200px)]'>
            <span className='text-label-xs'>VIDEO</span>
            <iframe width="1920" height="675" className='w-full rounded-xl mt-5 h-80 md:h-[700px]' src={videoLink} allow="presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
    )
}

export default Video