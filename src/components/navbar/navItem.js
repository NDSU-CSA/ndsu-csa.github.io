import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

/**
 * NavItem
 * 
 * Used for nav elements in header
 * 
 * @param link where to link to
 * @param body text of item
 * @returns formatted nav item element
 */
const NavItem = ( { link, body } ) => (
    <div class="nav-item">
        <h4 style={{ margin: 0 }}>
            <Link to={link} style={{
                color: `white`,
                textDecoration: `none`,
            }}>
            { body }
            </Link>
        </h4>
    </div>
);

NavItem.propTypes = {
    link: PropTypes.string,
    body: PropTypes.string
}

NavItem.defaultProps = {
    link: ``,
    body: ``
}

export default NavItem