import React, { FC } from 'react'

interface Props {
  logo: {
    title: string
    description: string
    svgLogo: string
    pngLogo: string
    isBlackBG: boolean
  }
}

const OpenSaucedLogo: FC<Props> = ({ logo }) => {
  const { title, description, pngLogo, svgLogo, isBlackBG } = logo

  return (
    <div className=" w-96 tablet:max-w-sm">
      <div
        className={`flex h-40 w-full border-2 p-4 border-orange-500 bg-white rounded-lg relative justify-center items-center ${
          isBlackBG ? 'bg-black' : 'bg-none'
        } `}
      >
        <div className="h-24 w-auto">
          <img className="w-auto h-full" src={svgLogo} alt={title} />
        </div>
      </div>

      <div className="mt-7">
        <h2 className="text-xl tracking-tight mb-6 text-gray-700 font-bold">
          {title}
        </h2>
        <p className="text-sm tracking-tight text-gray-600">{description}</p>
      </div>

      <div className="flex gap-x-4 pt-20">
        <div className="relative">
          <div className="bg-orange-500 rounded-md blur-sm absolute -inset-[.01rem]"></div>
          <a
            className="relative"
            href={svgLogo as unknown as string}
            title="Image title"
            download={title}
          >
            <button className="hover:bg-gradient-to-l text-white text-sm font-bold px-4 py-1 rounded-md bg-gradient-to-r from-yellow-500 to-orange-500">
              SVG
            </button>
          </a>
        </div>
        <div className="relative">
          <div className="bg-orange-500 rounded-md blur-sm absolute -inset-[.01rem]"></div>
          <a
            className="relative"
            href={pngLogo as unknown as string}
            title="Image title"
            download={title}
          >
            <button className="text-white text-sm font-bold bg-gradient-to-r px-4 py-1 rounded-md transition-all transform duration-500 hover:bg-gradient-to-l from-yellow-500 to-orange-500">
              PNG
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default OpenSaucedLogo
