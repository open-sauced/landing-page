import Image from 'next/image'
import React, { FC } from 'react'
import drip_calendar from '../public/dripGraphic_calendar.svg'


interface Props{

}

const Calender: FC = ({}: Props) => {
  return (
    <section className=' overflow-hidden relative  ' >
        <div className=' absolute top-[780px] tablet:top-[-600px] scale-[1.16] left-0  ' >
          <Image  src={drip_calendar} alt="" />
        </div>
        <div className='bg-gradient-to-r rounded-t-md from-lightBlue to-darkBlue px-8 tablet:px-28 py-[50px] tablet:py-[160px] '>
            <div className=' text-center relative ' >
                <h1 className=' text-[38px] font-bold ' >Itam harun a illis orio</h1>
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