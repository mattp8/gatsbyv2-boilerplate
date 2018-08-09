module.exports = {
  siteMetadata: {
    title: 'Boiler plate',
  },
  plugins: [
    // Connect wordpress backend
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     baseUrl: `http://209.97.142.6/`,
    //     protocol: `http`,
    //     useACF: true,
    //     hostingWPCOM: false,
    //     verboseOutput: false,
    //     excludedRoutes: ['/*/*/comments', '/yoast/**'],
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat`, `source sans pro\:300,400,400,500,700`],
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
