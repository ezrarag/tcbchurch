/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/about-us/services.html',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/about-us/pastor/index.html',
        destination: '/about/leadership',
        permanent: true,
      },
      {
        source: '/plan-a-visit/index.html',
        destination: '/plan-a-visit',
        permanent: true,
      },
      {
        source: '/about-us/pastor',
        destination: '/about/leadership',
        permanent: true,
      },
      {
        source: '/about-us/services',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/plan-a-visit',
        destination: '/plan-a-visit',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
