import React, { FC } from 'react'

interface Props {
    logo: {
        title: string,
        description: string,
        svgLogo: string,
        pngLogo: string,
        isBlackBG: boolean,
    }
}

const OpenSaucedLogo:FC<Props> = ({logo}) => {
    const { title, description, pngLogo, svgLogo, isBlackBG} = logo;

    return (
    <div className='w-full tablet:max-w-xs'>
        <div className={`flex h-40 w-full justify-center items-center ${ isBlackBG ? "bg-black" : "bg-none"} ` }>
            <div className='h-24 w-auto'>
                <img className='w-full h-full' src={svgLogo} alt={title} />
            </div>
        </div>

        <div className='mt-5'>
            <h2 className='text-[20px] tracking-tight mb-[5px] text-gray-700 font-bold'>{title}</h2>
            <p className='text-[1rem] tracking-tight text-gray-700'>{description}</p>
        </div>

        <div className='flex gap-x-2 pt-4'>
            <a href={svgLogo as unknown as string} title="ImageName">
                <button className='text-white text-[18px] font-semibold bg-gradient-to-r px-4 py-1 rounded-md from-orange-500 to-orange-400'>SVG</button>
            </a>
            <a href={pngLogo as unknown as string} title="ImageName">
                <button className='text-white text-[18px] font-semibold bg-gradient-to-r px-4 py-1 rounded-md from-orange-500 to-orange-400'>PNG</button>
            </a>
        </div>
    </div>
    )
}

export default OpenSaucedLogo