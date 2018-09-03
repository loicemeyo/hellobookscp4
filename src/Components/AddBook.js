import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { browserHistory } from "react-router";

class AddBook extends Component {
    state = {
        title:'',
        author:'',
        year:'',
        serial:'',
    }
    componentDidMount() {
        const token = localStorage.getItem("access_token");
        if (!token) {
            return browserHistory.push("/login");
        }
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();

        const newbook = {
            "title":this.state.title,
            "author":this.state.author,
            "year":this.state.year,
            "serial_number":this.state.serial
        };

        const token = localStorage.getItem("access_token");
        
        const config ={ headers:{"Authorization":"Bearer " + token}}
       

        axios.post("http://127.0.0.1:5000/api/v2/books", newbook, config)
        .then(response => {
            console.log(response);
            console.log(this.state);
            if(response.data.status === 201){
                swal("new book successfully added");
            } else {
                swal(response.data.message);
            }
        }).catch({});
    };   
   render() {
    return (
        <div style={{ padding: '30px', color: '#337ab7' }}>
        <button className="btn btn-primary" onClick={browserHistory.goBack}>Go Back</button>
        <div className = "jumbotron" id="signupPage">
        <form onSubmit={this.handleSubmit}>
        <h2> Add new book </h2>
            <div className = "row">
                <div className ="col-xs-6">
                    <input
                    id="title"
                    className="form-control"
                    name="title"
                    type="text"
                    placeholder="Enter Book Title"
                    required={true}
                    value={this.state.title}
                    onChange={this.handleChange}
                    />
                </div>
            </div>
            <br/>
            <div className = "row">
                <div className ="col-xs-6">
                    <input
                    id="author"
                    className="form-control"
                    name="author"
                    type="text"
                    placeholder="Enter Book Author"
                    required={true}
                    value={this.state.author}
                    onChange={this.handleChange}
                    />
                </div>
            </div>
            <br/>
            <div className = "row">
                <div className ="col-xs-6">
                    <input
                        id="year"
                        className="form-control"
                        name="year"
                        type="number"
                        placeholder="Enter Publication Year"
                        required={true}
                        value={this.state.year}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
            <br/>
            <div className = "row">
                <div className ="col-xs-6">
                    <input
                        id="serial"
                        className="form-control"
                        name="serial"
                        type="string"
                        placeholder="Enter Serial Number"
                        required={false}
                        value={this.state.serial}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
            <br/>
            <button className='btn btn-primary' type="submit">Add Book</button> 
        </form>
    </div>
    </div>

           );
        }
    }

export default AddBook;
