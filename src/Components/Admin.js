import React, { Component } from "react";
import { Link, browserHistory } from "react-router";
import swal from "sweetalert";
import axios from "axios";
class Admin extends Component {
  constructor() {
    super();
    this.state = {
      allBooks: []
    };
  }
  componentDidMount() {
    const token = localStorage.getItem("access_token");

    const config = { headers: { "Authorization": "Bearer " + token } };


    axios.get("http://127.0.0.1:5000/api/v2/books", config)
      .then(response => {
        this.setState({ allBooks: response.data.books });
        console.log(this.state.allBooks);
      }).catch(error => {
        console.log(error);
      });
  }
  /**
   * Make a server request to delete a business
   * @param {int} bookId
   * @returns {string} success message
   */
  handleDelete(bookId) {
    const token = localStorage.getItem("access_token");
    const config = { headers: { "Authorization": "Bearer" + token } };
    const delete_book_url = `http://127.0.0.1:5000/api/v2/books/${bookId}`;
    swal({
      text: "Do you want to delete this book?",
      icon: "warning",
      buttons: "yes",
      dangerMode: "true",
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(delete_book_url, config)
          .then(response => {
            this.componentDidMount();
            swal(response.data.Message, {
              icon:"success",
            });
            browserHistory.push("/admin");
          })
          .catch(error => {
            if (error.response.status === 404){
              const message = error.response.data.Message;
              swal("Error!!", message, "error");
            }

          });

      }
    });
  }
  render() {
    return (
      <div>
        <h2 style={{ padding: "5px", color: "#337ab7" }}>Admin Dashboard</h2>
        <h2 style={{ padding: "5px", color: "#337ab7", textAlign: "center" }}>Available Books</h2>
        <div className="col=md-10">
          <table className="table">
            <thead>
              <tr>
                <th>Book</th>
                <th>Author</th>
                <th>Publication Year</th>
                <th>Edit Book</th>
                <th>Delete Book</th>
              </tr>
            </thead>
            <tbody>
              {this.state.allBooks.map(book =>
                <tr key={book.ID}>
                  <td><Link to={`/books/${book.ID}`}>{book.Title}></Link></td>
                  <td>{book.Author}</td>
                  <td>{book.Publication}</td>
                  <td><Link to={`/editbook/${book.ID}`}><button className="btn btn-default">Edit Book</button></Link></td>
                  <td><button className="btn btn-default" onClick={this.handleDelete.bind(this, book.ID)}>DeleteBook</button></td>

                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    );
  }
}
export default Admin;