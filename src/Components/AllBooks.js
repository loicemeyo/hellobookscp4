import React, { Component } from "react";
import axios from "axios";
import { browserHistory, Link } from "react-router";
import JwPagination from "jw-react-pagination";
import { Base_url } from "./Navigation";

/**
 * This component renders all books in the library
 * @returns {object} allBooks
 */

class AllBooks extends Component {
  constructor() {
    super();
    this.onChangePage = this.onChangePage.bind(this);
    this.state = {
      pageOfItems: [],
      allBooks: []
    };
  }
  /**
   * Update the local state with a new page of Items
   * @param {object} pageOfItems
   * @returns {object} allBooks
   */
  onChangePage(pageOfItems) {
    this.setState({ pageOfItems });
  }


  componentDidMount() {
    const token = localStorage.getItem("access_token");

    const config = { headers: { "Authorization": "Bearer " + token } };


    axios.get(`${Base_url}/api/v2/books`, config)
      .then(response => {
        this.setState({ allBooks: response.data.books });
      }).catch();
  }
  render() {
    console.log("vitabu", this.state.allBooks)
    return (
      <div style={{ padding: "20px", color: "#337ab7" }}id="history">
        <h2 style={{textAlign:"center"}}>All Books</h2>
        <button id="back" className="btn btn-primary" onClick={browserHistory.goback}>Back</button>
        <div id='allbooks' className="row">
          {this.state.allBooks.length > 0 &&
            this.state.pageOfItems.map(book =>
              <div className="col-sm-2" id="onebook" key={book.id}>
                <h3>{book.Title}</h3> <br /> <br /><br />
                <b>Author:   </b> {book.Author}  <br /> <br />
                <b>publish:  </b> {book.Publication}  <br /> <br />
                <Link className="btn btn-default" to={`/books/${book.ID}`}>See</Link> <br /><br />
              </div>
            )}
        </div>
        <br/>
        <div style={{float:"right", textDecoration:"none"}}>
          <JwPagination items = {this.state.allBooks} pageSize={6} onChangePage={this.onChangePage}/>
        </div>

      </div>

    );
  }
}
export default AllBooks;