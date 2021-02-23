/* eslint-disable @typescript-eslint/no-var-requires,prettier/prettier */
const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withMDX = require('@next/mdx')()

module.exports = withMDX(withBundleAnalyzer({
  pageExtensions: ['ts', 'tsx', 'mdx'],
  sassOptions: {
    //LOOK OUT FOR THAT SHIT - CHANGES NAMES DEPENDS ON RELEASE (NEXTJS uses prependData, sass loader uses additionalData)
    prependData: '@import "src/styles";',
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  webpack: (config, { dev, isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }
    if (dev && isServer) {
      const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }

    return config;
  },
}));
