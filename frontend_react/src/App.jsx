import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import UploadDrive from "./components/pages/UploadDrive";
import Home from "./components/pages/Home";
import Navigation from "./components/Navigation";
import About from "./components/pages/About";
import ViewLinkedIn from "./components/pages/ViewLinkedIn";

function App() {
  return (
      <Router>
          <Navigation />
          <div className="container-fluid">
              <Switch>
                  <Route path="/" exact={true}>
                      <Home />
                  </Route>
                  <Route path="/upload" exact={true}>
                      <UploadDrive />
                  </Route>
                  <Route path="/view" exact={true}>
                      <ViewLinkedIn />
                  </Route>
                  <Route path="/about" exact={true}>
                      <About />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
