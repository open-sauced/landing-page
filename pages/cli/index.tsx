import Background from '../../components/sections/about/Background'
import Header from '../../components/sections/navigation/Header';
import { Footer as SanityFooter, Navigation as SanityNavigation, Seo as SanitySeo } from '../../sanity.types'
import { getCommonData } from '../../lib/sanity';
import Footer from '../../components/sections/Footer';
import { Heading, Typography } from '../../components/common/text';
import { Button } from '../../components/common';
import { TbCopy } from "react-icons/tb";
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
            Try the <code className='px-2'>pizza-cli</code> and access OpenSauced features right from your terminal. Autogenerate your CODEOWNERS and contributor insights in seconds.
          </Typography>

          <div className='flex gap-4 items-center'>
            <code className='p-4 bg-neutral-800 rounded-xl'>
              brew install pizza
            </code>
            <p>or</p>
            <Button>Download for Mac</Button>
          </div>

          <Typography variant='body3'>
            View installation instructions
          </Typography>
        </header>

        <Image src="/cli-screenshot.png" alt="Pizza CLI help screenshot" width={1200} height={1200} />
      </main>

      <Footer pressPage={true} />
    </Background>
  );
}
