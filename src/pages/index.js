import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to the NDSU Cyber Security Student Association Homepage</h1>
    <p>We are a club of many individuals that share a common interest of creting technology, and breaking it.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
);

export default IndexPage;
