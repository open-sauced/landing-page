import Background from '../../components/sections/about/Background'
import Header from '../../components/sections/navigation/Header';
import { Footer as SanityFooter, Navigation as SanityNavigation, Seo as SanitySeo } from '../../sanity.types'
import { getCommonData } from '../../lib/sanity';
import Footer from '../../components/sections/Footer';
import { Heading, Typography } from '../../components/common/text';
import { Button } from '../../components/common';
import { TbArrowNarrowRight } from "react-icons/tb";
import Image from 'next/image';

export async function getStaticProps() {
  const commonData = await getCommonData();

  return { 
    props: { commonData }
  }
}

type CliPageProps = {
  commonData: {
    navigationLinks: SanityNavigation[]
    seoData: SanitySeo
    footer: SanityFooter[]
  }
}
  
export default function CliPage({ commonData }: CliPageProps) {
  const navigationURLs = commonData.navigationLinks;
  return (
    <Background>
      <Header navigationItems={navigationURLs} />

      <main className='flex flex-col gap-8 w-full h-full min-h-screen md:p-16 items-center'>
        <header className='flex flex-col gap-8 p-8 max-w-4xl text-center mt-8 md:mt-16 items-center'>
          <Heading>
            Generate developer insights $yellow-to-orangefrom the command line
          </Heading>

          <Typography variant='subheading'>
            Try the <code className='px-2'>pizza</code> CLI and access OpenSauced features right from your terminal. Autogenerate your CODEOWNERS and contributor insights in seconds.
          </Typography>

          <div className='flex flex-col gap-4 items-center'>
            <code className='p-4 bg-neutral-800 rounded-xl text-sm largeTablet:text-md'>
              brew install open-sauced/tap/pizza 
            </code>
            <Button href='https://github.com/open-sauced/pizza-cli/releases'>Download for Mac</Button> 
          </div>

          <a href="https://github.com/open-sauced/pizza-cli?tab=readme-ov-file#-install" className='hover:underline'>
            <Typography variant='body3'>
              <span className='flex gap-2 items-center'>
                View installation instructions
                <TbArrowNarrowRight />
              </span>
            </Typography>
          </a>
        </header>

        <Image src="/cli-screenshot.png" alt="Pizza CLI help screenshot" width={1200} height={1200} />
      </main>

      <Footer pressPage={true} />
    </Background>
  );
}
