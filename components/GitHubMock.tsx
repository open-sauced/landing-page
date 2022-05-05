import Image from 'next/image'
import React, { FC } from 'react'
import gitHubMock from '../public/temp/GitHubMock.svg'
import { SanityGitHubMock } from '../types/schema'

interface GitHubMockProps {
  githubMockData: SanityGitHubMock
}

const GitHubMock: FC<GitHubMockProps> = ( { githubMockData: {title, subtitle, mockimage}}) => {
  return (
    <div className= ' bg-bgGray shadow-inner '>
      <section className=' max-w-6xl mx-auto px-8 tablet:px-40 py-24  text-gray400   ' >
          <div className=' flex flex-col items-center ' >
            {/* <h1 className=' font-bold text-[36px] '>We do <span className='text-blueAccent'> more </span> than</h1> */}
            <h1 className=' font-bold text-[36px] '>{title}</h1>
            

            <div className='py-12 '>
              <img
              alt=""
              src={`${mockimage as unknown as string}?auto=format`}
              loading="eager"
              />
               {/* <Image layout='fill' src={`${mockimage as unknown as string}?auto=format`}  />  */}
            </div>

            <div className='bg-gray400 w-[248px] h-[1px] mb-12' ></div>

            <p className=' text-[18px] '  > {subtitle} </p>
            
          </div>
          
      </section>

    </div>
  )
}

export default GitHubMock