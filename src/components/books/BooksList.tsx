import React, {useEffect, useRef, useState} from "react";
import {APP_STATE, BooksState} from "../../core/types/stateTypes";
import {connect} from "react-redux";
import BookCard from "./BookCard";
import {Book} from "../../core/types/types";
import "./../../styles/components/BooksList.scss";


const mapStateToProps = (state: APP_STATE) => {
    return {
        books: state.books,
    };
};

type Props = {
    books: BooksState,
} & any


const BooksList = (props: Props) => {

    const {
        books,
        // dispatch,
    } = props;

    const allBooks: { [bookId: string]: Book } = books.data;

    const [searchTerm, setSearchTerm] = useState('');
    const [waitForSearch, setWaitForSearch] = useState(false);
    const [filteredBooks, setFilteredBooks] = useState({});

    const timeoutRef: any = useRef();

    const filtersApplied = (): boolean => {
        return searchTerm.trim() !== '';
    };

    const doSearch = (): void => {
        if (searchTerm.trim() === '') {
            return;
        }

        setWaitForSearch(true);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            filterBooks();
            setWaitForSearch(false);
        }, 1000);
    };

    const filterBooks = (): void => {
        const filtered: { [bookId: string]: Book } = {};
        Object.values(allBooks).forEach((book) => {
            const searchable = `${book.name} ${book.description} ${book.author} ${book.publisher}`;
            if (searchable.toLowerCase().includes(searchTerm.toLowerCase())) {
                filtered[book.id] = book;
            }
        });
        setFilteredBooks(filtered);
    };

    useEffect(() => {
        filterBooks();
    }, [searchTerm]);

    return (
        <div className="m-x-auto books-list">

            <h1 className="h2">{filtersApplied() ? `Showing results for "${searchTerm}"` : 'All Books'}</h1>

            <div className="search-bar">
                <input
                    type="search"
                    placeholder={'Search for books by name, description, author, publisher'}
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                    onKeyUp={(e) => {
                        if (e.key === 'Enter') {
                            doSearch();
                        }
                    }}
                />
                {/*<button onClick={() => doSearch()}>{waitForSearch ? 'Searching...' : 'Search'}</button>*/}
            </div>

            <div className="books-feed">
                {
                    Object.keys(filtersApplied() ? filteredBooks : allBooks).map((bookId) => {
                        const book = allBooks[bookId];
                        return (
                            <div key={bookId} className="book-card-wrpr">
                                <BookCard book={book}/>
                            </div>
                        );
                    })
                }
            </div>

            {
                (filtersApplied() && !Object.keys(filteredBooks).length) &&
                <p>No book found for &quot;{searchTerm}&quot;</p>
            }
        </div>
    );
};

export default connect(mapStateToProps)(BooksList);
