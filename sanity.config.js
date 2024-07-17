// sanity.config.js
import { defineConfig } from "sanity";
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { markdownSchema } from "sanity-plugin-markdown";
import { generateOGImage } from '@catherineriver/sanity-plugin-generate-ogimage'

import { schemaTypes } from './sanity/schemas/schema'
import deskStructure from './sanity/deskStructure'

export default defineConfig({
  title: "landing-page",
  projectId: "r7m53vrk",
  dataset: "production",
  plugins: [
    structureTool({
      structure: deskStructure
    }),
    visionTool(),
    markdownSchema(),
    "@sanity/dashboard",
    "dashboard-widget-document-list",
    generateOGImage({})
  ],
  tools: (prev) => {
    // 👇 Uses environment variables set by Vite in development mode
    if (process.env.NODE_ENV !== 'production') {
      return prev
    }

    return prev.filter((tool) => tool.name !== 'vision')
  },
  schema: {
    types: schemaTypes,
  },
});