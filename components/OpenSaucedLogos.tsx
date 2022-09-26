import React, { FC } from 'react'
import OpenSaucedLogo from './OpenSaucedLogo'

const OpenSaucedLogos:FC = () => {
    const logos = [1,2,3,4,5,6]
    return (
    <div className='max-w-6xl mx-auto px-4 pt-10 pb-16'>
        <div className='flex justify-center gap-x-8 gap-y-16 flex-wrap'>
            {
                logos && 
                logos.map((logo, index)=> (
                    <div key={index+3}>
                        <OpenSaucedLogo/>
                    </div>
                ))
            }

        </div>
    </div>
    )
}

export default OpenSaucedLogos