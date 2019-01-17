import React from 'react'
import PropTypes from 'prop-types'

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