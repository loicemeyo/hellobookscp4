import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { browserHistory } from 'react-router';

class Logoutform extends React.Component {
    state = {
        email: '',
    
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const loggingoutuser = {

            email: localStorage.getItem('email'),
    
        };console.log(loggingoutuser);

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
                console.log(error.response);
                if(error.response.status === 401){
                    swal (error.response.data.Message);
                }
                

            });


    };
    render() {
        return (
            <div class="container">
                <form onSubmit={this.handleSubmit}>
                    <h2> Log out </h2>
                    {/* <div class="row">
                        <div class="col-xs-6">
                            <input
                                name="email"
                                type="text"
                                placeholder="Enter Email"
                                required={true}
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div> */}
                    <br />
                    <button type="submit">Logout</button>
                </form>
            </div>

        )
    }
}
export default Logoutform;