import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import osWhiteLogo from '../public/osWhiteLogo.svg'
import { BsDiscord, BsGithub, BsTwitter, BsYoutube } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import { FaDev } from 'react-icons/fa'

const Footer2 = () => {
  return (
    <div className=" bg-brandRed bg-opacity-[7%] py-12 px-28">
        <div className="mb-10">
            <Image alt='OpenSauced' src={osWhiteLogo} />
        </div>
        <div className="flex gap-x-10 gap-y-6 flex-wrap">
            <div className="grow-0">
                <div className="font-bold mb-6 text-gray-600 text-xs">SOCIAL</div>
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
                    <a href="https://www.tiktok.com/@opensauced_">
                        <FaTiktok className="text-white text-2xl" />
                    </a>
                </div>

            </div>
            <div className="grow">
                <div className="font-bold mb-6 text-gray-600 text-xs">LINKS</div>
                <ul className="text-sm flex flex-col gap-2 text-gray-400">
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/press">Press Kit</Link></li>
                </ul>
            </div>
            <div className="grow">
                <div className="font-bold mb-6 text-gray-600 text-xs">ADDITIONAL RESOURCES</div>
                <ul className="text-sm flex flex-col gap-2 text-gray-400">
                    <li><a href="https://hot.opensauced.pizza">hot.opensauced.pizza</a></li>
                    <li><a href="https://insights.opensauced.pizza">insights.opensauced.pizza</a></li>
                </ul>
            </div>
            <div className="grow">
                <div className="font-bold mb-6 text-gray-600 text-xs">CONTACT</div>
                <div className="text-sm text-gray-400">
                    <p><a href="mailto:hello@opensauced.pizza">hello@opensauced.pizza</a></p>
                </div>
            </div>
        </div>
        <div className="grow flex justify-between mt-16 py-6 border-t-2 border-gray-700">
            <div className="text-sm text-gray-500">C 2022 Open Sauced, LLC. All rights reserved.</div>
            <div className="text-sm text-gray-500">
                <ul className="flex gap-2">
                    <li><a href="https://app.termly.io/document/privacy-policy/5e303854-d262-468a-80ec-54b645d01c2e"> Privacy </a></li>
                    <li><a href="https://app.termly.io/document/terms-of-use-for-saas/03e4e1c1-53ad-4fc4-b415-5c3f0e8c25ef">Terms</a></li>
                    <li><a href="https://api.opensauced.pizza/docs#/Health%20check%20service/healthStatusWeb">Status</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer2