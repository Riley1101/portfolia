const { withContentlayer } = require('next-contentlayer');

/**
 * @type {import('next').NextConfig}
 */
module.exports = withContentlayer()({
  swcMinify: true,
  reactStrictMode: true,
  i18n: {

    locales: ['en', 'mm'],
    defaultLocale: 'en',

  },

});


