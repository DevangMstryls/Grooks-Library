import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import BooksList from "./components/books/BooksList";
import AddUpdateBook from "./components/books/AddUpdateBook";
import BookDetail from "./components/books/BookDetail";
import './App.scss';
import Header from "./components/Header";


function App() {
    return (
        <div className="App">
            <Header/>
            <div className="page-layout">
                <Router>
                    <Link to="/add">Add Book</Link>

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
