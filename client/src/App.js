import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import MainBody from "./components/MainBody/MainBody";
import FooterSection from "./components/FooterSection/FooterSection";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <MainBody />
        <FooterSection />
      </div>

    );
  }
}

export default App;
