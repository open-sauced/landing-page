import React, { FC, ReactElement } from 'react'
import { AboutPage as SanityAboutPage } from '../../../sanity.types';

// Components
import SectionWrapper from '../../common/layout/SectionWrapper'
import GradientBorderWrapper from '../../common/GradientBorderWrapper'
import SocialLinks from '../../common/SocialLinks'

interface FollowUsProps {
  social: SanityAboutPage['socialLinks']
}

const FollowUs: FC<FollowUsProps> = ({ social }): ReactElement => {
  return (
    <SectionWrapper direction="row" pb={250} pbs={110}>
      <GradientBorderWrapper>
        <div className="flex flex-col px-8 py-4 bg-[#211e1c] rounded-md justify-center items-center largeTablet:flex-row ">
          <p className="text-sm font-semibold text-textPrimary pb-4 largeTablet:pb-0 largeTablet:mr-8 ">
            Follow us on
          </p>
          <SocialLinks social={social} aboutPage />
        </div>
      </GradientBorderWrapper>
    </SectionWrapper>
  )
}

export default FollowUs
