import React from "react";
import { Link, browserHistory} from "react-router";
import axios from 'axios';
import swal from 'sweetalert';

class Navigation extends React.Component {
  
  handleLogout = (event) => {
    event.preventDefault();

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
        if(response.data.status === 200){
            swal("You have successfully logged out");
        } else {
            swal(response.data.message);
        }

        }).catch(error => {
          if (error.response !== undefined){
              if (error.response.status === 401) {
                const message = error.response.data.Error;
                swal("message!!", message, "error");
                localStorage.removeItem('access_token');
                browserHistory.push('/login');
              }
          }
        });


};
  render() {
    let isloggedIn = localStorage.getItem("access_token");
    
    return (
  
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand"><Link to="/">Hello Books</Link></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        {isloggedIn ?(
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link"><Link to="/" class="inner">Home</Link>
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link"><Link to="/logout" onClick={this.handleLogout} class="inner">Logout</Link>
                </a>
              </li>
            </ul>
          </div>
        ):(
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link"><Link to="/" class="inner">Home</Link>
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link"><Link to="/login" class="inner">Login</Link>
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