import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { browserHistory } from 'react-router'
import "../App.css"

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
    

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const newuser = {
            "name":this.state.name,
            "email":this.state.email,
            "password":this.state.password,
            "confirm password":this.state.passwordb
        };
        console.log(newuser);

        axios.post("http://127.0.0.1:5000/api/v2/auth/register", newuser)
        .then(response => {

            browserHistory.push('/login')
            swal("new user successfully registered");
            

        }).catch(error => {
            if(error.response.status === 409){
               alert(error.response.data.message);
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
                <div class = "row">
                    <div class ="col-xs-12">
                        <input
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
                        name="email"
                        type="text"
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
                        <input name="password"
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
                        <input name="passwordb"
                            type="password"
                            placeholder="Cofirm Password"
                            required={false}
                            defaultValue={this.state.passwordb}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <br/>
                <button type="submit">Signup</button> 
            </form>
        </div>
        </div>
            
        )
    }
}
export default Signupform;
