import React, { FC, useEffect, useState } from 'react'
import SectionWrapper from '../../common/layout/SectionWrapper'
import Launch from './Launch'


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
          title: 'Introductory Course for Maintainers',
          subtitle: 'Training Open Source Leaders and Maintainers.',
          image: '/lunchweekImages/maintainer-course.png',
          launchDay: 'May 20th',
          docsLink: '',
          blogLink: '',
          videoLink: '',
          twitterLink: '',
          blurred: false,
        },
        {
          title: 'Workspaces 1.5',
          subtitle: 'Transform how you manage your open source projects.',
          image: '/lunchweekImages/workspaces.png',
          launchDay: 'May 21st',
          docsLink: '',
          blogLink: '',
          videoLink: '',
          twitterLink: '',
          blurred: true,
        },
        {
          title: 'Repository Pages',
          subtitle: 'Explore the dynamics of any public GitHub repository—view up-to-date metrics, track popularity trends, and get a snapshot of the community’s health and activity.',
          image: '/lunchweekImages/repository-pages.png',
          launchDay: 'May 22nd',
          docsLink: '',
          blogLink: '',
          videoLink: '',
          twitterLink: '',
          blurred: true,
        },
        {
          title: 'StarSearch',
          subtitle: 'Copilot for git history.',
          image: '/lunchweekImages/star-search.png',
          launchDay: 'May 23rd',
          docsLink: '',
          blogLink: '',
          videoLink: '',
          twitterLink: '',
          blurred: true,
        }
      ])
    }
    getLaunchItems()
  }, [limit])

  return (
    <section>
      <SectionWrapper>
        <main className="flex flex-col largeTablet:w-full">
          {launchItems.length > 0 &&
            launchItems.map((launchItems, index, changelog) => (
              <Launch
                count={launchItems.length}
                index={index}
                key={launchItems._id}
                launchItems={launchItems} 
                changelog={changelog}              />
            ))}
        </main>
      </SectionWrapper>
    </section>
  )
}

export default Launches
