import { SanityCodegenConfig } from 'sanity-codegen'
import { defaultBabelOptions } from 'sanity-codegen/cli';

const config: SanityCodegenConfig = {
  schemaPath: './sanity/schemas/schema',
  outputPath: './types/schema.ts',
  prettierResolveConfigPath: './prettierrc.js',
  generateTypeName: (sanityTypeName) =>
    `Sanity${sanityTypeName[0].toUpperCase()}${sanityTypeName.slice(1)}`,

  // This is part is used to avoid the following error:
  // Error: Cannot find module 'part:@sanity/base/client' when using plugin (sanity-plugin-asset-source-ogimage).
  // Solution from: https://github.com/ricokahler/sanity-codegen/issues/59#issuecomment-762472234

  babelOptions: {
    ...defaultBabelOptions,
    plugins: [
      ...defaultBabelOptions.plugins.filter(
        ([key]) => key !== 'module-resolver'
      ),
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            'part:@sanity/base/schema-creator':
              'sanity-codegen/schema-creator-shim',
            'all:part:@sanity/base/schema-type':
              'sanity-codegen/schema-type-shim',
            'part:@sanity/base/schema-type': 'sanity-codegen/schema-type-shim',
            '^part:.*': 'sanity-codegen/no-op',
            '^config:.*': 'sanity-codegen/no-op',
            '^all:part:.*': 'sanity-codegen/no-op',
            'sanity-plugin-asset-source-ogimage': 'sanity-codegen/no-op',
          },
        },
      ],
    ],
  },
}

export default config
