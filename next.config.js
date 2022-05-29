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
  async redirects() {
    return [
      {
        source: '/facebook',
        destination: 'https://facebook.com/riley.eileen.75',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/Riley1101',
        permanent: true,
      },
      {
        source: '/email',
        destination: 'arkarkaungmyat00@gmail.com',
        permanent: true,
      },
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/channel/UC_RfEQCC3gL2AzsFFAABikg',
        permanent: true,
      },
      {
        source: '/devto',
        destination: 'https://dev.to/riley1101',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/arkar-kaungmyat-a72225230',
        permanent: true,
      },
    
    ]
  },

});


