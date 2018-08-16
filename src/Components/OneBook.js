import React, { Component } from 'react';
import axios from 'axios';

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
            }).catch()
    }
    render() {
        const book = this.state.oneBook
        return (
            <div style={{ padding: '20px',color:'#337ab7'}}>
            <h2>Book Information</h2>
            <div id='allbooks' className="row">
            <div id="singlebook">
            <h3>{book.Title}</h3> <br /> <br /><br />
            <b>Author:   </b> {book.Author}  <br /> <br />
            <b>Year Published:  </b> {book.Publication}  <br /> <br />
            <b>Book Available:  </b> {book.Status} <br/><br/>
            <button className='btn btn-default'>Borrow book</button>
            <button className='btn btn-default'>Return book</button>
            </div>
            </div>
            </div>
        )
    }
}
export default OneBook;