import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Base_url } from "./Navigation";

/**
 * The Requestform component allows a user to submit a password request
 */
class Requestform extends React.Component {
    state = {
        email: '',
    
    }
    /**
     * This function sets the state to the new field value as entered by the user
     * @param {string} e
     * @returns {string} value
     */
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    /**
     * Makes a server request to validate email and send a reset link to user's email
     */
    handleSubmit = (event) => {
        event.preventDefault();

        const resettinguser = {

            email: this.state.email,
        };


        axios.post(`${Base_url}/api/v2/auth/reset-password`, resettinguser)
            .then(response => {
                localStorage.setItem("email",resettinguser.email)
                
                swal("Please view your email for a link to reset your password");

            }).catch(error => {
                if(error.response.status === 401){
                    swal (error.response.data.Message);
                }
                

            });


    };
    render() {
        return (
            <div className="container" id="loginPage" >
            <div className="jumbotron">
        
                <form onSubmit={this.handleSubmit}>
                    <h2> Request Reset Password </h2>
                    <div className="row">
                        <div className="col-xs-6">
                            <input
                                id="email"
                                className="form-control"
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
                    <button className='btn btn-default' type="submit">Request Reset Password</button>
                </form>
                </div>
            </div>

        )
    }
}
export default Requestform;