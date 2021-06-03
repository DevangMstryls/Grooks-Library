import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import BooksList from "./components/books/BooksList";
import AddUpdateBook from "./components/books/AddUpdateBook";
import BookDetail from "./components/books/BookDetail";


function App() {
    return (
        <div className="App">
            <header className="App-header">Grooks Library</header>
            <div>
                <Router>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/add">Add Book</Link>
                        </li>
                        <li>
                            <Link to="/edit/1">Edit Book</Link>
                        </li>
                        <li>
                            <Link to="/book/1">Book Detail</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route path="/add">
                            <AddUpdateBook/>
                        </Route>
                        <Route path="/edit/:id">
                            <AddUpdateBook/>
                        </Route>
                        <Route path="/book/:id">
                            <BookDetail/>
                        </Route>
                        <Route path="/">
                            <BooksList/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;
