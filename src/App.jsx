import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import UploadDrive from "./components/pages/UploadDrive";
import Home from "./components/pages/Home";
import Navigation from "./components/Navigation";
import Test from "./components/pages/Test";

function App() {
  return (
      <Router>
          <Navigation />
          <div className="container-fluid">
              <Switch>
                  <Route path="/">
                      <Home />
                  </Route>
                  <Route path="/upload">
                      <UploadDrive />
                  </Route>
                  <Route path="/test">
                      <Test />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
