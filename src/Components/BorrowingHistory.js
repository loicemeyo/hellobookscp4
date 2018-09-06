import React, { Component } from 'react';
import axios from 'axios';
import { Link, browserHistory} from 'react-router';
import swal from "sweetalert";
import { Base_url } from "./Navigation";

/**
 * This component displays the borrowing history of a user
 */
class BorrowHistory extends Component {
    state = {
        bookHistory: []
    }
/**
   * Make server request to display all the borrowing history of a user
   * Allow user to view this page only when they are logged in
   * @returns {object} bookHistory
   */
    componentDidMount() {
        const token = localStorage.getItem("access_token");
        if (!token) {
            return browserHistory.push("/login");
    }

        const config = { headers: { 'Authorization': "Bearer " + token } };


        axios.get(`${Base_url}/api/v2/users/books`, config)
            .then(response => {
                this.setState({ bookHistory: response.data.book_history })
                console.log(this.state.bookHistory)
            }).catch(error => {
                if (error.response.status === 401) {
                    swal(error.response.data.Message);
                }
            });
    }
    
    render() {
        console.log(this.state)
        return (

            <div style={{ padding: '20px', color:'#337ab7'}} id="history">
            <button className='btn btn-primary' onClick={browserHistory.goBack}>Back</button>
                <h2 style={{textAlign:'center'}}>Borrowing History</h2>
                <div id='allbooks' className="row">
                {this.state.bookHistory.map(book => 
                    
                    <div className="col-sm-2" id="onebook" key={book.ID}>
                    <br /> <br />
                    <b>ID:   </b> {book.ID}  <br /> <br />
                    <b> Returned:</b>{book.Returned ? "Yes" : "No"}<br /> <br />
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