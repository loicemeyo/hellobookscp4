import React, { Component } from 'react';
import axios from 'axios';

class AllUsers extends Component {
    state = {
        allUsers: []
    }



    componentDidMount() {
        const token = localStorage.getItem('access_token');

        const config = { headers: { 'Authorization': "Bearer " + token } };


        axios.get("http://127.0.0.1:5000/api/v2/auth/register", config)
            .then(response => {
                console.log(response.data)
                this.setState({ allUsers: response.data.library_users
                })
                console.log(this.state.allUsers)
            }).catch()
    }
    render() {
        return (
            <div style={{ padding: '20px',color:'#337ab7'}}>
            <h2>All Users</h2>
            <div id='allbooks' className="row">
            <table className="table-bordered"style={{ border: '1px solid grey'}}>
            <tr><td>Email</td> <td>Name</td> <td>Admin</td></tr>
                {this.state.allUsers.map(user => 
                <tr key={user.id}><td>{user.Email}</td> <td>{user.Name}</td> <td>{user.Status ? "Yes" : "No"}</td> </tr>
                )}
            </table>
        </div>
        </div>
    
        )};
    }
export default AllUsers;