import Image from 'next/image'
import React, { FC } from 'react'
import drip_calendar from '../public/dripGraphic_calendar.svg'


interface CalenderProps{

}

const Calender: FC<CalenderProps> = (props) => {
  return (
    <section className=' overflow-hidden relative  ' >
        <div className=' absolute top-[780px] tablet:top-[-600px] scale-[1.16] left-0  ' >
          <Image  src={drip_calendar} alt="" />
        </div>
        <div className='rounded-t-md bg-gradient-to-r  from-lightBlue to-darkBlue px-8 tablet:px-28 py-[50px] tablet:py-[160px] '>
            <div className=' text-center relative text-gray400 ' >
                <h1 className=' text-[38px] font-bold ' >Itam harun a <span className='text-blueAccent'>illis </span> orio</h1>
                <p className=' text-[18px] mt-[50px] mb-[100px] '>Ate nonfina tinarte in terorbit. In tena, nos, sedit aucepor bisulibus cae clari, urnis.
                    Etis cati, culicae nihiculocae fac vid ca notelina co tracibu licaucis omnius, que con probus, venatus cla ressum maximur hin sedo, orio, dii sed ato te cienici pero, ubis condacchus practan trestra cidees seripio ccipimperum untilleris, nortem me hui pris comnime perem quam deffre catius furac tem, C.
                </p>
            </div>
            
            <img className='mx-auto relative ' src="/temp/calender.png" alt="" />
        </div>
    </section>  
  )
}

export default Calender