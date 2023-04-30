import React from 'react'
import { SanityHomePage } from '../../../types/schema'
import SectionWrapper from '../../common/layout/SectionWrapper'

interface HeroProps {
  data: SanityHomePage['hero']
}

const Hero = ({ data }: HeroProps) => {
  return (
    <SectionWrapper>
    </SectionWrapper>
  )
}

export default Hero
