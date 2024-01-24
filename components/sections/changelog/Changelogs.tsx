import React from 'react'
import SectionWrapper from '../../common/layout/SectionWrapper'
import Changelog from './Changelog'

const Changelogs = () => {
  return (
    <section>
      <SectionWrapper>
        <main className="flex pb-60">
          <Changelog />
        </main>
      </SectionWrapper>
    </section>
  )
}

export default Changelogs