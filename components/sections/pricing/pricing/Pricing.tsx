import React, { FC, ReactElement } from 'react'
import { PricingPage as SanityPricingPage } from '../../../../sanity.types'
import { getPartialString, getPartialStringFromEnd } from '../../../../utils/stringUtils'
import GradientBorderWrapper from '../../../common/GradientBorderWrapper'
import SectionWrapper from '../../../common/layout/SectionWrapper'
import { Heading, Typography } from '../../../common/text'
import PricingCard from './PricingCard'
interface PricingProps {
  packageOption: SanityPricingPage['packageOptions']
  introduction: SanityPricingPage['introduction']
}

const Pricing: FC<PricingProps> = ({
  packageOption,
  introduction,
}): ReactElement => {
  // Make sure we only show 3 packages
  const limitedPackages = packageOption?.slice(0, 3)

  return (
    <SectionWrapper pt={205} pts={60} pb={260}>
      <Typography variant="preHeading">Pricing</Typography>
      <div className="w-full largeTablet:w-2/3">
        <Heading>
        {`$yellow-to-orange${getPartialString(introduction?.heading as unknown as string, 0.4)}$yellow-to-orange ${getPartialStringFromEnd(introduction?.heading as unknown as string, 0.6)}`}
        </Heading>
      </div>
      <div className="pt-4 pb-10 largeTablet:pt-10 largeTablet:pb-20 largeTablet:w-[58%]">
        <Typography variant="subheading">
          {introduction?.subheading}
        </Typography>
      </div>
      <div className="w-full flex flex-col gap-6 justify-center items-center largeTablet:flex-row">
        {limitedPackages?.map((item, i) => {
          const height =
            i !== 1 ? 'largeTablet:min-h-[454px]' : 'largeTablet:min-h-[486px]'
          const wrapperStyle = `h-fit w-full ${height}] largeTablet:w-1/3 `
          return (
            <div key={item._key} className={wrapperStyle}>
              <GradientBorderWrapper
                key={item._key}
                style={{ width: '100%', height: '100%', borderRadius: '5px' }}
              >
                <PricingCard data={item as unknown as any} index={i} />
              </GradientBorderWrapper>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}

export default Pricing
