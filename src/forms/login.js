import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';

class Loginform extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const logginguser = {

            email: this.state.email,
            password: this.state.password
        };console.log(logginguser);


        axios.post("http://127.0.0.1:5000/api/v2/auth/login", logginguser)
            .then(response => {
                console.log(response.data);
                swal("Login successful");

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
                    <h2> Log in </h2>
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
                    <div class="row">
                        <div class="col-xs-6">
                            <input name="password"
                                type="password"
                                placeholder="Enter Password"
                                required={false}
                                defaultValue={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>

        )
    }
}
export default Loginform;