import Image from 'next/image'
import React from 'react'
import { SanityOpenSaucedLogo } from '../types/schema'
import { ImCloudDownload } from 'react-icons/im';

interface PermittedLogosProps {
  logos: SanityOpenSaucedLogo[]
}

const PermittedLogos = ({ logos }: PermittedLogosProps) => {
  return (
    <section className='my-10'>
        <h6 className='text-[1.5rem] font-semibold text-gray-700 text-center'>
            Permitted logos
        </h6>

        <div className='my-16 grid largeTablet:grid-flow-col grid-flow-row gap-4'>

            {
                logos.map((logo) => (
                    <div key={logo._createdAt} className=' border-gray-200 border-[1px] p-2 rounded-[10px] '>
                        <div className='rounded-[10px] bg-gray-100 p-2 overflow-hidden'>
                            <img className='h-[90px] mx-auto w-auto' alt={logo.title} src={logo.logo as unknown as string}/>
                        </div>

                        <div className='flex justify-between gap-2 mt-3'>
                            <div>
                                <h6 className='text-[1.1rem] font-semibold text-gray-600'>{logo.title}</h6>
                            </div>

                            <a href={logo.logo as unknown as string} title="ImageName">
                                <button className="py-1 px-2 bg-opacity-20 bg-darkOrange rounded-lg ">
                                    <ImCloudDownload className=' text-[20px] text-darkOrange ' />
                                </button>
                            </a>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default PermittedLogos
