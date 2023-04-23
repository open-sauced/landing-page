import React, { FC, useState } from 'react'

const journeyLine = [
  "/journeyLine01.svg",
  "/journeyLine02.svg",
  "/journeyLine03.svg",
  "/journeyLine04.svg",
  "/journeyLineEnd.svg",
]

interface JourneyLineProps {
  journeyIndex: 0 | 1 | 2 | 3 | 4 | number
  className?: string
}

const JourneyLine :FC<JourneyLineProps> = ({
  journeyIndex,
  className
}) => {
  return (
    <div>
      <img className={`${className} absolute`} src={journeyLine[journeyIndex]} alt="Journey line" />
    </div>
  )
}

export default JourneyLine