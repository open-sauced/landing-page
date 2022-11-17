import React from 'react'

const CTA = () => {
  return (
    <div className="px-4 flex justify-center items-center flex-col text-center gap-y-16 font-inter pt-36 tablet:pt-96 pb-20 tablet:pb-36">
        <h2 className="text-5xl text-white font-bold">Build healthy communities <span className="text-brandRed">that grow</span></h2>

        <p className="text-gray-400 font-normal text-2xl max-w-3xl tracking-wide  text-center">Identifying contributors in a projects can be opaque. With Open Sauced, you get actionable insights into contributions that you can see.</p>
        
        <div className="relative">
            <div className="bg-gradient-to-r -inset-0 blur-sm rounded-md absolute from-orange-400 to-orange-600">
            </div>
            <a href="https://insights.opensauced.pizza/">
              <button className="rounded-md relative border-orange-500 border-2 text-white text-sm font-bold py-2 px-4 largeTablet:px-12 bg-darkBG">
                Get Started
              </button>
            </a>
        </div>

    </div>
  )
}

export default CTA