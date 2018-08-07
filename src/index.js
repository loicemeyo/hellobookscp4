import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Components/Home';
import Root from './Components/Root';
import Signupform from './forms/signup';
import Loginform from './forms/login';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Router >
                <Route path={"/"} component={Home}>

                    {/* <Route component={Home}/> */}
                    {/* <Route path={"/home"} component={Home}/> */}
                    <Route path={"/signup"} component={Signupform}/>
                    <Route path={"/login"} component={Loginform}/>

                </Route>


            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
