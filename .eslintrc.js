module.exports = {
  output: {
    hashFunction: 'xxhash64',
  },
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {},
  //   'prettier/prettier': [
  //     'error',
  //     {
  //       endOfLine: 'auto',
  //     },
  //   ],
}
