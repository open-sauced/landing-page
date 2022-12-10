import Image from 'next/image'
import React, { FC } from 'react'
import { SanityTestimonial } from '../../../../types/schema'
import GradientBorderWrapper from '../../../common/GradientBorderWrapper'

interface TestimonialProps {
  testimonial: SanityTestimonial
}

const Testimonial: FC<TestimonialProps> = ({
  testimonial: {
    twitterUsername,
    twitterName,
    userImage,
    testimonial,
    tweetLink,
  },
}) => {
  return (
    <div>
      <GradientBorderWrapper style={{ borderRadius: '8px', width: '100%' }}>
        <div className="h-fit min-h-[320px] w-full p-10 bg-[#211E1C] rounded-lg flex flex-col largeTablet:min-h-[300px]">
          <div className="flex-grow">
            <LocalTypography>{testimonial}</LocalTypography>
          </div>

          <div className=" flex items-center gap-2 ">
            <GradientBorderWrapper style={{ borderRadius: '50%' }}>
              <div className=" shadow-md overflow-hidden rounded-full w-[72px] h-[72px]">
                <Image
                  className=" rounded-full flex-[1] shadow-md  "
                  alt={twitterUsername + "'s photo"}
                  src={userImage as unknown as string}
                  width={72}
                  height={72}
                />
              </div>
            </GradientBorderWrapper>

            <div className="pl-6">
              <h6 className="text-gray400 font-bold text-[14px] flex-[3]">
                <LocalTypography variant="username">
                  {twitterName}{' '}
                </LocalTypography>
                <a
                  className=" hover:text-gray150 font-normal text-[14px] tracking-[-4%] "
                  href={tweetLink as unknown as string}
                >
                  <LocalTypography variant="twitter">
                    @{twitterUsername}{' '}
                  </LocalTypography>
                </a>
                <span />
              </h6>
            </div>
          </div>
        </div>
      </GradientBorderWrapper>
    </div>
  )
}

interface TypographyProps {
  variant?: 'content' | 'username' | 'twitter'
}

const LocalTypography: FC<TypographyProps> = ({
  children,
  variant = 'content',
}): React.ReactElement => {
  const contentStyle = `font-normal text-base text-textPrimary tracking-[-0.02em] opacity-70 `
  const usernameStyle = `font-semibold text-base text-textPrimary tracking-[-0.02em] `
  const twitterStyle = `font-normal text-[14px] leading-[150%] text-[#ED5432] tracking-[-0.02em]`

  const apliedStyle =
    variant === 'content'
      ? contentStyle
      : variant === 'username'
      ? usernameStyle
      : twitterStyle
  return <p className={apliedStyle}>{children}</p>
}

export default Testimonial
