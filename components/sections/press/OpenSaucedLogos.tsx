import React, { FC } from 'react'
import OpenSaucedLogo from './OpenSaucedLogo'
import { openSaucedlogos } from '../../../pages/press/assetsData'

const OpenSaucedLogos:FC = () => {
  return (
    <div className="max-w-7xl px-6 tablet:px-2 mx-auto pt-16 tablet:pt-20 pb-20">
      <div className="flex justify-center gap-x-12 gap-y-24 flex-wrap">
        {openSaucedlogos &&
          openSaucedlogos.map((logo) => (
            <div key={logo.id + logo.title}>
              <OpenSaucedLogo logo={logo} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default OpenSaucedLogos
