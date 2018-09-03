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
    if (!token) {
      return browserHistory.push("/login");
    }

    const config = { headers: { "Authorization": "Bearer " + token } };


    axios.get("http://127.0.0.1:5000/api/v2/books", config)
      .then(response => {
        this.setState({ allBooks: response.data.books });
      }).catch(error => {
        if (error.response !== undefined) {
          if (error.response.status === 401) {
            const message = error.response.data.Error;
            swal("message!!", message, "error");
            localStorage.removeItem("access_token");
            browserHistory.push("/login");
          }
        }

      });
  }
  /**
   * Make a server request to delete a book
   * @param {int} bookId
   * @returns {string} success message
   */
  handleDelete(bookId) {
    const token = localStorage.getItem("access_token");
    const config = { headers: { "Authorization": "Bearer " + token } };
    const delete_book_url = `http://127.0.0.1:5000/api/v2/books/${bookId}`;
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this book!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(delete_book_url, config)
          .then(response => {
            swal("Success", response.data.message, "success");
            browserHistory.push("/admin");
          })
          .catch(error => {
            if (error.response.status === 404) {
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
        <div>
          <Link to={"/addbook"}><button className="btn btn-primary" id="button">Add Book</button></Link>
          <Link to={"/upgradeuser"}><button className="btn btn-primary" id="button">Change user status</button></Link>
          <Link to={"/users"}><button className="btn btn-primary" id="button">View users</button></Link>
        </div>
        <br />
        <h2 style={{ padding: "5px", color: "#337ab7", textAlign: "center" }}>Available Books</h2>
        <div className="col=md-10" >
          <table className="table" id="table">
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