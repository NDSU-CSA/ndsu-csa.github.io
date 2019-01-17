import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import { StaticQuery, graphql } from 'gatsby';

import ContactCard from '../components/card/contactCard'

const Contact = () => (
    <StaticQuery
        query={
            graphql`
                query ContactQuery {
                    site {
                        ...SchoolName
                        ...ContactInfo
                    }
                }
            `
        }
        render={(data) => (
            <Layout>
                <SEO title="Contact" />
                <h1>Contact</h1>
                <p>
                    If you are a student at {data.site.siteMetadata.schoolFull}, then the best way to contact us is through 
                    our <a href="https://myndsu.ndsu.edu/organization/csa">My {data.site.siteMetadata.school} Page.</a>
                </p>
                <p>
                    If you are not a student at {data.site.siteMetadata.schoolFull}, then the best way to contact us is through 
                    one of our club representatives:
                </p>
                <ContactCard 
                    title={data.site.siteMetadata.contactInfo.president.title} 
                    name={data.site.siteMetadata.contactInfo.president.name} 
                    subTitle={data.site.siteMetadata.contactInfo.president.subTitle} 
                    email={data.site.siteMetadata.contactInfo.president.email} 
                    phoneNumber={data.site.siteMetadata.contactInfo.president.phoneNumber}
                />
                <br />
                <ContactCard 
                    title={data.site.siteMetadata.contactInfo.facultyAdvisor.title} 
                    name={data.site.siteMetadata.contactInfo.facultyAdvisor.name} 
                    subTitle={data.site.siteMetadata.contactInfo.facultyAdvisor.subTitle} 
                    email={data.site.siteMetadata.contactInfo.facultyAdvisor.email} 
                    phoneNumber={data.site.siteMetadata.contactInfo.facultyAdvisor.phoneNumber}
                />
            </Layout>
        )}
    />
);

export default Contact;