import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { browserHistory } from 'react-router';

/**
 * This component enables a logged in admin to upgrade a normal user to admin status or downgrade them
 */

class UpgradeUser extends React.Component {
    state = {
        email: '',
    
    }
     /**
     * Allow the admin to view this function only when they are logged in.
     * Otherwise, redirect to login
     */
    componentDidMount (){
        const token = localStorage.getItem("access_token");
        if(!token){
            return browserHistory.push("/login")
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
     * Make server request to upgrade/downgrade a user
     * @param {int} bookId
     * @returns {object}book
     */
    handleSubmit = (event) => {
        event.preventDefault();

        const upgradinguser = {

            email: this.state.email,
    
        };

        const token = localStorage.getItem('access_token');
        const config ={ headers:{"Authorization":"Bearer " + token}}
    

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
            <div style={{ padding: '30px', color: '#337ab7' }}>
            <button className="btn btn-primary" onClick={browserHistory.goBack}>Go Back</button>
            <div className="jumbotron" id="signupPage">
                <form onSubmit={this.handleSubmit}>
                    <h2> Change User Status</h2>
                    <div className="row">
                        <div className="col-xs-6">
                            <input
                                id="email"
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
                    <button className='btn btn-primary' type="submit">Change Status</button>
                </form>
            </div>
            </div>

        )
    }
}
export default UpgradeUser;