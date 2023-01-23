import React from "react";
import Page from "./components/Page";
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }
    render() {
        return (
            <div className="App">
                <Page />
            </div>
        );
    }
}

export default App;
