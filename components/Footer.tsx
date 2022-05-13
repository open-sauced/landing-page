import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { SanityFooter } from '../types/schema'

interface FooterProps{
    footer: SanityFooter[]

}

const Footer:FC<FooterProps> = ({footer}) =>  {

  return (
    <section className='pb-[100px]'>
        <ul className='flex gap-[25px] justify-center'>
            {
                footer.map( item => (
                    <li key={item._id} className='w-[20px] h-auto'>
                        <Link href={item.url as unknown as string} >
                            <a>
                                <Image src={item.icon as unknown as string} width={50} height={50} />
                            </a>
                        </Link>
                    </li>
                ))
            }
        </ul>
    </section>
  )
}

export default Footer