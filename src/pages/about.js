import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const About = () => (
    <StaticQuery 
        query={graphql`
            query AboutQuery {
                site {
                    ...SchoolName
                }
            }
        `}
        render = { (data) => (
            <Layout>
                <SEO title="About" />
                <h1>About Us</h1>
                <br/>
                <p>
                    We are the Cybersecurity Student Association (CSA for short), a student club located at {data.site.siteMetadata.schoolFull}.
                    We strive to create a learning environment where students can teach each other about various fields of technology, with an 
                    emphasis on cybersecurity. Some club activities include:
                </p>
                <ul>
                    <li>Competition in cyber games</li>
                    <li>Workshops in computer and network security </li>
                    <li>Guest speakers from the professional community </li>
                    <li>A chance to meet with others that share similar interests during our scheduled meetings</li>
                    <li>Club fundraising and student involvement activities </li>
                    <li>Opportunities for professional development and career networking </li>
                </ul>
                <p>
                    We not only teach about cybersecurity, but we also teach real world development skills, if one wishes to work with the development 
                    area of the club, they can expect to work with:
                </p>
                <ul>
                    <li>Git and GitHub in a team environment</li>
                    <li>Software development workflows that are seen in many software development companies</li>
                    <li>Various development languages, including Python, C, C++, Javascript, and many others</li>
                    <li>A wide variety of development technologies, such as Gatsby, React, Node.js, and many more</li>
                </ul>
                <p>
                    By touching many areas of cybersecurity, physical security, and development, we hope to give our members real world skills that can 
                    be applied to many jobs in the technical world. By simply discussing cybersecurity, many members of the club find themselves more aware of 
                    how to protect themselves in the online world. 
                </p>

                <h2>Our Mission</h2>
                <p>
                    The goal of the cybersecurity student organization is to increase knowledge of current cybersecurity practices among the NDSU Students through 
                    exercises, lectures, and by working with community members in the networking and computing professions. The organization will support teams to 
                    compete in cybersecurity competitions. It will serve as an excellent opportunity to learn and apply knowledge about security, networking, and 
                    administration as well as providing a chance to network with potential employers. 
                </p>
            </Layout>
        )}
    />
);

export default About;
