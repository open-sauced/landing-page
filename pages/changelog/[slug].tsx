import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import { Button } from "../../components/common";
import PageLayout from "../../components/common/layout/PageLayout";
import Changelog from "../../components/sections/changelog/Changelog";
import Background from "../../components/sections/changelog/Background";
import SectionWrapper from "../../components/common/layout/SectionWrapper";
import IndividualHero from "../../components/sections/changelog/IndividualHero";

import { SanityChangelog, SanityFooter, SanityNavigation, SanitySeo } from "../../types/schema";
import { getCommonData, getChangelogBySlug, getLatestChangelogsExceptSlug } from "../../lib/sanity";

export async function getServerSideProps({ params } : { params: { slug: string }}) {
  if (!params.slug) { 
    return { redirect: { destination: "/changelog" } } 
  }

  const changelog = await getChangelogBySlug(params.slug);

  // there's no associated log to the slug given
  if (!changelog) {
    return { redirect: { destination: "/changelog" } } 
  }

  const commonData = await getCommonData();
  const latestChanges = await getLatestChangelogsExceptSlug(params.slug);

  return { props: { changelog, commonData, latestChanges }};
}

export default function ChangelogPage({ changelog, commonData, latestChanges } : { 
  changelog: SanityChangelog,  
  commonData: {
    navigationLinks: SanityNavigation[],
    seoData: SanitySeo,
    footer: SanityFooter[]
  },
  latestChanges: SanityChangelog[],
}) {

  return (
    <PageLayout
      seoData={commonData.seoData}
      navigationURLs={commonData.navigationLinks}
      BackgroundWrapper={Background}
    >
      <IndividualHero 
        title={changelog.title ?? "Test"} 
        topics={changelog.topics ?? []} 
        date={changelog.date ?? "2001-02-02"} 
        url={`https://opensauced.pizza/changelog/${changelog.slug?.current}`}
      /> 
      <ReactMarkdown
        className="mx-auto mb-24 leading-loose prose prose-xl prose-headings:text-textPrimary prose-p:text-textPrimary prose-img:mx-auto prose-img:rounded-md 
        prose-img:border-4 prose-img:border-brandOrange prose-img:bg-gradient-to-tr prose-img:from-[#ED5432] prose-img:via-[#EDA232] prose-img:to-[#ED5432] prose-img:drop-shadow-[0_0_4px_#ED5432]"
      >
        {changelog.changelogContent}
      </ReactMarkdown>

      <SectionWrapper>
        <section className="flex flex-col py-24 border-t-2 border-brandOrange">
          {latestChanges.length > 0 && latestChanges.map((changelog, index) => (
            <Changelog count={latestChanges.length} index={index} key={changelog._id} changelog={changelog}/>
          ))}
          <span className="mx-auto">
            <Button href="/changelog">View More Changes</Button>
          </span>
        </section>
      </SectionWrapper>

    </PageLayout>
  )
}

