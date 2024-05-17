import PageLayout from "../components/common/layout/PageLayout";
import SectionWrapper from "../components/common/layout/SectionWrapper";
import Background from "../components/sections/blog/Background";
import { Heading, Typography } from "../components/common/text";
import { getCommonData } from "../lib/sanity";
import { SanityFooter, SanityNavigation, SanitySeo } from "../types/schema";
import { Button } from "../components/common";

export async function getStaticProps() {
  const commonData = await getCommonData();
  return { props: { commonData }};
}


export default function NotFound({ commonData } : {
  commonData: {
    seoData: SanitySeo,
    navigationLinks: SanityNavigation[],
    footer: SanityFooter[]
  }
}) {
  return (
    <PageLayout 
      seoData={commonData.seoData}
      navigationURLs={commonData.navigationLinks}
      BackgroundWrapper={Background}
    >
      <SectionWrapper>
        <section className="items-center gap-y-12 py-24 tablet:py-56 border-slate-800 relative flex flex-col from-transparent via-red-800 to-transparent">
          <Heading component="h1" alignLarge="center">
            $yellow-to-orange404: Page Not Found - But Opportunities are Everywhere$yellow-to-orange
          </Heading>
          <Typography alignSmall="center" variant="subheading">
            It seems you've stumbled upon a path that doesn't exist... yet. If you believe this page should exist,  
            <a 
              className="text-brandYellow"
              href="https://github.com/open-sauced/landing-page/issues/new?assignees=&labels=%F0%9F%91%80+needs+triage%2C%F0%9F%90%9B+bug&projects=&template=bug_report.yml&title=Bug%3A+">
              {" let us know. "}
            </a>
            Your feedback is a valuable contribution to our community.
          </Typography>
          <Button href="/" fullWidth>
            Back to Homepage
          </Button>
        </section>
      </SectionWrapper>
    </PageLayout>
  );
}
