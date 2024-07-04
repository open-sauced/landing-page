import React from 'react'
import { Heading, Typography } from '../../common/text'
import PHBadgeDark from '../../common/product-hunt/PHBadgeDark'
import Image from 'next/image'
import pizzaImage from '../../../public/lunchweekImages/pizza_slice.png'
import pizzaBackgroundImage from '../../../public/lunchweekImages/background.png'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="z-40 py-20 pt-10 tablet:py-36 border-slate-800 largeTablet:flex-row relative flex flex-col gap-y-5 from-transparent via-red-800 to-transparent w-full max-w-[1256px] mx-auto px-6 h-fit justify-center items-center">
        <div className="space-y-1 w-[90%]">
          <Typography tracking="widest" alignLarge="left" variant="preHeading">
            LUNCH WEEK
          </Typography>
          <div className="inline">
            <h1 className="w-full font-bold text-4xl text-textPrimary tracking-[-0.02em] largeTablet:text-5xl largeTablet:tracking-[-0.03em]">
              Serving up new features every day,
            </h1>
            <h1 className="w-full font-bold text-4xl text-textPrimary tracking-[-0.02em] largeTablet:text-5xl largeTablet:tracking-[-0.03em] bg-gradient-to-r from-brandYellow via-brandRed to-brandRed text-transparent bg-clip-text">
              lunch time is launch time
            </h1>
          </div>
          <div className="pt-4 pb-6">
            <p className="text-xl font-normal opacity-80">
              Join us everyday this week to see what we&apos;ve been cookin&apos; up.
            </p>
          </div>
          <PHBadgeDark />
        </div>
        <div className="flex flex-col items-center justify-center relative">
          <Image
            src={pizzaBackgroundImage}
            alt="decorative background"
            style={{
              width: '100%',
              height: 'auto',
            }}
            priority={true}
            loading="eager"
            className="scl "
          />
          <motion.img
            initial={{ translateY: 0 }}
            animate={{ translateY: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
            className="absolute largeTablet:w-max-[100px] w-max-[70px]"
            src='/lunchweekImages/pizza_slice.png'
            alt="pizza slice"
          />
        </div>
    </section>
  )
}

export default Hero
