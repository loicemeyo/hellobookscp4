import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import "./index.css";
import Home from "./Components/Home";
import Root from "./Components/Root";
import AllBooks from "./Components/AllBooks";
import AddBook from "./Components/AddBook";
import OneBook from "./Components/OneBook";
import Signupform from "./forms/signup";
import Loginform from "./forms/login";
import Logoutform from "./forms/logout";
import AllUsers from "./Components/AllUsers";
import UpgradeUser from "./Components/UpgradeUser";
import Error from "./Components/Error";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";



class App extends Component {
  render() {
    return (
      <Router history={browserHistory} >
        <Route path={"/"} component={Root} >
          <IndexRoute path={"/home"} component={Home} />
          <Route path={"/signup"} component={Signupform} />
          <Route path={"/login"} component={Loginform} />
          <Route path={"/books"} component={AllBooks} />
          <Route path={"/books/:id"} component={OneBook} />
          <Route path={"/addbook"} component={AddBook} />
          <Route path={"/logout"} component={Logoutform} />
          <Route path={"/users"} component={AllUsers} />
          <Route path={"/upgradeuser"} component={UpgradeUser} />
          <Route component={Error} />
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
