// disable tyoe checking for this file
// @ts-nocheck

import React from 'react'
import { Background } from './assets/Svg'

const DefaultOgLayout = {
  name: 'defaultOgImage',
  title: 'Default OG image',
  fields: [
    {
      title: "Title",
      name: 'title',
      type: 'string',
    },
    {
      title: "Subtitle",
      name: 'subtitle',
      type: 'string',
    },
  ],
  prepare: (document) => {
    return {
      title: document.title,
      subtitle: document.summary || document.excerpt,
    }
  },
  dimensions: {
    width: 1920,
    height: 1080,
  },
  component: ({ title, subtitle }) => (
    <div style={{ width: "100%", height:"100%", position: "relative"}}>
      <div style={{ position: "absolute", top:"0", right:"0" }}>
        <Background/>
      </div>
      <div style={{ position:"relative", height:"100%", paddingRight:"200px", paddingLeft:"200px", wordWrap: "break-word", display: "flex", flexDirection: "column", justifyItems:"center", justifyContent: "center" }}>
        <h1 style={{ color: "#FFF9ED", fontWeight: "700", fontSize: "120px", lineHeight: "96px" ,margin:"20px 0 20px 0" }}>{title || ''}</h1>
        <p style={{ color: "#FFF9ED", fontWeight: "400", fontSize: "36px" }}>{subtitle || ''}</p>
      </div>
    </div>
  ),
}

export default DefaultOgLayout