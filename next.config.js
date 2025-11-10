/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    NEXT_PUBLIC_LAST_UPDATED:
      process.env.NEXT_PUBLIC_LAST_UPDATED ||
      new Date().toISOString(),
  },
  output: 'export',
  reactStrictMode: true,
};
