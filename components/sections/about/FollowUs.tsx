import React, { FC, ReactElement } from 'react'
import { SanityFooter } from '../../../types/schema'
import Image from 'next/image'
import SectionWrapper from '../../common/layout/SectionWrapper'
import GradientBorderWrapper from '../../common/GradientBorderWrapper'

interface FollowUsProps {
  data: SanityFooter[]
}

const FollowUs: FC<FollowUsProps> = ({ data }): ReactElement => {
  return (
    <SectionWrapper direction='row' pb={250} pbs={110}>
      <GradientBorderWrapper>
        <div className="flex flex-col px-8 py-4 bg-[#211e1c] rounded-md justify-center items-center largeTablet:flex-row ">
          <p className="text-sm font-semibold text-textPrimary pb-4 largeTablet:pb-0 largeTablet:mr-8 ">
            Follow us on
          </p>
          <div className="grid grid-cols-3 gap-x-8 gap-y-3 largeTablet:flex">
            {data.map(({ url, icon, label }) => {
              const src = icon || ''
              const href = url || ''
              return (
                <div className="cursor-pointer">
                  <a href={href} target="_blank">
                    <Image
                      alt={label}
                      src={src as string}
                      width={36}
                      height={36}
                    />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </GradientBorderWrapper>
    </SectionWrapper>
  )
}

export default FollowUs
