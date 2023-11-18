import React, { FC } from 'react'
import { FeatureProps } from './Features'
import { Heading, Typography } from '../../../common/text'
import ContainerWithLine from '../../../common/ContainerWithLine'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Props {
  feature: FeatureProps
  index: number
  className: {
    lg: string
    sm: string
  }
}

const Feature: FC<Props> = ({
  feature: { description, heading, image, smallImage, title, icon },
  className
}) => {
  const hide = smallImage ? 'hidden' : ''

  const [ refIcon, iconInView ] = useInView()
  const [ refImage, imageInView ] = useInView()

  // text animation
  const initPosY = 5
  const posY = iconInView ? 0 : initPosY

  return (
    <ContainerWithLine>
      <div className="pb-14 largeTablet:mb-32">
        <div className="flex gap-y-24 py-10 flex-col-reverse largeTablet:flex-col">
          <div ref={refIcon} className=" flex flex-col px-6 gap-y-8">
            <div className="relative largeTablet:max-w-[700px]">
              <motion.img
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: iconInView ? 1 : 0, scale: iconInView ? 1 : 0.5 }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeInOut' }}
                className="absolute -left-[56px] largeTablet:-left-[77px] -top-[8px] largeTablet:-top-[4px]"
                src={icon}
                alt="Find"
              />
              
              <motion.div
                initial={{ opacity: 0, y: initPosY, x: -10 }}
                animate={{ opacity: iconInView ? 1 : 0, y: posY, x: iconInView ? 0 : -10 }}
                transition={{ duration: 0.7, delay: 0.2, ease: 'easeInOut' }}
              >
                <Heading component="h1" alignLarge="left">
                  {title}
                </Heading>
              </motion.div>
            </div>

            <div className="largeTablet:max-w-[650px]">
              <motion.div
                initial={{ opacity: 0, y: initPosY, x: 10 }}
                animate={{ opacity: iconInView ? 1 : 0, y: posY, x: iconInView ? 0 : 10 }}
                transition={{ duration: 0.7, delay: 0.2, ease: 'easeInOut' }}
              >
                <Typography tracking='wide' variant="body1" alignLarge="left">
                  {description}
                </Typography>
              </motion.div>
            </div>
          </div>

          <motion.div
            ref={refImage}
            initial={{ opacity: 0, x: -10}}
            animate={{ opacity: imageInView ? 1 : 0, x: imageInView ? 0 : -10 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
          >
            <div className={`relative largeTablet:flex justify-center largeTablet:min-h-[350px] ${hide}`}>
              <img className={`relative ${className.lg}`} src={image} alt="Feature"/>
            </div>

            { smallImage && (
            <div className="relative flex largeTablet:hidden justify-center largeTablet:min-h-[350px]">
              <img className={`relative ${className.sm}`} src={smallImage} alt="Feature"/>
            </div>)
            }
          </motion.div>
        </div>
      </div>
    </ContainerWithLine>
  )
}

export default Feature 