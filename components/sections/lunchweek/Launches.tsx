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
  const [changelogs, setChangelogs] = useState<any[]>([])
  const [limit, setLimit] = useState(5)

  const loadMore = () => setLimit(limit + 5)

  useEffect(() => {
    const getChangeLog = async () => {
      setChangelogs([
        {
          date: '2024-04-24',
          changelogContent:
            "![image](https://cdn.sanity.io/images/r7m53vrk/production/7352f7c42cd131c3455710e6e24a643039367153-1687x838.png)\n\n\nImagine if you could access all the knowledge of the entire git history of thousands of GitHub repositories in one place, all at once. Now imagine if you could ask any questions about it... and get real answers.\n\nWell, imagine no more, because StarSearch is coming!\n\nSoon, you'll be able to use StarSearch to find subject matter experts based on their actual commits, identify true, key contributors among all the noise, and get information on any contributor's github activity.\n\nWe are working on the final details, but in the meantime you can join our waitlist and be the first one to try it out!\n\n[Join the Waitlist](https://app.opensauced.pizza/star-search/waitlist)\n\n\n![image](https://cdn.sanity.io/images/r7m53vrk/production/ebc45c92b210939a0683183da45d9f458719c3d4-1687x838.png)",
          summary:
            'We are working on something new... sign up and be the first one to see 👀✨',
          _type: 'changelog',
          changelogCategory: {
            _type: 'changelogCategory',
            changelogCategory: {
              _ref: '246f4daf-5df6-4682-af8e-9ec94d74ca9d',
              _type: 'reference',
            },
          },
          _updatedAt: '2024-05-01T03:49:30Z',
          slug: { current: 'starsearch-waitlist', _type: 'slug' },
          _createdAt: '2024-04-30T02:03:44Z',
          _id: '13ea5079-5389-46c8-a934-e346fdd885e1',
          title: 'Join the StarSearch Waitlist ✨',
          _rev: 'DcneF66P6QscvZLjoADf4z',
          launchDay: '11/11/1111',
          blogLink: '',
          videoLink: '',
          twitterLink: '',
        },
      ])
    }
    getChangeLog()
  }, [limit])

  return (
    <section>
      <SectionWrapper>
        <main className="flex flex-col">
          {changelogs.length > 0 &&
            changelogs.map((changelog, index) => (
              <Launch
                count={changelogs.length}
                index={index}
                key={changelog._id}
                changelog={changelog}
              />
            ))}
        </main>
      </SectionWrapper>
    </section>
  )
}

export default Launches
