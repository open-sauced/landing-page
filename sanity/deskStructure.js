// /deskStructure.js
import S from '@sanity/desk-tool/structure-builder'
import { FaMoneyCheckAlt } from 'react-icons/fa'

export default () => 
  S.list()
  .title("Base")
  .items(
    [ 
      ...S.documentTypeListItems()
      .filter(listItem => !['pricingPage'].includes(listItem.getId())),

      S.listItem()
      .title("Pricing Page")
      .icon(FaMoneyCheckAlt)
      .child(
        S.document()
        .schemaType("pricingPage")
        .documentId("pricingPage")
        .title("Pricing Page")
      ),      
    ]
  )
