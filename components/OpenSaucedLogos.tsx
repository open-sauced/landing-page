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
    <div className="max-w-7xl px-6 tablet:px-0 mx-auto pt-16 tablet:pt-20 pb-20">
        <div className="flex justify-center gap-x-12 gap-y-24 flex-wrap">
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