import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';
import swal from 'sweetalert';
import { Base_url } from "./Navigation";

/**
 * This component renders a single book
 * @returns {object} book
 */

class OneBook extends Component {
    state = {
        oneBook: {}
    }
    componentDidMount() {
        const token = localStorage.getItem('access_token');
        if (!token) {
            return browserHistory.push("/login");
        }
    }
    /**
     * This function enables a user to borrow a single book when logged in
     * @param {int} bookId 
     */
    handleBorrow(bookId) {
        const token = localStorage.getItem("access_token");
        const email = localStorage.getItem("email")
        const config = { headers: { "Authorization": "Bearer " + token } };
        const borrow_book_url = `${Base_url}/api/v2/users/books/${bookId}`
        axios.post(borrow_book_url, { email: email }, config)
            .then(response => {
                console.log(response)
                browserHistory.push("/books");
                swal(response.data.Message);
            }).catch(error => {
                console.log(error.response)
                if (error.response.status === 401) {
                    swal(error.response.data.Message);
                    browserHistory.push("/login")
                }
                else if (error.response.status === 404) {
                    swal(error.response.data.Message);
                }
                else if (error.response.status === 403) {
                    swal(error.response.data.message);
                }
            });
    }
    /**
     * This function enables a user to return a single book they've previously borrowed
     * @param {int} bookId 
     */
    handleReturn(bookId) {
        const token = localStorage.getItem("access_token");
        const email = localStorage.getItem("email")
        const config = { headers: { "Authorization": "Bearer " + token } };
        const borrow_book_url = `${Base_url}/api/v2/users/books/${bookId}`
        axios.put(borrow_book_url, { email: email }, config)
            .then(response => {
                
                console.log(response)
                browserHistory.push("/users/books");
                swal(response.data.Message);
            }).catch(error => {
                if (error.response.status === 404) {
                    swal(error.response.data.Message);
                }
            });
    }
    /**
     * This method querries the server to obtain a single book
     * @returns {object} book
     */

    componentWillMount(){
        const token = localStorage.getItem("access_token");
        const bookId = this.props.params.id;
        const single_book_url = `${Base_url}/api/v2/books/${bookId}`

        const config = { headers: { 'Authorization': "Bearer " + token } };

        axios.get(single_book_url, config)
            .then(response => {
                console.log(response.data.book)
                this.setState({ oneBook: response.data.book })
            }).catch(error => {
                console.log(error.response);
                if (error.response.status === 401) {
                    swal(error.response.data.Message);
                }
            });
    }

    render() {
        const book = this.state.oneBook
        return (
            <div style={{ padding: '20px', color: '#337ab7' }}>
                <button className='btn btn-primary' onClick={browserHistory.goBack}>Back</button>
                <h2 style={{textAlign:'center'}}>Book Information</h2>
                <div id='allbooks' className="row">
                    <div id="singlebook">
                        <h3>{book.Title}</h3> <br /> <br /><br />
                        <b>Author:   </b> {book.Author}  <br /> <br />
                        <b>Year Published:  </b> {book.Publication}  <br /> <br />
                        <b>Book Available:  </b> {book.Status ? "Yes" : "No"} <br /><br />
                        <button id="borrow" className='btn btn-default' onClick={() => this.handleBorrow(book.ID)}>Borrow book</button>
                        <button id="return" className='btn btn-default' onClick={() => this.handleReturn(book.ID)}>Return book</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default OneBook;