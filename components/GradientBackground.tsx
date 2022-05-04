import React, { FC } from 'react'



const GradientBackground:FC = ({children})  =>{
  return (
    <div className=' shadow-lg rounded-b-3xl bg-gradient-to-r  from-lightBlue to-darkBlue'>
        {children}
    </div>
  )
}

export default GradientBackground