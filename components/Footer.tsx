import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

interface FooterProps{

}

const footerItems = [
    {
        label: "GitHub",
        link: "https//github.com",
        icon: "/temp/github-brands.svg",
    },
    {
        label: "GitHub",
        link: "https//github.com",
        icon: "/temp/twitter-brands.svg",
    },
    {
        label: "GitHub",
        link: "https//github.com",
        icon: "/temp/discord-brands.svg",
    },
    {
        label: "GitHub",
        link: "https//github.com",
        icon: "/temp/youtube-brands.svg",
    },
    {
        label: "GitHub",
        link: "https//github.com",
        icon: "/temp/dev-brands.svg",
    },
]

const Footer:FC<FooterProps> = () =>  {
  return (
    <section className='pb-[100px]'>
        <ul className='flex gap-[25px] justify-center'>
            {
                footerItems.map( item => (
                    <li className='w-[20px] h-auto'>
                        <Link href={"/"} >
                            <a href="">
                                <Image src={item.icon} width={50} height={50} />
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