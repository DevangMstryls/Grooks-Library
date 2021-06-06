import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BooksList from "./components/books/BooksList";
import AddUpdateBook from "./components/books/AddUpdateBook";
import BookDetail from "./components/books/BookDetail";
import './App.scss';
import Header from "./components/Header";


function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <div className="page-layout">

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
                </div>
            </Router>
        </div>
    );
}

export default App;
