import React from 'react';
import { Link, browserHistory } from 'react-router';
import axios from 'axios';
import decode from 'jwt-decode';
import swal from 'sweetalert';

/**
 * The Login component
 */
class Loginform extends React.Component {
    state = {
        email: '',
        password: ''
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
     * Makes a server request to validate user and allow login
     */
    handleSubmit = (event) => {
        event.preventDefault();

        const logginguser = {

            email: this.state.email,
            password: this.state.password
        };

        return axios.post("http://127.0.0.1:5000/api/v2/auth/login", logginguser)
            .then(response => {
                console.log(response.data.Admin)
                localStorage.setItem("access_token", response.data.Token)
                localStorage.setItem("email", logginguser.email)
                localStorage.setItem("admin", response.data.Admin)
                swal("Login successful");
                if(response.data.Admin){
                    return browserHistory.push('/admin')
                }
                browserHistory.push('/books')

            }).catch(error => {
                console.log(error)
                if (error.response.status === 401) {
                    const message = error.response.data.Message;
                    swal("message!!", message, "error");
                }
            });


    };
    render() {
        return (
            <div className="container" id="loginPage" >
                <div className="jumbotron">

                    <form onSubmit={this.handleSubmit}>
                        <h2> Log in </h2>
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
                        <div className="row">
                            <div className="col-xs-6">
                                <input
                                    id="password"
                                    className="form-control"
                                    name="password"
                                    type="password"
                                    placeholder="Enter Password"
                                    required={false}
                                    defaultValue={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <br />
                        <button className='btn btn-default' type="submit">Login</button>
                        <br />
                        <br />
                        <div>
                            Forgot password? <Link to={"/requestreset"}>Click here to reset your password</Link>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}
export default Loginform;