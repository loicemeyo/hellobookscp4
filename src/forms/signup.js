import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { browserHistory } from 'react-router'
import "../App.css"
/**
 * The Signup component
 */
class Signupform extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        name: '',
        email:'',
        password:'',
        passwordb:''
    }
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
     * Makes a server request to validate a new user and allow signup
     */
    handleSubmit = (event) => {
        event.preventDefault();

        const newuser = {
            "name":this.state.name,
            "email":this.state.email,
            "password":this.state.password,
            "confirm_password":this.state.passwordb
        };
        console.log("this ", newuser.confirm_password);
        axios.post("http://127.0.0.1:5000/api/v2/auth/register", newuser)
        .then(response => {
            browserHistory.push('/login')
            swal("You have successfully registered to HelloBooks");
            

        }).catch(error => {
            if(error.response.status === 400){
                swal("Error", error.response.data.message,"error");
            }
            else if(error.response.status === 409){
               swal(error.response.data.message);
            }
        });
        this.setState({
            name: '',
            email:'',
            password:'',
            passwordb:''
        });
           
    };
    
    render (){
        return (
        <div>
        <div className = "jumbotron" id="signupPage">
            <form onSubmit={this.handleSubmit}>
            <h2> Sign up </h2>
                <div className = "row">
                    <div className ="col-xs-6">
                        <input
                        id="username"
                        className="form-control"
                        name="name"
                        type="text"
                        placeholder="Enter Username"
                        required={true}
                        value={this.state.name}
                        onChange={this.handleChange}
                        />
                    </div>
                </div>
                <br/>
                <div className = "row">
                    <div className ="col-xs-6">
                        <input
                        id="email"
                        className="form-control"
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        required={true}
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                    </div>
                </div>
                <br/>
                <div className = "row">
                    <div className ="col-xs-6">
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
                <br/>
                <div className = "row">
                    <div className ="col-xs-6">
                        <input
                            id="passwordb"
                            className="form-control"
                            name="passwordb"
                            type="password"
                            placeholder="Confirm Password"
                            required={false}
                            defaultValue={this.state.passwordb}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <br/>
                <button className='btn btn-default' type="submit">Signup</button> 
            </form>
        </div>
        </div>
            
        )
    }
}
export default Signupform;
