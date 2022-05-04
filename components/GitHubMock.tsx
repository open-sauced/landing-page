import Image from 'next/image'
import React, { FC } from 'react'
import gitHubMock from '../public/temp/GitHubMock.svg'

interface GitHubMockProps {

}

const GitHubMock: FC<GitHubMockProps> = ({}) => {
  return (
    <div className= ' bg-bgGray shadow-inner'>
      <section className=' max-w-6xl mx-auto px-8 tablet:px-40 py-24  text-gray400   ' >
          <div className=' flex flex-col items-center ' >
            <h1 className=' font-bold text-[36px] '>We do <span className='text-blueAccent'> more </span> than</h1>  
            <div className='py-12 '>
              <Image className='my-12'  src={gitHubMock}  />
            </div>
            <div className='bg-gray400 w-[248px] h-[1px] mb-12' ></div>
            <p className=' text-[18px] '  >
              Ate nonfina tinarte in terorbit. In tena, nos, sedit aucepor bisulibus cae clari, urnis.
              Etis cati, culicae nihiculocae fac vid ca notelina co tracibu licaucis omnius, que con probus, venatus cla ressum maximur hin sedo, orio, dii sed ato te cienici pero, ubis condacchus practan trestra cidees seripio.
            </p>
          </div>
          
      </section>

    </div>
  )
}

export default GitHubMock