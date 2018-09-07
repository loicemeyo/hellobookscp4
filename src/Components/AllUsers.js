import React, { Component } from "react";
import axios from "axios";
import { browserHistory } from "react-router";
import JwPagination from "jw-react-pagination";
import { Base_url } from "./Navigation";

/**
 * This component displays all the users of the library
 */
class AllUsers extends Component {
  constructor() {
    super();
    this.onChangePage = this.onChangePage.bind(this);
    this.state = {
      pageOfItems: [],
      allUsers: []
    };
  }
  /**
   * Update the local state with a new page of Items
   * @param {object} pageOfItems
   * @returns {object} allUsers
   */
  onChangePage(pageOfItems) {
    this.setState({ pageOfItems });
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


    axios.get(`${Base_url}/api/v2/auth/register`, config)
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
        <div className="card">
        
          <table className="table" style={{ border: "1px solid grey" }}>
            <tr><th>Name</th> <th>Email</th> <th>Admin</th></tr>
            {this.state.allUsers.length > 0 &&
            this.state.pageOfItems.map(user =>
              <tr key={user.id}>
              <td>{user.Name}</td> <td>{user.Email}</td> <td>{user.Status ? "Yes" : "No"}</td>
              </tr>
            )}
          </table>
        </div>
      </div>
      <div style={{float:"right", textDecoration:"none"}}>
          <JwPagination items = {this.state.allBooks} pageSize={6} onChangePage={this.onChangePage}/>
        </div>
      </div>

    );
  }
}
export default AllUsers;