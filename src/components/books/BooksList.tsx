import React, {useEffect, useRef, useState} from "react";
import {APP_STATE, BooksState} from "../../core/types/stateTypes";
import {connect} from "react-redux";
import BookCard from "./BookCard";
import {Book} from "../../core/types/types";

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
    const [filtersApplied, setFiltersApplied] = useState(false);
    const [filteredBooks, setFilteredBooks] = useState({});

    const timeoutRef: any = useRef();

    const doSearch = () => {
        if (searchTerm.trim() === '') {
            setFiltersApplied(false);
            return;
        }

        setWaitForSearch(true);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            filterBooks();
            setFiltersApplied(true);
            setWaitForSearch(false);
        }, 1000);
    };

    const filterBooks = () => {
        const filtered: { [bookId: string]: Book } = {};
        Object.values(allBooks).forEach((book) => {
            const searchable = `${book.name} ${book.description} ${book.author} ${book.publisher}`;
            if (searchable.toLowerCase().includes(searchTerm.toLowerCase())) {
                filtered[book.id] = book;
            }
        });
        setFilteredBooks(filtered);
        setFiltersApplied(true);
    };

    useEffect(() => {
        filterBooks();
    }, [searchTerm]);

    return (
        <div>
            <div>
                <input
                    type="search"
                    placeholder={'Search for books by name, description, author, publisher'}
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        if (e.target.value.trim() === '') {
                            setFiltersApplied(false);
                        }
                    }}
                    onKeyUp={(e) => {
                        if (e.key === 'Enter') {
                            doSearch();
                        }
                    }}
                />
                <button onClick={() => doSearch()}>{waitForSearch ? 'Searching...' : 'Search'}</button>
            </div>

            {
                Object.keys(filtersApplied ? filteredBooks : allBooks).map((bookId) => {
                    const book = allBooks[bookId];
                    return (
                        <BookCard
                            key={bookId}
                            book={book}
                        />
                    );
                })
            }

            {
                (filtersApplied && !Object.keys(filteredBooks).length) &&
                <p>No book found for &quot;{searchTerm}&quot;</p>
            }
        </div>
    );
};

export default connect(mapStateToProps)(BooksList);
