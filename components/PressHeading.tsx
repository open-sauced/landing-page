import React, { FC } from 'react'

interface Props {
  headingData : {
    title : string,
    subtitle: string,
  }
}
const PressHeading:FC<Props> = ({headingData}) => {
  const {title, subtitle } = headingData;
  return (
    <div className='py-[4rem] tablet:py-[8rem]'>
      <div>
        <h1 className='text-white font-bold tracking-tight mb-2 text-[2rem] tablet:text-[3rem]'>{title}</h1>
        <p className='text-white font-semibold leading-5 tablet:leading-6 tracking-tight text-[1rem] tablet:text-lg'>{subtitle}</p>
      </div>
    </div>
  )
}

export default PressHeading