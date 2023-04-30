import React from 'react'
import { SanityHomePage } from '../../../types/schema'
import SectionWrapper from '../../common/layout/SectionWrapper'
import ContainerWithLine from '../../common/ContainerWithLine'

interface HeroProps {
  data: SanityHomePage['hero']
}

const Hero = ({ data }: HeroProps) => {
  return (
    <SectionWrapper>
      <ContainerWithLine>
      </ContainerWithLine>
    </SectionWrapper>
  )
}

export default Hero
