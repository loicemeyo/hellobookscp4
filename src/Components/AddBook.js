import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

class AddBook extends Component {
    state = {
        title:'',
        author:'',
        year:'',
        serial:'',
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
        const token = localStorage.getItem('access_token');
        const config ={ headers:{"Authorization":"Bearer " + token}}
        console.log(config)

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
        

        // this.setState({
        //     title: '',
        //     author:'',
        //     year:'',
        //     serial:''
        // });
           
    };
   render() {
    return (
        <div className = "jumbotron" id="signupPage">
        <form onSubmit={this.handleSubmit}>
        <h2> Add new book </h2>
            <div className = "row">
                <div className ="col-xs-6">
                    <input
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
                    className="form-control"
                        name="serial"
                        type="number"
                        placeholder="Enter Serial Number"
                        required={false}
                        value={this.state.serial}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
            <br/>
            <button className='btn btn-default' type="submit">Add Book</button> 
        </form>
    </div>

           );
        }
    }

export default AddBook;
