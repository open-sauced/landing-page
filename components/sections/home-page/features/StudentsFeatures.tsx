import { SanityImageAsset, SanityImageCrop, SanityImageHotspot, StudentsPage as SanityStudentsPage } from "../../../../sanity.types";
import { Heading } from '../../../common/text'
import ContainerWithLine from '../../../common/ContainerWithLine'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import EndingLine from "../../../common/EndingLine";
import SectionWrapper from "../../../common/layout/SectionWrapper";

type TeamsFeaturesProps = {
  features: SanityStudentsPage['features'];
};

export default function StudentsFeatures({ features } : TeamsFeaturesProps) {
  return (
    <SectionWrapper pbs={0}>
      { features!.map((feature, index) => <StudentFeature key={feature._key || index} feature={feature!} />) }
      <EndingLine />
    </SectionWrapper>
  );
}

function StudentFeature({ feature } : { feature : { 
  title?: string, 
  heading?: string,
  description?: string,
  image?: {
    _type: 'image'
    asset?: any
    crop?: SanityImageCrop 
    hotspot?: SanityImageHotspot
  } 
}}) {
  const { title, heading, description, image } = feature!;
  const [ refIcon, iconInView ] = useInView();

  // text animation
  const initPosY = 5;
  const posY = iconInView ? 0 : initPosY;

  return (
    <ContainerWithLine>
      <div className="pb-14 largeTablet:mb-32">
        <div className="flex gap-y-24 py-10 flex-col-reverse largeTablet:flex-col">
          <div ref={refIcon} className=" flex flex-col px-6 gap-y-12">
            <div className="relative max-w-[650px]">
              <motion.img
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: iconInView ? 1 : 0, scale: iconInView ? 1 : 0.5 }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeInOut' }}
                className="absolute -left-[56px] largeTablet:-left-[77px] -top-[8px] largeTablet:-top-[4px]"
                src={'/icons/find_icon.svg'}
                alt="Find"
              />
              
              <motion.div
                initial={{ opacity: 0, y: initPosY, x: -10 }}
                animate={{ opacity: iconInView ? 1 : 0, y: posY, x: iconInView ? 0 : -10 }}
                transition={{ duration: 0.7, delay: 0.2, ease: 'easeInOut' }}
              >
                <div className="flex flex-col gap-4">
                  <p className="w-fit text-base px-3 py-1 text-darkOrange border border-darkOrange rounded-full">
                    {title}
                  </p>
                  <Heading component="h2" alignLarge="left">
                    {heading}
                  </Heading>
                </div>
              </motion.div>
            </div>

            <div className="">
              <motion.div
                initial={{ opacity: 0, y: initPosY, x: 10 }}
                animate={{ opacity: iconInView ? 1 : 0, y: posY, x: iconInView ? 0 : 10 }}
                transition={{ duration: 0.7, delay: 0.2, ease: 'easeInOut' }}
              >
                <p className="text-start font-light max-w-2xl text-lg text-neutral-300">
                  {description}
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: initPosY, x: 10 }}
              animate={{ opacity: iconInView ? 1 : 0, y: posY, x: iconInView ? 0 : 10 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeInOut' }}
            >
              <img src={image as unknown as string} />
            </motion.div>
          </div>
        </div>
      </div>
    </ContainerWithLine>
  );
}
