import React, { Component } from 'react';
import AddBook from './AddBook';
import axios from 'axios';
import {Link} from 'react-router';
class AllBooks extends Component {
    state = {
        allBooks: []
    }



    componentDidMount() {
        const token = localStorage.getItem('access_token');

        const config = { headers: { 'Authorization': "Bearer " + token } };


        axios.get("http://127.0.0.1:5000/api/v2/books", config)
            .then(response => {
                this.setState({ allBooks: response.data.books })
                console.log(this.state.allBooks)
            }).catch()
    }
    render() {
        return (  
            <div style={{ padding: '20px',color:'#337ab7'}}>
                <h2>All Books</h2>
                <div id='allbooks' className="row">
                {this.state.allBooks.map(book => 
                    <div className="col-sm-2" id="onebook" key={book.id}>
                    <h3>{book.Title}</h3> <br /> <br /><br />
                    <b>Author:   </b> {book.Author}  <br /> <br />
                    <b>publish:  </b> {book.Publication}  <br /> <br />
                    <Link className="btn btn-default" to={`/books/${book.ID}`}>See</Link> <br /><br />
                    </div>
                )}    
                </div>
                
                </div>
    
        )};
    }
export default AllBooks;