require('dotenv').config()
const withOffline = require('next-offline')
const withImages = require('next-images')

module.exports = withOffline({
  env: {
    NETWORKS: process.env.NETWORKS,
  },
  trailingSlash: false,
  poweredByHeader: false,
  // reactStrictMode: true,
  // target: 'serverless',
  // onDemandEntries: {
  //   maxInactiveAge: 25 * 1000,
  //   pagesBufferLength: 2,
  // },
  ...withImages(),
})
