import "./App.css";
import React from "react";
import { DataProvider } from "./components/Context";
import {BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Section from "./components/Section";

class App extends React.Component {
  render() {
    return (
      <DataProvider>
        <div className="App">
          
          <Router>
               <Header/> 
               <Section/>
          </Router>

        </div>
      </DataProvider>
    );
  }
}

export default App;
