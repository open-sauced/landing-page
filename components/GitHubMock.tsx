import React from 'react'

interface Props {

}

function GitHubMock({}: Props) {
  return (
    <div className= ' bg-bgGray absolute  left-0 right-0 shadow-inner'>
      <section className=' max-w-6xl mx-auto px-8 py-24 text-gray400   ' >
          <div className=' flex flex-col items-center ' >
            <h1 className=' font-bold text-[36px] '>We do more than</h1>  
            <img className='w-full py-12 ' src="/temp/GitHubMock.svg" alt="githubMock" />
            <div className='bg-gray400 w-[248px] h-[1px] mb-12' ></div>
            <p className=' text-[18px] '  >Ate nonfina tinarte in terorbit. In tena, nos, sedit aucepor bisulibus cae clari, urnis.
              Etis cati, culicae nihiculocae fac vid ca notelina co tracibu licaucis omnius, que con probus, venatus cla ressum maximur hin sedo, orio, dii sed ato te cienici pero, ubis condacchus practan trestra cidees seripio.
            </p>
          </div>
          
      </section>

    </div>
  )
}

export default GitHubMock