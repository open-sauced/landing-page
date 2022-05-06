import Image from 'next/image'
import React, { FC } from 'react'
import { SanityGithubMock } from '../types/schema'

interface GitHubMockProps {
  githubMockData: SanityGithubMock
}

const GitHubMock: FC<GitHubMockProps> = ( { githubMockData: {title, subtitle, mockimage}}) => {
  return (
    <div className= ' bg-bgGray shadow-inner '>
      <section className=' max-w-6xl mx-auto px-8 tablet:px-40 py-24  text-gray400   ' >
          <div className=' flex flex-col items-center ' >
            <h1 className=' font-bold text-[36px] '>{title}</h1>
            
            <div className='py-12 '>
              <img
              alt=""
              src={`${mockimage as unknown as string}?auto=format`}
              loading="eager"
              />
            </div>

            <div className='bg-gray400 w-[248px] h-[1px] mb-12' ></div>

            <p className=' text-[18px] '  > {subtitle} </p>
            
          </div>
          
      </section>

    </div>
  )
}

export default GitHubMock