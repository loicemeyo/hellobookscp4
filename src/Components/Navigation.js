import React from "react";
import { Link, browserHistory} from "react-router";
import axios from 'axios';
import swal from 'sweetalert';

class Navigation extends React.Component {
  
  handleLogout = (event) => {

    const loggingoutuser = {

        email: localStorage.getItem('email'),

    };
    console.log(loggingoutuser)
    const token = localStorage.getItem('access_token');
    const config ={ headers:{"Authorization":"Bearer " + token}}

    axios.post("http://127.0.0.1:5000/api/v2/auth/logout", loggingoutuser, config)
        .then(response => {
            localStorage.removeItem("access_token")
            localStorage.removeItem('email')
            browserHistory.push('/')
            swal("You have successfully logged out");
         
        }).catch(error => {
              if (error.response.status === 401) {
                localStorage.removeItem('access_token');
                localStorage.removeItem('email')
                browserHistory.push('/login');
             
          }
        });


};
  render() {
    let isloggedIn = localStorage.getItem("access_token");
    let isadmin=JSON.parse(localStorage.getItem("admin"));

    return (
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand"><Link to="/">Hello Books</Link></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {isloggedIn ?(
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          {isadmin? (
            <li className="nav-item active">
            <a className="nav-link"><Link to="/admin" className="inner">Home</Link>
            </a>
          </li>):
          (
            <li className="nav-item active">
            <a className="nav-link"><Link to="/books" className="inner">Home</Link>
            </a>
          </li>
          )}
            <li className="nav-item active">
              <a className="nav-link"><Link to="/users/books" className="inner">User History</Link>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link"><Link id="logout" style={{ cursor: 'pointer'}} onClick={this.handleLogout} className="inner">Logout</Link>
              </a>
            </li>
          </ul>
          
          </div>
        ):(
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link"><Link to="/" className="inner">Home</Link>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link"><Link to="/signup" className="inner">Signup</Link>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link"><Link to="/login" className="inner">Login</Link>
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    );
  }
}
export default Navigation;