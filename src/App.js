import React from "react";
import Header from "./components/Header";
import ContactInfo from "./components/ContactInfo";
import Education from "./components/Education";
import PracticalExperience from "./components/PracticalExperience";
import Page from "./components/Page";

class App extends React.Component {
    constructor(props) {
        super();

        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <Header />
                <ContactInfo />
                <Education />
                <PracticalExperience />
                <Page />
            </div>
        );
    }
}

export default App;
