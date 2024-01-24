import React, { useEffect, useState } from 'react'
import SectionWrapper from '../../common/layout/SectionWrapper'
import Changelog from './Changelog'
import { getChangelog } from '../../../lib/sanity'
import { SanityChangelog } from '../../../types/schema'
import GradientBorderWrapper from '../../common/GradientBorderWrapper'

const Changelogs = () => {
  const [changelogs, setChangelogs] = useState<SanityChangelog[]>([])
  const [limit, setLimit] = useState(2)

  const loadMore = () => {
    setLimit(limit + 2)
  }

  useEffect(() => {
    const getChangeLog = async () => {
      const changelogData = await getChangelog(limit)
      setChangelogs([...changelogData])
    }
    getChangeLog()
  }, [limit])
  

  return (
    <section>
      <SectionWrapper>
        <main className="flex flex-col">
          {
            changelogs.length > 0 && changelogs.map((changelog, index) => (
              <Changelog count={changelogs.length} index={index} key={index} changelog={changelog} />
            ))
          }
        </main>

        <div className="flex justify-center pt-20 pb-36">
          <GradientBorderWrapper>
            <button className=" bg-brandOrange px-3 py-1 rounded-md font-bold" onClick={loadMore}>
              Load More
            </button>
          </GradientBorderWrapper>
        </div>
      </SectionWrapper>
    </section>
  )
}

export default Changelogs