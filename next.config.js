/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['__tests__', 'components', 'consts', 'hooks', 'pages'],
  },
  env: {
    NEXT_PUBLIC_LAST_UPDATED: new Date().toISOString(),
  },
};
