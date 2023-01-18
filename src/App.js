import React from "react";
import Header from "./components/Header";
import ContactInfo from "./components/ContactInfo";
import Education from "./components/Education"

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <ContactInfo />
                <Education />
            </div>
        );
    }
}

export default App;
