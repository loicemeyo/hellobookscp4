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

        const upgradinguser = {

            email: this.state.email,
    
        };console.log(upgradinguser);

        const token = localStorage.getItem('access_token');
        const config ={ headers:{"Authorization":"Bearer " + token}}
        console.log(config)

        axios.put("http://127.0.0.1:5000//api/v2/auth/register", upgradinguser, config)
            .then(response => {
            console.log(response);
            console.log(this.state);
            browserHistory.push('/')
            if(response.data.status === 200){
                swal("You have successfully set this user's status");
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
                    <h2> Change User Status</h2>
                    <div class="row">
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
                    </div>
                    <br />
                    <button type="submit">Change Status</button>
                </form>
            </div>

        )
    }
}
export default Logoutform;