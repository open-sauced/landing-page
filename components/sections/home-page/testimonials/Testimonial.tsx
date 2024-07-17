import React, { FC } from 'react'
import Image from 'next/image'
import { Transition, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Testimonial as SanityTestimonial } from '../../../../sanity.types'

// Components
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
  const [refCard, cardInView] = useInView()
  const wordArrayOfTestimonial = testimonial?.split(' ')
  const testimonialLinksConverter = wordArrayOfTestimonial?.map(
    (word, index) => {
      const saveTwitterUsername = word.includes('@') && word
      if (saveTwitterUsername) {
        return (
          <a
            key={index}
            className="text-brandOrange"
            href={'https://twitter.com/' + saveTwitterUsername.substring(1)}
            target="_blank"
            rel="noonpener noreferrer"
          >
            {saveTwitterUsername}
          </a>
        )
      }
      return word + ' '
    }
  )

  return (
    <motion.div
      ref={refCard}
      initial={{ opacity: 0, y: cardInView ? 100 : 0 }}
      animate={{ opacity: cardInView ? 1 : 0, y: cardInView ? 0 : 100 }}
      transition={
        {
          duration: 0.5,
          delay: 0.2,
          ease: 'easeInOut',
          type: 'spring',
          stiffness: 50,
        } as Transition
      }
      className='py-3'
    >
      <GradientBorderWrapper style={{ borderRadius: '8px', width: '100%' }}>
        <div className="h-fit min-h-[320px] w-full p-10 bg-[#211E1C] rounded-lg flex flex-col largeTablet:min-h-[300px]">
          <div className="flex-grow">
            <LocalTypography>{testimonialLinksConverter}</LocalTypography>
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
    </motion.div>
  )
}

interface TypographyProps {
  children: React.ReactNode
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
