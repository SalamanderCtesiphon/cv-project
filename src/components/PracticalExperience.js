import React, { Component } from "react";
import '../styles/ContactInfo.css';

class PracticalExperience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            companyName: "",
            title: "",
            startDate: "",
            finalDate: "",
            city: "",
            phone: "",
            description: "",
        };
    }

    render() {
        return (
            <div className="inputForm">
                <h2>Experience</h2>
                <form>
                    <label>
                        Name of Company:
                        <input type="text" name="companyName" />
                    </label>
                    <label>
                        Position Title:
                        <input type="text" name="title" />
                    </label>
                    <label>
                        Start Date:
                        <input type="text" name="startDate" />
                    </label>
                    <label>
                        Final Date:
                        <input type="text" name="finalDate" />
                    </label>
                    <label>
                        City:
                        <input type="text" name="city" />
                    </label>
                    <label>
                        Phone Number:
                        <input type="tel" name="phone" />
                    </label>
                    <label>
                        Description of Duties:
                        <input type="text" name="description" />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default PracticalExperience;
