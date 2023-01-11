import React from "react";
import Header from "./components/Header";
import ContactInfo from "./components/ContactInfo";


class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <ContactInfo />
            </div>
        );
    }
}

export default App;
