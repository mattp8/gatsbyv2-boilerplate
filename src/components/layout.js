import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../theme'

import { Container, Button } from 'rebass/emotion'

import Header from './header'
import './layout.css'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title="boiler plate"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header />

        <ThemeProvider theme={theme}>
          <Container px={[3]}>{children}</Container>
        </ThemeProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
