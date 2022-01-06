import React, { useState, useEffect } from 'react';
import phoneService from "../Services/phone";


const AddContactForm = ({onSubmit}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if ((firstName || lastName) && phone) {
            setDisabled(false);
        }
    }, [firstName, lastName, phone]);
    
    const handleSubmit = () => {
        // e.preventDefault();
        // Submit Data here
        console.log('submitting');
        const newContact = {
            first_name: firstName,
            last_name: lastName,
            phone_number: phone,
        };
        console.log('new contact: ', newContact);

        onSubmit(newContact);

        console.log('new submitted: ');

        setFirstName('');
        setLastName('');
        setPhone('');

        return;
    };

    return (
        <div className="addContactForm justify-content-md-between " >
            <input  className='col-md-3' type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value.trim())} />
            <input  className='col-md-3' type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value.trim())} />
            <input  className='col-md-3' type="text" placeholder="Number" onChange={(e) => setPhone(e.target.value.trim())}  />
            <div className='col-md-2'><button type="submit" disabled={disabled} onClick={handleSubmit}>Add Contact</button></div>
        </div>
    );
}

export default AddContactForm;