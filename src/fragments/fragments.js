import { graphql } from 'gatsby';

/**
 * Fragments
 * 
 * Helpful graphql query fragments, gatsby picks these up automatically 
 * and they can be used anywhere without import
 */

export const SchoolNameQuery = graphql`
    fragment SchoolName on Site {
        siteMetadata {
            school, 
            schoolFull
        }
    }
`;

export const ContactInfoQuery = graphql`
    fragment ContactInfo on Site {
        siteMetadata {
            contactInfo {
                president {
                    title,
                    name,
                    subTitle,
                    email,
                    phoneNumber
                },
                facultyAdvisor {
                    title,
                    name,
                    subTitle,
                    email,
                    phoneNumber
                }
            }
        }
    }
`;