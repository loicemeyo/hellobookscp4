import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import axios from 'axios';
import swal from 'sweetalert';

class OneBook extends Component {
    state = {
        oneBook: {}
    }
    handleBorrow(bookId) {
        const token = localStorage.getItem("access_token");
        const email = localStorage.getItem("email")
        const config = { headers: { "Authorization": "Bearer " + token } };
        const borrow_book_url = `http://127.0.0.1:5000/api/v2/users/books/${bookId}`
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
            });
    }
    handleReturn(bookId) {
        const token = localStorage.getItem("access_token");
        const email = localStorage.getItem("email")
        const config = { headers: { "Authorization": "Bearer " + token } };
        const borrow_book_url = `http://127.0.0.1:5000/api/v2/users/books/${bookId}`
        axios.put(borrow_book_url, { email: email }, config)
            .then(response => {
                console.log(response)
                browserHistory.push("/books");
                swal(response.data.Message);
            }).catch(error => {
                console.log(error.response)
                if (error.response.status === 401) {
                    swal(error.response.data.message);
                    browserHistory.push("/login")
                }
                else if (error.response.status === 404) {
                    swal(error.response.data.Message);
                }
            });
    }

    componentDidMount() {
        const token = localStorage.getItem('access_token');
        const bookId = this.props.params.id;
        const single_book_url = `http://127.0.0.1:5000/api/v2/books/${bookId}`

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
        // console.log(book)
        return (
            <div style={{ padding: '20px', color: '#337ab7' }}>
                <button className='btn btn-default'><Link to={`/books/${book.ID}`}>Go back</Link></button>
                <h2>Book Information</h2>
                <div id='allbooks' className="row">
                    <div id="singlebook">
                        <h3>{book.Title}</h3> <br /> <br /><br />
                        <b>Author:   </b> {book.Author}  <br /> <br />
                        <b>Year Published:  </b> {book.Publication}  <br /> <br />
                        <b>Book Available:  </b> {book.Status ? "Yes" : "No"} <br /><br />
                        <button className='btn btn-default' onClick={() => this.handleBorrow(book.ID)}>Borrow book</button>
                        <button className='btn btn-default' onClick={() => this.handleReturn(book.ID)}>Return book</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default OneBook;