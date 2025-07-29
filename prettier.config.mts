import type { Config } from 'prettier'

const config: Config = {
  semi: false,
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'es5',
  // prettier-plugin-tailwindcss option
  tailwindFunctions: ['clsx', 'tw'],
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
}

export default config
