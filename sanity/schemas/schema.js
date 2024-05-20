// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import about from './about'
import user from './user'
import author from './author'
import navigation from './navigation'
import seo from './seo'
import githubMock from './githubMock'
import calender from './calender'
import feature from './feature'
import testimonial from './testimonial'
import footer from './footer'
import blog from './blog'
import featuredBlog from './featuredBlog'
import press from './press'
import openSaucedLogo from './openSaucedLogo'
import pricingPage from './pages/pricingPage'
import aboutPage from './pages/aboutPage'
import homePage from './pages/homePage'
import teamsPage from './pages/teamsPage'
import studentsPage from './pages/studentsPage'
import contributorsPage from './pages/contributorsPage'
import maintainersPage from './pages/maintainersPage'
import changelog from './changelog'
import changelogCategory from './changelogCategory'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    about,
    user,
    author,
    navigation,
    seo,
    githubMock,
    calender,
    feature,
    testimonial,
    footer,
    featuredBlog,
    blog,
    press,
    openSaucedLogo,
    pricingPage,
    aboutPage,
    homePage,
    teamsPage,
    studentsPage,
    contributorsPage,
    maintainersPage,
    changelog,
    changelogCategory
  ]),
})
