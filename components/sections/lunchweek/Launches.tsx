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
          title: 'OpenSauced raises 3.5 million',
          subtitle: 'We raised to expand our efforts to validate and share the impact of open source in your organization.',
          image: '/lunchweekImages/funding.png',
          launchDay: 'May 24rd',
          docsLink: 'https://opensauced.pizza/docs/',
          blogLink:'https://opensauced.pizza/blog/opensauced-raises-3.5-million-from-boldstart,-github-and-more-',
          videoLink: 'https://www.youtube.com/watch?v=JCNjj19iDa4',
          twitterLink: 'https://x.com/saucedopen',
          blurred: false,
        },
        {
          title: 'StarSearch',
          subtitle: 'Copilot for git history.',
          image: '/lunchweekImages/star-search.png',
          launchDay: 'May 23rd',
          docsLink: 'https://opensauced.pizza/docs/features/star-search/',
          blogLink: 'https://opensauced.pizza/blog/open-source-insights-with-starsearch',
          videoLink: 'https://youtu.be/I3cS-u_gmDE?si=zSC4g4WJ0Un4OXqC',
          twitterLink: 'https://x.com/saucedopen/status/1793659223773233207',
          blurred: false,
        },
        {
          title: 'Repository Pages',
          subtitle: 'Explore the dynamics of any public GitHub repository—view up-to-date metrics, track popularity trends, and get a snapshot of the community’s health and activity.',
          image: '/lunchweekImages/repository-pages.png',
          launchDay: 'May 22nd',
          docsLink: 'https://opensauced.pizza/docs/features/repo-pages/',
          blogLink: 'https://opensauced.pizza/blog/Understanding-the-Lottery-Factor',
          videoLink: 'https://www.youtube.com/watch?v=C7rkaAlcvZE',
          twitterLink: 'https://x.com/saucedopen/status/1793341128210895288',
          blurred: false,
        },
        {
          title: 'Workspaces 1.5',
          subtitle: 'Transform how you manage your open source projects.',
          image: '/lunchweekImages/workspaces.png',
          launchDay: 'May 21st',
          docsLink: 'https://opensauced.pizza/docs/features/workspaces/',
          blogLink: 'https://opensauced.pizza/blog/understanding-create-react-app-decline-open-source-insights',
          videoLink: 'https://youtu.be/xpxIyR4-rRc?si=8TB7AmR83UxtxLGP',
          twitterLink: 'https://x.com/saucedopen/status/1792963815245787502',
          blurred: false,
        },
        {
          title: 'Becoming a Maintainer Course',
          subtitle: 'Training Open Source Leaders and Maintainers.',
          image: '/lunchweekImages/maintainer-course.png',
          launchDay: 'May 20th',
          docsLink: 'https://intro.opensauced.pizza/#/becoming-a-maintainer/README',
          blogLink: 'https://opensauced.pizza/blog/maintainer-course',
          videoLink: 'https://x.com/saucedopen/status/1792603786667860302',
          twitterLink: 'https://x.com/saucedopen',
          blurred: false,
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
