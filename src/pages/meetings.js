import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import { StaticQuery, graphql } from 'gatsby';

function MeetingPage() {
    return (
        <StaticQuery
            query={graphql`
                query MeetingQuery {
                    site {
                        ...SchoolName
                    }
                }
            `}
            render={ (data) => (
                <Layout>
                    <SEO title="Meetings" />
                    <h1>Meetings</h1>
                    <p>Our current meeting schedule is as follows:</p>
                    <div style={{
                        overflowX: `scroll`
                    }}>
                        <table>
                            <tr>
                                <th>Monday</th>
                                <th>Tuesday</th>
                                <th>Wednesday</th>
                                <th>Thursday</th>
                                <th>Friday</th>
                                <th>Saturday</th>
                                <th>Sunday</th>
                            </tr>
                            <tr>
                                <td>No Meeting</td>
                                <td>No Meeting</td>
                                <td>
                                    6PM<br/>
                                    QBB Room 424
                                </td>
                                <td>No Meeting</td>
                                <td>No Meeting</td>
                                <td>No Meeting</td>
                                <td>No Meeting</td>
                            </tr>
                        </table>
                    </div>
                    <p>
                        While this is our set schedule, often times there are meetings hosted by members that may not fall on the one day a week we officially meet.
                        Reminders to meetings are sent out by email, if you would like to be added to our email list, join our club at 
                        our <a href="https://myndsu.ndsu.edu/organization/csa">My {data.site.siteMetadata.school} Page.</a>
                    </p>
                </Layout>
            )}
        />
    )
};
    
export default MeetingPage