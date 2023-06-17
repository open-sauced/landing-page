import React, { FC } from 'react'

interface PressBackgroundProps {
  children: React.ReactNode
}

const PressBackground: FC<PressBackgroundProps> = ({ children }) => {
  return <div>{children}</div>
}

export default PressBackground
