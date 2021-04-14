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
export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{state, dispatch}}>

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

            <Route path="/register-normal">
              <RegisterNormal />
            </Route>

            <Route path="/tutor-profile">
              <Info/>
            </Route>

          </Switch>
        </div>
      </Router>
      <Info/>

    </div>
    </AuthContext.Provider>
  );
}

export default App;
