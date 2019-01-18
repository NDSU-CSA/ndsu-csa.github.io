import PropTypes from 'prop-types'
import React from 'react'

import NavItem from '../components/navbar/navItem'
import NavLogo from '../components/navbar/navLogo'
import NavBody from '../components/navbar/navBody'

import '../css/header.css'

/**
 * Header
 * 
 * Creates the site banner
 * 
 * @param siteTitle title for site, placed in large letters in banner
 */
const Header = ({ siteTitle }) => (
    <div class="nav">
        <div class="nav-head">
            <NavLogo link='/' body={siteTitle} />
            <div class="nav-hamburger" style={{verticalAlign: `center`}}><h3>HAM</h3></div>
        </div>
        <NavBody>
            <NavItem link='/about' body='ABOUT' />
            <NavItem link='/meetings' body='MEETINGS' />
            <NavItem link='/contact' body='CONTACT' />

            <NavItem link='/dummy' body='DUMMY' />
            <NavItem link='/dummy' body='DUMMY' />
        </NavBody>
    </div>
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