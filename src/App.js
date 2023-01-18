import React from "react";
import Header from "./components/Header";
import ContactInfo from "./components/ContactInfo";
import Education from "./components/Education";
import PracticalExperience from "./components/PracticalExperience";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <ContactInfo />
                <Education />
                <PracticalExperience />
            </div>
        );
    }
}

export default App;
