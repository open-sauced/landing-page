import Image from 'next/image'
import React from 'react'
import osWhiteLogo from '../public/osWhiteLogo.svg'

const Footer2 = () => {
  return (
    <div className="bg-gray-800 py-12 px-28">
        <div className="mb-10">
            <Image src={osWhiteLogo} />
        </div>
        <div className="flex">
            <div className="grow-0 px-4">
                <div className="font-bold mb-2 text-gray-600 text-xs">SOCIAL</div>
                <div className="flex gap-x-2">
                    <div className="w-4 h-4 rounded-full bg-white"></div>
                    <div className="w-4 h-4 rounded-full bg-white"></div>
                    <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>

            </div>
            <div className="grow">
                <div className="font-bold mb-2 text-gray-600 text-xs">MENU</div>
                <ul className="text-sm text-gray-400">
                    <li>About</li>
                    <li>Blog</li>
                    <li>Services</li>
                </ul>
            </div>
            <div className="grow">
                <div className="font-bold mb-2 text-gray-600 text-xs">MORE SAUCE</div>
                <ul className="text-sm text-gray-400">
                    <li><a href="#">hot.opensauced.pizza</a></li>
                    <li><a href="#">insight.opensauced.pizza</a></li>
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