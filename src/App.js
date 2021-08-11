import "./App.css";
import React from "react";
import { DataProvider } from "./components/Context";
import {BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <DataProvider>
        <div className="App">
          <h1>gg</h1>
          <Router>
                
          </Router>

        </div>
      </DataProvider>
    );
  }
}

export default App;
