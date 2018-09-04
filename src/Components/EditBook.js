import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import {browserHistory} from 'react-router';

/**
 * This component enables an admin to edit a book to the library
 */

class EditBook extends Component {
    constructor (props){
    super(props)
    this.state = {
       books:[],
        title:'',
        author:'',
        year:'',
        serial:'',
    }}
     /**
     * Allow the admin to view this function only when they are logged in.
     * Otherwise, redirect to login
     */
    componentDidMount() {
        const token = localStorage.getItem("access_token");
        if (!token) {
            return browserHistory.push("/login");
        }
    }
    /**
     * This function sets the state to the new field value as entered by the user
     * @param {string} e
     * @returns {string} value
     */
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    /**
     * Make server request to get the book by ID and populate input fields withe the current book details
     * @param {int} bookId
     * @returns {object}book
     */
    componentDidMount() {
        const token = localStorage.getItem('access_token');
        const bookId = this.props.params.id;
        const single_book_url = `http://127.0.0.1:5000/api/v2/books/${bookId}`

        const config = { headers: { 'Authorization': "Bearer " + token } };

        axios.get(single_book_url, config)
            .then(response => {
                console.log(response.data.book)
                this.setState({
                    books:response.data,
                    id:response.data.book.ID,
                    title:response.data.book.Title,
                    author:response.data.book.Author,
                    year:response.data.book.Publication,
                    serial:response.data.book.Serial,
                    status:response.data.book.Status
                });
            }).catch(error=>{
            })
    }
    /**
     * Make server request to edit a book by given id
     * @param {string} e
     * @returns {string} success message
     */

    handleSubmit = (event) => {
        event.preventDefault();


        const editbook = {
            "title":this.state.title,
            "author":this.state.author,
            "year":this.state.year,
            "serial_number":this.state.serial
        };
            const token = localStorage.getItem('access_token');
            const bookId = this.props.params.id;
            const edit_book_url = `http://127.0.0.1:5000/api/v2/books/${bookId}`
            const config ={ headers:{"Authorization":"Bearer " + token}}
            
            axios.put(edit_book_url, editbook, config)
            .then(response => {
                console.log(response);
                console.log(this.state);
                if(response.data.status === 200){
                    swal("Book details successfully updated");
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
        <h2> Edit Book details </h2>
            <div className = "row">
                <div className ="col-xs-6">
                    <input
                    id="title"
                    className="form-control"
                    name="title"
                    type="text"
                    placeholder="Edit Book Title"
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
                    placeholder="Edit Book Author"
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
                        placeholder="Edit Publication Year"
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
                        type="text"
                        placeholder="Edit Serial Number"
                        required={false}
                        value={this.state.serial}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
            <br/>
            <button className='btn btn-primary' type="submit">Edit Book</button> 
        </form>
    </div>
    </div>

           );
        }
    }

export default EditBook;
