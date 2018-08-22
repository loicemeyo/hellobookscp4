import React, { Component } from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import swal from 'sweetalert';

class OneBook extends Component {
    state = {
        oneBook: {}
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
                if(error.response.status === 401){
                    swal (error.response.data.Message);
                }
    });
    }
    render() {
        const book = this.state.oneBook
        console.log(book)
        return (
        <div style={{ padding: '20px',color:'#337ab7'}}>
        <button className='btn btn-default'><Link to={`/books/${book.ID}`}>Go back</Link></button>
            <h2>Book Information</h2>
            <div id='allbooks' className="row">
            <div id="singlebook">
            <h3>{book.Title}</h3> <br /> <br /><br />
            <b>Author:   </b> {book.Author}  <br /> <br />
            <b>Year Published:  </b> {book.Publication}  <br /> <br />
            <b>Book Available:  </b> {book.Status ? "Yes" : "No"} <br/><br/>
            <button className='btn btn-default'>Borrow book</button>
            </div>
            </div>
            </div>
        )
    }
}
export default OneBook;