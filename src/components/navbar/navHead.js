import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

const NavHead = ( { link, body } ) => (
    <div style={{
    padding: `1.45rem`
    }}>
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

NavHead.propTypes = {
    link: PropTypes.string,
    body: PropTypes.string
}

NavHead.defaultProps = {
    link: ``,
    body: ``
}

export default NavHead