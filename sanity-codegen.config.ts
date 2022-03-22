import { SanityCodegenConfig } from 'sanity-codegen'

const config: SanityCodegenConfig = {
  schemaPath: './sanity/schemas/schema',
  outputPath: './types/schema.ts',
  prettierResolveConfigPath: './prettierrc.js',
  generateTypeName: (sanityTypeName) =>
    `Sanity${sanityTypeName[0].toUpperCase()}${sanityTypeName.slice(1)}`,
}

export default config
