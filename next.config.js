/* eslint-disable @typescript-eslint/no-var-requires,prettier/prettier,import/order */
const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const frontmatter = require('remark-frontmatter');
const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [frontmatter],
    type: 'yaml',
  },
});

module.exports = withMDX(

  withBundleAnalyzer({
    async headers() {
      return [
        {
          source: '/:all*(svg|jpg|png)',
          locale: false,
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=315400000, must-revalidate',
            }
          ],
        },
      ]
    },
    pageExtensions: ['ts', 'tsx', 'mdx'],
    sassOptions: {
      //LOOK OUT FOR THAT SHIT - CHANGES NAMES DEPENDS ON RELEASE (NEXTJS uses prependData, sass loader uses additionalData)
      prependData: '@import "src/styles";',
      includePaths: [path.join(__dirname, 'src/styles')],
    },
    webpack: (config, { dev, isServer }) => {

      if (dev && isServer) {
        const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
        config.plugins.push(new ForkTsCheckerWebpackPlugin());
      }

      return config;
    },
  }),
);
