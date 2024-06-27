// sanity.config.js
import { defineConfig } from "sanity";
import { structureTool } from 'sanity/structure'
import schemas from './schemas/schema'
import deskStructure from './deskStructure'


export default defineConfig({
  title: "landing-page",
  projectId: "r7m53vrk",
  dataset: "production",
  plugins: [
    structureTool({
        structure: deskStructure
      }),
    "@sanity/base",
    "@sanity/default-layout",
    "@sanity/default-login",
    "@sanity/desk-tool",
    "markdown",
    "@sanity/dashboard",
    "dashboard-widget-document-list"
    ],
  schema: {
    types: [schemas],
  },
});