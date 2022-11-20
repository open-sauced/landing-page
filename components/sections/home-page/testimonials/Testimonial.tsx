import Image from 'next/image'
import React, { FC } from 'react'
import { SanityTestimonial } from '../../../../types/schema'
import { Paragraph } from '../../../common/text'

interface TestimonialProps {
  testimonial: SanityTestimonial
}

const Testimonial: FC<TestimonialProps> = ({
  testimonial: {
    twitterUsername,
    twitterName,
    userImage,
    date,
    testimonial,
    tweetLink,
  },
}) => {
  return (
    <div
      className={`h-[272px] w-full rounded-lg p-[1px] bg-gradient-to-tr from-[#ED5432] via-[#EDA232] to-[#ED5432] drop-shadow-[0_0_4px_#ED5432] `}
    >
      <div className="h-full w-full p-10 bg-darkBG rounded-lg flex flex-col">
        <div className="flex-grow">
          <Typography>{testimonial}</Typography>
        </div>

        <div className=" flex items-center gap-2 ">
          <div
            className={`h-[73px] w-[73px] rounded-full p-[1px] bg-gradient-to-tr from-[#ED5432] via-[#EDA232] to-[#ED5432] drop-shadow-[0_0_4px_#ED5432] `}
          >
            <div className=" shadow-md overflow-hidden rounded-full w-[72px] h-[72px]">
              <Image
                className=" rounded-full flex-[1] shadow-md  "
                alt={twitterUsername + "'s photo"}
                src={userImage as unknown as string}
                width={72}
                height={72}
              />
            </div>
          </div>
          <div className="pl-6">
            <h6 className="text-gray400 font-bold text-[14px] flex-[3]">
              <Typography variant="username">{twitterName} </Typography>
              <a
                className=" hover:text-gray150 font-normal text-[14px] tracking-[-4%] "
                href={tweetLink as unknown as string}
              >
                <Typography variant="twitter">@{twitterUsername} </Typography>
              </a>
              <span />
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}

interface TypographyProps {
  variant?: 'content' | 'username' | 'twitter'
}

const Typography: FC<TypographyProps> = ({
  children,
  variant = 'content',
}): React.ReactElement => {
  const contentStyle = `font-normal text-base text-[#FFF9ED] tracking-[-0.02em] opacity-70 `
  const usernameStyle = `font-semibold text-base text-[#FFF9ED] tracking-[-0.02em] `
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
