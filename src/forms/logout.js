import React from 'react';


class Logoutform extends React.Component {
    state = {
        email: '',
    
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    
    render() {
        return (
            <div class="jumbotron">
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
                    <button className='btn btn-default' type="submit">Logout</button>
                </form>
            </div>

        )
    }
}
export default Logoutform;