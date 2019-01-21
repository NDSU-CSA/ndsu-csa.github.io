import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

/**
 * 
 * NavLogo
 * 
 * Takes given information and turns into the head of the navbar
 * 
 * @param link link to
 * @param body label text
 * @returns a nav head element 
 */
const NavLogo = ( { link, body } ) => (
    <div class="nav-logo">
        <h3 style={{ margin: 0 }}>
            <Link to={link} style={{
                color: `white`,
                textDecoration: `none`,
            }}>
            {body}
            </Link>
        </h3>
    </div>
);

NavLogo.propTypes = {
    link: PropTypes.string,
    body: PropTypes.string
}

NavLogo.defaultProps = {
    link: ``,
    body: ``
}

export default NavLogo