// sanity.config.js
import { defineConfig } from "sanity";
import { structureTool } from 'sanity/structure'
import schemas from './schemas/schema'
import deskStructure from './deskStructure'
import { visionTool } from '@sanity/vision'
import { markdownSchema } from "sanity-plugin-markdown";




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
    "@sanity/base",
    "@sanity/dashboard",
    "dashboard-widget-document-list"
    ],
    tools: (prev) => {
        // 👇 Uses environment variables set by Vite in development mode
        if (import.meta.env.DEV) {
          return prev
        }
        return prev.filter((tool) => tool.name !== 'vision')
      },
  schema: {
    types: [schemas],
  },
});