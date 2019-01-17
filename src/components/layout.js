import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

/**
 * Layout
 * 
 * Provides a layout for the site, puts a header and footer around content given
 * 
 * @param children inner content for site
 */
const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title,
            titleShort,
            author
          }
        }
      }
    `}
        render={data => (
            <>
                <Header siteTitle={data.site.siteMetadata.titleShort} />
                <div style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0px 1.0875rem 1.45rem`,
                    paddingTop: 0,
                }}>
                    {children}
                    <footer style={{
                        paddingTop: 20
                    }}>
                        Copyright {new Date().getFullYear()} {data.site.siteMetadata.author}
                    </footer>
                </div>
            </>
        )}
    />
);

// declare property types
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
