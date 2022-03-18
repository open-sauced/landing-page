import React from 'react'
import Image from 'next/image'
import githubLogo from '../public/social-proof/github.png'

const Logos = () => {
  return (
    <section className="grid grid-cols-4 gap-28 pb-32">
      <Image src={githubLogo} alt="" />
      <Image src={githubLogo} alt="" />
      <Image src={githubLogo} alt="" />
      <Image src={githubLogo} alt="" />
      <Image src={githubLogo} alt="" />
      <Image src={githubLogo} alt="" />
      <Image src={githubLogo} alt="" />
      <Image src={githubLogo} alt="" />
      <Image src={githubLogo} alt="" />
      <Image src={githubLogo} alt="" />
    </section>
  )
}

export default Logos
