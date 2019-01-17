import React from 'react'
import PropTypes from 'prop-types'

const renderIfNotEmpty = (content) => {
    if(content !== '') {
        return (<p>{content}</p>);
    } else {
        return ({});
    }
}

function ContactCard( { title, name, subTitle, email, phoneNumber } ) {
    return (
        <div>
            <p><em>{title}:</em></p>
            <p>{name}</p>
            <p>{subTitle}</p>
            <p><a href={`mailto:${email}`}>{email}</a></p>
            <p>{phoneNumber}</p>
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