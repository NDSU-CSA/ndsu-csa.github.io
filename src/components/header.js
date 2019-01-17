import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import NavItem from '../components/navbar/navItem'
import NavHead from '../components/navbar/navHead'

/**
 * Header
 * 
 * Creates the site banner
 * 
 * @param siteTitle title for site, placed in large letters in banner
 */
const Header = ({ siteTitle }) => (
  <div style={{
      background: `darkgreen`,
      marginBottom: `1.45rem`,
    }}>

    <div style={{
      maxWidth: 960,
      display: `flex`,
      flexDirection: `row`,
      flexGrow: 1,
      alignItems: `center`
    }}>
      <NavHead link='/' body={siteTitle} />

      <NavItem link='/about' body='ABOUT' />
      <NavItem link='/meetings' body='MEETINGS' />
      <NavItem link='/contact' body='CONTACT' />
    </div>
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