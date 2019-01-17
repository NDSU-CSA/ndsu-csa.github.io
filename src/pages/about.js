import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const About = () => (
    <Layout>
        <SEO title="About" />
        <h1>This is an about page</h1>
        <p>There will be information here once there is anything we are willing to share</p>
        <Link to="/" >Home</Link>
    </Layout>
);

export default About
