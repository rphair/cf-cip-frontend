import type { NextConfig } from 'next'
import { withContentCollections } from '@content-collections/next'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/cips/cip:code([0-9]{1,4})',
        destination: '/cip/CIP-:code',
      },
    ]
  },
}

export default withContentCollections(nextConfig)
