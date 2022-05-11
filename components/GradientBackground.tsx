import React, { FC } from 'react'



const GradientBackground:FC = ({children})  =>{
  return (
    <div className=' shadow-xl rounded-b-3xl bg-gradient-to-r  from-darkOrange to-lightOrange'>
        {children}
    </div>
  )
}

export default GradientBackground