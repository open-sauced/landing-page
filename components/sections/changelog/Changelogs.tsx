import React, { FC, useEffect, useState } from 'react'
import SectionWrapper from '../../common/layout/SectionWrapper'
import Changelog from './Changelog'
import { getChangelog } from '../../../lib/sanity'
import { Changelog as SanityChangelog } from '../../../sanity.types'
import GradientBorderWrapper from '../../common/GradientBorderWrapper'

interface ChangelogsProps {
  totalChangelogCount: number
}

const Changelogs: FC<ChangelogsProps> = ({
  totalChangelogCount
}) => {
  const [changelogs, setChangelogs] = useState<SanityChangelog[]>([])
  const [limit, setLimit] = useState(5)

  const loadMore = () => setLimit(limit + 5)

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
          {changelogs.length > 0 && changelogs.map((changelog, index) => (
            <Changelog count={changelogs.length} index={index} key={changelog._id} changelog={changelog}/>
          ))}
        </main>
        {changelogs.length < totalChangelogCount && (
          <div className="flex justify-center pt-20 pb-36">
            <GradientBorderWrapper>
              <button className="bg-brandOrange px-3 py-1 rounded-md font-bold" onClick={loadMore}>
                Load More
              </button>
            </GradientBorderWrapper>
          </div>
        )}
      </SectionWrapper>
    </section>
  )
}

export default Changelogs
