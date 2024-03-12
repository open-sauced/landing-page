// /deskStructure.js
import S from '@sanity/desk-tool/structure-builder'
import { FaMoneyCheckAlt, FaInfoCircle, FaHome } from 'react-icons/fa'
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
