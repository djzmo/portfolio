const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')

module.exports = withTypescript(withSass(withCss({
  assetPrefix: process.env.BASE_PATH || '',
  publicRuntimeConfig: {
    basePath: process.env.BASE_PATH || '',
  }
})));
