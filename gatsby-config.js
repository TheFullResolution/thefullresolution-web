module.exports = {
  siteMetadata: {
    menuLinks: [
      {
        name: 'home',
        link: '/',
      },
      {
        name: 'resume',
        link: '/resume',
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
        data: '@import "./index";',
        includePaths: [__dirname, './src/styling'],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: [`develop`],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/_cms/content`,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: ({ node }) => node.name,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-mdx`,
  ],
}
