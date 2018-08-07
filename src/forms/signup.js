import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';

class Signupform extends React.Component {
    state = {
        name: '',
        email:'',
        password:''
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
            "password":this.state.password
        };

        axios.post("http://127.0.0.1:5000/api/v2/auth/register", newuser)
        .then(response => {
            console.log(response);
            console.log(this.state);
            if(response.data.status === 201){
                swal("new user successfully registered");
            } else {
                swal(response.data.message);
            }
        }).catch(error => {
            console.log(error.response);
            if(error.response.status === 409){
                console.log(error.response);
            }
            // else if (error.response.status === 400){
            //     swal ("Bad request!");
            // }
            // else if (error.response.status === 200){
            //     swal ("Error!")
            // };

        });


    };
    render (){
        return (
        <div class = "container">
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
                <div class = "row">
                    <div class ="col-xs-6">
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
                <div class = "row">
                    <div class ="col-xs-6">
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
                <button type="submit">Signup</button> 
            </form>
        </div>
            
        )
    }
}
export default Signupform;
