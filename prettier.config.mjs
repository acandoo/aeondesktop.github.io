/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  plugins: [
    'prettier-plugin-packagejson',
    'prettier-plugin-astro',
    '@ianvs/prettier-plugin-sort-imports'
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
        tabWidth: 4
      }
    }
  ],
  trailingComma: 'none',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  importOrder: ['^astro:', '', '^[^@./][^/]*', '', '^@', '', '^[.]'],
  importOrderParserPlugins: ['typescript', 'astro']
}

export default config
