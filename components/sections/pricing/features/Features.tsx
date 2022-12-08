import React, { FC, ReactElement } from 'react'
import SectionWrapper from '../../../common/layout/SectionWrapper'
import { Heading, Typography } from '../../../common/text'
import FeatureCard from './FeatureCard'
import AlertsIcon from '../../../../public/icons/alerts_icon.svg'
import ContributionIcon from '../../../../public/icons/contribution_data.svg'
import CSVIcon from '../../../../public/icons/csv_icon.svg'
import InsightsIcon from '../../../../public/icons/insights_icon.svg'
import ProfilesIcon from '../../../../public/icons/profiles_icon.svg'
import TalentIcon from '../../../../public/icons/talent_icon.svg'

const Features: FC = (): ReactElement => {
  return (
    <SectionWrapper pb={288}>
      <Typography variant="preHeading">Features</Typography>
      <Heading>
        $red-to-orangeUnlock$red-to-orange insights into open source
      </Heading>
      <div className="pt-4 pb-10  largeTablet:w-2/3 largeTablet:pt-10 largeTablet:pb-24 ">
        <Typography variant="subheading">
          Get the most out of the platform for discovering trends in
          contributions and community.
        </Typography>
      </div>
      <div className="w-full grid grid-cols-2  gap-y-16 gap-x-9 largeTablet:grid-cols-3 largeTablet:gap-y-[88px]">
        {data.map((item, i) => (
          <FeatureCard data={item} key={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Features

const data = [
  {
    name: 'Insights*',
    description:
      'Filter data for trends in open source data over 7 days, 30 days, or 3 months (paid filter). Discover how many contributors return? Or how contributors making the most impact?',
    icon: ContributionIcon,
  },
  {
    name: 'Contributions Data',
    description:
      'See trends in open source languages, frameworks, and libraries. What are the most popular open source projects? Who are the most active contributors?',
    icon: InsightsIcon,
  },
  {
    name: 'CSV Exports',
    description:
      'Export OSS data to CSV for further analysis and sharing with your team.',
    icon: CSVIcon,
  },
  {
    name: 'Contributor Profiles',
    description:
      'Explore the most active contributors in your organization. See their contributions, their location, and their skills.',
    icon: ProfilesIcon,
  },
  {
    name: 'Alerts and notifications',
    description:
      'Get email and Slack notifications to keep tabs on contribution trends.',
    icon: AlertsIcon,
  },
  {
    name: 'Talent Pipeline',
    description:
      'Find the best engineers for your team. See their contributions, their location, and their skills.',
    icon: TalentIcon,
  },
]
