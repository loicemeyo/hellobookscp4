import React, { Component } from "react";
import axios from "axios";
import { browserHistory } from "react-router";

/**
 * This component displays all the users of the library
 */
class AllUsers extends Component {
  constructor() {
    super();
    this.state = {
      allUsers: []
    };
  }

  /**
   * Make server request to display all users
   * Allow admin to view this page only when they are logged in
   * @returns {object} allUsers
   */

  componentDidMount() {
    const token = localStorage.getItem("access_token");
    if (!token) {
      return browserHistory.push("/login");
    }

    const config = { headers: { "Authorization": "Bearer " + token } };


    axios.get("http://127.0.0.1:5000/api/v2/auth/register", config)
      .then(response => {
        
        this.setState({
          allUsers: response.data.library_users
        });
      }).catch();
  }
  render() {
    return (
      <div style={{ padding: "20px", color: "#337ab7" }}>
        <h2 style={{ padding: "5px", color: "#337ab7", textAlign: "center" }}>HelloBooks Users</h2>
        <br />
        <div className="col=md-8">
          <table className="table" style={{ border: "1px solid grey" }}>
            <tr><th>Email</th> <th>Name</th> <th>Admin</th></tr>
            {this.state.allUsers.map(user =>
              <tr key={user.id}>
                <td>{user.Email}</td> <td>{user.Name}</td> <td>{user.Status ? "Yes" : "No"}</td>
              </tr>
            )}
          </table>
        </div>
      </div>

    );
  }
}
export default AllUsers;