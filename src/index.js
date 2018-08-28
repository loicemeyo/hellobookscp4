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
import Requestform from "./forms/requestreset";
import Resetform from "./forms/resetpassword";
import History from "./Components/BorrowingHistory";
import AllUsers from "./Components/AllUsers";
import UpgradeUser from "./Components/UpgradeUser";
import Admin from "./Components/Admin";
import EditBook from "./Components/EditBook";
import Error from "./Components/Error";
import registerServiceWorker from "./registerServiceWorker";
import ProtectedRoute from "./Components/ProtectedRoute";
import "bootstrap/dist/css/bootstrap.min.css";



class App extends Component {
  render() {
    return (
      <Router history={browserHistory} >
        <Route path={"/"} component={Root} >
          <IndexRoute component={Home} />
          <Route path={"/signup"} component={Signupform} />
          <Route path={"/login"} component={Loginform} />
          <ProtectedRoute path={"/requestreset"} component={Requestform}/>
          <ProtectedRoute path={"/resetpassword/:token/:email"} component={Resetform}/>
          <ProtectedRoute path={"/books"} component={AllBooks} />
          <ProtectedRoute path={"/books/:id"} component={OneBook} />
          <ProtectedRoute path={"/users/books"} component={History}/>
          <ProtectedRoute path={"/addbook"} component={AddBook} />
          <ProtectedRoute path={"/users"} component={AllUsers} />
          <ProtectedRoute path={"/upgradeuser"} component={UpgradeUser} />
          <ProtectedRoute path={"/admin"} component={Admin}/>
          <ProtectedRoute path={"/editbook/:id"} component={EditBook}/>
          <Route path='*' exact={true} component={Error} />
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
