import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../header'
import '../../css/layout.css'
import '../../css/custom.css'

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
        render={(data) => (
            <div class="site">
                <Header siteTitle={data.site.siteMetadata.titleShort} />
                <div class="site-content"> 
                    {children}
                </div>
                <footer>
                    <div class="footer-content">
                        Copyright {new Date().getFullYear()} {data.site.siteMetadata.author}
                    </div>
                </footer>
            </div>
        )}
    />
);

// declare property types
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
