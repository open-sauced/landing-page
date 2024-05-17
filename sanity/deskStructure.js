// /deskStructure.js
import S from '@sanity/desk-tool/structure-builder'
import { FaPeopleCarry, FaMoneyCheckAlt, FaInfoCircle, FaHome, FaGraduationCap, FaWrench } from 'react-icons/fa'
import { VscOrganization } from "react-icons/vsc";

export default () => 
  S.list()
  .title("Base")
  .items(
    [ 
      ...S.documentTypeListItems()
      .filter(listItem => !['pricingPage'].includes(listItem.getId()) && !['aboutPage'].includes(listItem.getId())),

      S.listItem()
      .title("Home Page")
      .icon(FaHome)
      .child(
        S.document()
        .schemaType("homePage")
        .documentId("homePage")
        .title("Home Page")
      ),  

      S.listItem()
      .title("Teams Page")
      .icon(VscOrganization)
      .child(
        S.document()
        .schemaType("teamsPage")
        .documentId("teamsPage")
        .title("Teams Page")
      ),

      S.listItem()
      .title("Maintainers Page")
      .icon(FaWrench)
      .child(
        S.document()
        .schemaType("maintainersPage")
        .documentId("maintainersPage")
        .title("Maintainers Page")
      ),

      S.listItem()
      .title("Contributors Page")
      .icon(FaPeopleCarry)
      .child(
        S.document()
        .schemaType("contributorsPage")
        .documentId("contributorsPage")
        .title("Contributors Page")
      ),

      S.listItem()
      .title("Students Page")
      .icon(FaGraduationCap)
      .child(
        S.document()
        .schemaType("studentsPage")
        .documentId("studentsPage")
        .title("Students Page")
      ),

      S.listItem()
      .title("Pricing Page")
      .icon(FaMoneyCheckAlt)
      .child(
        S.document()
        .schemaType("pricingPage")
        .documentId("pricingPage")
        .title("Pricing Page")
      ),  
      
      S.listItem()
      .title("About Page")
      .icon(FaInfoCircle)
      .child(
        S.document()
        .schemaType("aboutPage")
        .documentId("aboutPage")
        .title("About Page")
      )
    ]
  )
