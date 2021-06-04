import React from 'react';
import './App.scss';
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
