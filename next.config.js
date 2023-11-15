/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    NEXT_PUBLIC_LAST_UPDATED: new Date().toISOString(),
  },
  eslint: {
    dirs: ['__tests__', 'components', 'consts', 'hooks', 'pages'],
  },
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
};
