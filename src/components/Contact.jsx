import React from 'react';

const Contact = ({name, phone}) => {
    
    return (
        <div className="contact">
            <h2 className="contactName">{name}</h2>
            <p>{phone}</p>
        </div>
    );
}

export default Contact;