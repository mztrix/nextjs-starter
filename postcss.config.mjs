/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    cssnano: {
      preset: 'default',
    },
  },
}

export default config
