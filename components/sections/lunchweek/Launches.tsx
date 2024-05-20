import React, { FC, useEffect, useState } from 'react'
import SectionWrapper from '../../common/layout/SectionWrapper'
import Launch from './Launch'
import { getChangelog } from '../../../lib/sanity'
import { SanityChangelog } from '../../../types/schema'
import GradientBorderWrapper from '../../common/GradientBorderWrapper'

interface LaunchesProps {
  totalLaunchesCount: number
  isLaunchesPage: boolean
}

const Launches: FC<LaunchesProps> = ({
  totalLaunchesCount,
  isLaunchesPage = true,
}) => {
  const [launchItems, setLaunchItems] = useState<any[]>([])
  const [limit, setLimit] = useState(5)

  const loadMore = () => setLimit(limit + 5)

  useEffect(() => {
    const getLaunchItems = async () => {
      setLaunchItems([
        {
          date: '2024-04-24',
          image: "https://cdn.sanity.io/images/r7m53vrk/production/7352f7c42cd131c3455710e6e24a643039367153-1687x838.png",
          // changelogContent:
          //   "![image](https://cdn.sanity.io/images/r7m53vrk/production/7352f7c42cd131c3455710e6e24a643039367153-1687x838.png)\n\n\nImagine if you could access all the knowledge of the entire git history of thousands of GitHub repositories in one place, all at once. Now imagine if you could ask any questions about it... and get real answers.\n\nWell, imagine no more, because StarSearch is coming!\n\nSoon, you'll be able to use StarSearch to find subject matter experts based on their actual commits, identify true, key contributors among all the noise, and get information on any contributor's github activity.\n\nWe are working on the final details, but in the meantime you can join our waitlist and be the first one to try it out!\n\n[Join the Waitlist](https://app.opensauced.pizza/star-search/waitlist)\n\n\n![image](https://cdn.sanity.io/images/r7m53vrk/production/ebc45c92b210939a0683183da45d9f458719c3d4-1687x838.png)",  
          title: 'Join the StarSearch Waitlist ✨',
          launchDay: 'Day 1',
          blogLink: '',
          videoLink: '',
          twitterLink: '',
        },
      ])
    }
    getLaunchItems()
  }, [limit])

  return (
    <section>
      <SectionWrapper>
        <main className="flex flex-col w-full">
          {launchItems.length > 0 &&
            launchItems.map((launchItems, index) => (
              <Launch
                count={launchItems.length}
                index={index}
                key={launchItems._id}
                launchItems={launchItems}
              />
            ))}
        </main>
      </SectionWrapper>
    </section>
  )
}

export default Launches
