import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import RegisterNormal from "./components/Register/RegisterNormal";
import Info from "./components/Info/Info";
import FindingTutor from "./components/FindingTutor/FindingTutor";
import CreateRequire from "./components/CreateRequire/CreateRequire";
import TutorDetail from "./components/TutorDetail/TutorDetail";
import RequireDetail from "./components/RequireDetail/RequireDetail";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/register">
              < Register/>
            </Route>

            <Route path="/login">
              < Login/>
            </Route>

            <Route exact path="/">
              <WelcomeScreen />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
