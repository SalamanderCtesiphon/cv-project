import React, { Component } from "react";
import '../styles/ContactInfo.css';

class ContactInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            country: ""
        };
    }

    render() {
        return (
            <div className="inputForm">
                <h3>Contact Info</h3>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" />
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
}

export default ContactInfo;
