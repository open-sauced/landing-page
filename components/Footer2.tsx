import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import osWhiteLogo from '../public/osWhiteLogo.svg'
import { BsDiscord, BsGithub, BsTwitter, BsYoutube } from 'react-icons/bs'
import { FaDev } from 'react-icons/fa'

const Footer2 = () => {
  return (
    <div className="bg-gray-800 py-12 px-28">
        <div className="mb-10">
            <Image alt='OpenSauced' src={osWhiteLogo} />
        </div>
        <div className="flex gap-x-10 gap-y-6 flex-wrap">
            <div className="grow-0">
                <div className="font-bold mb-2 text-gray-600 text-xs">SOCIAL</div>
                <div className="flex items-center gap-x-3">
                    <a href="https://twitter.com/saucedopen">
                        <BsTwitter className="text-white text-2xl" />
                    </a>
                    <a href="https://github.com/open-sauced">
                        <BsGithub className="text-white text-2xl" />
                    </a>
                    <a href="https://www.youtube.com/c/OpenSauced">
                        <BsYoutube className="text-white text-2xl" />
                    </a>
                    <a href="https://discord.gg/PhgxgXz8">
                        <BsDiscord className="text-white text-2xl" />
                    </a>
                    <a href="https://dev.to/opensauced">
                        <FaDev className="text-white text-2xl" />
                    </a>
                </div>

            </div>
            <div className="grow">
                <div className="font-bold mb-2 text-gray-600 text-xs">MENU</div>
                <ul className="text-sm text-gray-400">
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/press">Press Kit</Link></li>
                </ul>
            </div>
            <div className="grow">
                <div className="font-bold mb-2 text-gray-600 text-xs">MORE SAUCE</div>
                <ul className="text-sm text-gray-400">
                    <li><a href="https://hot.opensauced.pizza">hot.opensauced.pizza</a></li>
                    <li><a href="https://insights.opensauced.pizza">insights.opensauced.pizza</a></li>
                </ul>
            </div>
            <div className="grow">
                <div className="font-bold mb-2 text-gray-600 text-xs">CONTACT</div>
                <div className="text-sm text-gray-400">
                    +1(123) 456-7890
                </div>
            </div>
        </div>
        <div className="grow flex justify-between mt-10 py-6 border-t-2 border-gray-700">
            <div className="text-sm text-gray-500">C 2022 Open Sauced, LLC. All rights reserved.</div>
            <div className="text-sm text-gray-500">
                <ul className="flex gap-2">
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Status</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer2