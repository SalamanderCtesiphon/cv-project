import React, { Component } from "react";
import '../styles/ContactInfo.css';

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            schoolName: "",
            fieldOfStudy: "",
            startDate: "",
            completionDate: "",
            city: "",
        };
    }

    render() {
        return (
            <div className="inputForm education">
                <h3>Education</h3>
                <form>
                    <label>
                        Name of Institution:
                        <input type="text" name="schoolName" />
                    </label>
                    <label>
                        Field of Study:
                        <input type="text" name="fieldOfStudy" />
                    </label>
                    <label>
                        Start Date:
                        <input type="text" name="startDate" />
                    </label>
                    <label>
                        Completion Date:
                        <input type="text" name="competionDate" />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Education;
