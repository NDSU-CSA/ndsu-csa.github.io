import PropTypes from 'prop-types'
import React from 'react'

import NavItem from '../components/navbar/navItem'
import Nav from '../components/navbar/nav'

import '../css/header.css'

/**
 * Header
 * 
 * Creates the site banner
 * 
 * @param siteTitle title for site, placed in large letters in banner
 */
const Header = ({ siteTitle }) => (
    <Nav siteTitle={siteTitle}>
        <NavItem link='/about' body='ABOUT' />
        <NavItem link='/meetings' body='MEETINGS' />
        <NavItem link='/contact' body='CONTACT' />
    </Nav>
);

// declare property types
Header.propTypes = {
    siteTitle: PropTypes.string,
};

// default values if value not given
Header.defaultProps = {
    siteTitle: ``,
};

export default Header;