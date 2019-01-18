import React from 'react'
import PropTypes from 'prop-types'

/**
 * 
 * Contact Card
 * 
 * Creates a formatted contact card with given information, used specifically on
 * /contact
 * 
 * @param title 
 * @param name 
 * @param subTitle e.g. assistant professor
 * @param email 
 * @param phoneNumber
 * @returns formatted contact card
 */
function ContactCard( { title, name, subTitle, email, phoneNumber } ) {
    return (
        <div style={{
            lineHeight: "0.5em"
        }}>
            <div style={{
                padding: "20px 20px 0px 50px"
            }}>
                <p><b>{title}:</b></p>
                <p>{name}</p>
                <p>{subTitle}</p>
                <p><a href={`mailto:${email}`}>{email}</a></p>
                <p>{phoneNumber}</p>
            </div>
        </div>
    );
}

ContactCard.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    subTitle: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string
}

export default ContactCard;