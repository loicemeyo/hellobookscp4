import React, { Component } from 'react';
import AddBook from './AddBook';
import axios from 'axios';
import {Link} from 'react-router';
class BorrowHistory extends Component {
    state = {
        bookHistory: []
    }



    componentDidMount() {
        const token = localStorage.getItem('access_token');

        const config = { headers: { 'Authorization': "Bearer " + token } };


        axios.get("http://127.0.0.1:5000/api/v2/users/books", config)
            .then(response => {
                this.setState({ bookHistory: response.data.book_history })
                console.log(this.state.bookHistory)
            }).catch()
    }
    render() {
        return (  
            <div style={{ padding: '20px',color:'#337ab7'}}>
                <h2>Borrowing History</h2>
                <div id='allbooks' className="row">
                {this.state.bookHistory.map(book => 
                    <div className="col-sm-2" id="onebook" key={book.ID}>
                    <h3>{book.Title}</h3> <br /> <br /><br />
                    <b>ID:   </b> {book.ID}  <br /> <br />{book.Returned ? "Yes" : "No"}<br /> <br />
                    <b>Borrowed:   </b> {book.Borrowed}  <br /> <br />
                    <b>Due:   </b> {book.Due}  <br /> <br />
                    <b>Person:  </b> {book.Usermail}  <br /> <br />
                    <Link className="btn btn-default" to={`/books/${book.ID}`}>See</Link> <br /><br />
                    </div>
                )}    
                </div>
                
                </div>
    
        )};
    }
export default BorrowHistory;