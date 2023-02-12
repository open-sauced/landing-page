// /deskStructure.js
import S from '@sanity/desk-tool/structure-builder'
import { FaMoneyCheckAlt, FaInfoCircle } from 'react-icons/fa'

export default () => 
  S.list()
  .title("Base")
  .items(
    [ 
      ...S.documentTypeListItems()
      .filter(listItem => !['pricingPage'].includes(listItem.getId()) && !['aboutPage'].includes(listItem.getId())),

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
