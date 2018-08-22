import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { browserHistory } from 'react-router';

class Resetform extends React.Component {

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const token = this.props.params.token
        const email = this.props.params.email
        const new_password= event.target.elements.newpassword.value
        const confirm_password= event.target.elements.confirmpassword.value


        axios.post(`http://127.0.0.1:5000/api/v2/auth/reset-password?token=${token}`, {email:email, password:new_password, confirm_password:confirm_password})
            .then(response => {

                swal("You have successfully reset your password");

            }).catch(error => {
                console.log(error.response);
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
                    <h2> Reset Password </h2>
                    <div className="row">
                    <div className="col-xs-6">
                            <input
                                className="form-control"
                                name="newpassword"
                                type="password"
                                placeholder="New Password"
                                required={true}
                                />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                    <div className="col-xs-6">
                            <input
                                className="form-control"
                                name="confirmpassword"
                                type="password"
                                placeholder="Confirm Password"
                                required={true}
                                />
                        </div>
                    </div>
                    <button className='btn btn-default' type="submit">Reset Password</button>
                </form>
                </div>
            </div>

        )
    }
}
export default Resetform;