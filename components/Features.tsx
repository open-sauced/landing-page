import React, { FC } from 'react'
import Feature from './Feature'

interface Props{}

const Features: FC<Props> = ({}) => {
  const featuresArray = [
    {
      title: 'Total Contributions',
      subtitle: `Ate nonfina tinarte in terorbit. In tena, nos, sedit aucepor bisulibus cae clari, urnis.
      Etis cati, culicae nihiculocae fac vid ca notelina co tracibu.`,
      image: '/temp/contributionsIcon.png',
      link: "/features/10"
    },
    {
      title: 'Contributor Churn',
      subtitle: `Ate nonfina tinarte in terorbit. In tena, nos, sedit aucepor bisulibus cae clari, urnis.
      Etis cati, culicae nihiculocae fac vid ca notelina co tracibu.`,
      image: '/temp/churnIcon.png',
      link: "/features/20"
    },
    {
      title: 'Pull Request Velocity (ATM)',
      subtitle: `Ate nonfina tinarte in terorbit. In tena, nos, sedit aucepor bisulibus cae clari, urnis.
      Etis cati, culicae nihiculocae fac vid ca notelina co tracibu.`,
      image: '/temp/pullIcon.png',
      link: "/features/30"
    },
    {
      title: 'Total PR Merged',
      subtitle: `Ate nonfina tinarte in terorbit. In tena, nos, sedit aucepor bisulibus cae clari, urnis.
      Etis cati, culicae nihiculocae fac vid ca notelina co tracibu.`,
      image: '/temp/mergedIcon.png',
      link: "/features/40"
    },
  ]
  return (
    <div>
        {
          featuresArray.map((feature, i) => (
            <Feature featureItem={feature} index={i} />
          ))
        }
        
    </div>
  )
}

export default Features