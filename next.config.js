/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['__tests__', 'components', 'consts', 'hooks', 'pages'],
  },
};
