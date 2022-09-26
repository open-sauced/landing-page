import React, { FC } from 'react'
import OpenSaucedLogo from './OpenSaucedLogo'

interface Props {
    logos: {
        title: string,
        description: string,
        svgLogo: string,
        pngLogo: string,
        isBlackBG: boolean,
        _createdAt: string,
    }[]
}

const OpenSaucedLogos:FC<Props> = ({logos}) => {
    return (
    <div className='max-w-6xl mx-auto px-4 pt-4 tablet:pt-20 pb-20'>
        <div className='flex justify-center gap-x-16 gap-y-16 flex-wrap'>
            {
                logos && 
                logos.map((logo)=> (
                    <div key={logo._createdAt+logo.title}>
                        <OpenSaucedLogo logo={logo}/>
                    </div>
                ))
            }
        </div>
    </div>
    )
}

export default OpenSaucedLogos