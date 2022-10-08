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
    <div className='w-full tablet:max-w-sm'>
        <div className={`flex h-40 w-full rounded-lg border-2 border-gray-100 justify-center items-center ${ isBlackBG ? "bg-black" : "bg-none"} ` }>
            <div className='h-24 w-auto'>
                <img className='w-full h-full' src={svgLogo} alt={title} />
            </div>
        </div>

        <div className='mt-7'>
            <h2 className='text-xl tracking-tight mb-6 text-gray-700 font-bold'>{title}</h2>
            <p className='text-sm tracking-tight text-gray-700'>{description}</p>
        </div>

        <div className='flex gap-x-2 pt-8'>
            <a href={svgLogo as unknown as string} title="ImageName">
                <button className='text-white text-sm font-bold bg-gradient-to-r px-4 py-1 rounded-md bg-orange-500'>SVG</button>
            </a>
            <a href={pngLogo as unknown as string} title="ImageName">
                <button className='text-white text-sm font-bold bg-gradient-to-r px-4 py-1 rounded-md bg-orange-500'>PNG</button>
            </a>
        </div>
    </div>
    )
}

export default OpenSaucedLogo