import React, { useState, useEffect} from 'react';
import Contact from './Contact';
import phoneService from "../Services/phone";

const PhoneBookList = ({contacts}) => {

    return (
        <div className='phoneBookList'>
            {contacts.map((contact) => {
                const { first_name, last_name, phone_number } = contact;
                return (
                    <Contact key={contact.id} name={`${first_name} ${last_name}`} phone={phone_number} />
                )
            })}
        </div>
    );
}

export default PhoneBookList;