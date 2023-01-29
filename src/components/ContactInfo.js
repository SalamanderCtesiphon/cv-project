import '../styles/ContactInfo.css';
import React, { useState } from 'react';

const ContactInfo = (props) => {
    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        props.addContactInfo(name);
        setName('');
    }

    function handleChange(e) {
        setName(e.target.value);
    }
    
    return (
        <div className="inputForm contactInfo">
            <h3>Contact Info</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input 
                        type="text" 
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input 
                        
                    />
                </label>
                <label>
                    Phone:
                    <input type="text" name="phone" />
                </label>
                <label>
                    Address:
                    <input type="text" name="address" />
                </label>
                <label>
                    City:
                    <input type="text" name="city" />
                </label>
                <label>
                    State:
                    <input type="text" name="state" />
                </label>
                <label>
                    Zip:
                    <input type="text" name="zip" />
                </label>
                <label>
                    Country:
                    <input type="text" name="country" />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactInfo;
