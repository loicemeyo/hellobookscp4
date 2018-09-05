[![Build Status](https://travis-ci.org/loicemeyo/hellobookscp4.svg?branch=develop)](https://travis-ci.org/loicemeyo/hellobookscp4)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/6b86bb24f160408b952fb05dc464275f)](https://www.codacy.com/app/loicemeyo/hellobookscp4?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=loicemeyo/hellobookscp4&amp;utm_campaign=Badge_Grade)
[![Coverage Status](https://coveralls.io/repos/github/loicemeyo/hellobookscp4/badge.svg?branch=develop)](https://coveralls.io/github/loicemeyo/hellobookscp4?branch=develop)

<h3>Hello Books</h3>

Hello-Books is a simple application that helps manage a library and its processes like stocking, tracking and renting books. A normal user (non-admin) can register to be a user, login, view all books available, borrow a book and logout. The admin, in addition to what the normal user can do is also able to create a new book, edit or delete an existing book.The admin role can also upgrade a normal user to admin status and view all the current users.<br><br>

Link to Heroku application:https://boiling-shelf-58690.herokuapp.com/ <br><br>
Link to HelloBooks API documentation: https://hellobooks12.docs.apiary.io/#<br> 

<h4>Technology used</h4>
<ul>
  <li>React</li>
  <li>Bootstrap</li>
  <li>Python 3.6.0 and flask framework for the backend api</li>
 </ul>

<h4>Installation and Setup</h4>

Clone or download the api from github. To clone:<br>

```sh
git clone https://github.com/loicemeyo/hellobookscp4.git
```
Move into the Hellobooks directory <br>
 
 ```sh
 cd Hellobooks
 ```

<h4>Running the api</h4>

- To run the application, first add node_modules to your root application by running the following command:<br>
```sh
npm install
```
<br>

The application is set. Start the application by the command:<br>
```sh
npm start
```
<br>

- Once running, a browser automatically opens the application. <br>

<h4>Testing</h4>
Hello-Books application makes use of jest, enzyme and sinon to test the application. To run tests, cd into the application and type: <br>
```sh
npm run test
```

<h4>Authors</h4>

* **Loice Meyo**

<h4>First publication</h4>

* **2018**


