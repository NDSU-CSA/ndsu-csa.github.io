import React from 'react'

import Layout from '../components/layout/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>NDSU Cybersecurity Student Association Homepage</h1>
        <p>We are a group of individuals that share a common interest of creating technology, and breaking it.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, margin: `0 auto`}}>
            <Image />
        </div>
    </Layout>
);

export default IndexPage;
