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
  top: number
  left: number
}

const JourneyLine :FC<JourneyLineProps> = ({
  top,
  left,
  journeyIndex,
}) => {
  return (
    <div style={{
      position: "absolute",
      left: `${left}px`,
      top: `${top}px`,
    }}>
      <img src={journeyLine[journeyIndex]} alt="Journey line" />
    </div>
  )
}

export default JourneyLine