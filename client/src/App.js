import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import FooterSection from "./components/FooterSection/FooterSection";
import SearchPage from "./pages/SearchPage";
import MyList from "./pages/MyList";

export default function App() {
  return (
      <Router>
      <Navigation />
        <Switch>
          <Route exact path="/">
            <SearchPage /> 
          </Route>
          <Route exact path="/mylist">
            <MyList />
          </Route>
        </Switch>
        <FooterSection/>
      </Router>
  );
}
