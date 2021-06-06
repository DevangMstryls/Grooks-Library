import React, {Dispatch, useEffect, useRef, useState} from "react";
import {APP_STATE, BooksState} from "../../core/types/stateTypes";
import {connect} from "react-redux";
import BookCard from "./BookCard";
import {Book} from "../../core/types/types";
import "./../../styles/components/BooksList.scss";
import {AddIcon, BookIcon} from "../icons";
import {useHistory} from "react-router";
import {by} from "../../core/utils";


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
    } = props;

    const allBooks: Book[] = books.data;
    const routerHistory = useHistory();

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBooks, setFilteredBooks]: [Book[], Dispatch<any>] = useState([]);

    const timeoutRef: any = useRef();

    const booksAdded = !!allBooks.length;

    const filtersApplied = (): boolean => {
        return searchTerm.trim() !== '';
    };

    const doSearch = (): void => {
        if (searchTerm.trim() === '') return;

        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            filterBooks();
        }, 1000);
    };

    const filterBooks = (): void => {
        const filtered: Book[] = allBooks.filter((book) => {
            const searchable = `${book.name} ${book.description} ${book.author} ${book.publisher}`;
            return searchable.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFilteredBooks(filtered);
    };

    const getBooksList = () => {
        const feed = filtersApplied() ? filteredBooks : allBooks;
        return feed.sort(by('addedOn'));
    };

    useEffect(() => {
        filterBooks();
    }, [searchTerm]);

    return (
        <div className={`m-x-auto books-list ${booksAdded ? '' : 'flex-justify-center'}`}>

            {
                !booksAdded
                    ?
                    <div className="txt-al-c">
                        <BookIcon width={100} height={100} color={'#bab9b9'}/>
                        <p className="p2 m-t-s txt-clr-gray-1 mxw-500 m-x-auto">There are no books in your library. Add
                            books by clicking on the Add (+) button
                            below</p>
                    </div>
                    :
                    <>
                        <h1 className="h2">{filtersApplied() ? `Showing results for "${searchTerm}"` : 'All Books'}</h1>

                        {/* search bar */}
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

                        {/* books feed */}
                        <div className="books-feed">
                            {
                                getBooksList().map((book: Book) => {
                                    return (
                                        <BookCard key={book.id} book={book}/>
                                    );
                                })
                            }
                        </div>
                    </>
            }

            {/* no books found */}
            {
                (filtersApplied() && !filteredBooks.length) &&
                <div className="txt-al-c">
                    <BookIcon width={100} height={100} color={'#bab9b9'}/>
                    <p className="p2 m-t-s txt-clr-gray-1 mxw-500 m-x-auto">No book found
                        for &quot;{searchTerm}&quot;</p>
                </div>
            }

            {/* add button */}
            <button
                className="btn-icon add-book-btn trans"
                onClick={() => {
                    routerHistory.push('/add');
                }}
            >
                <AddIcon/>
            </button>
        </div>
    );
};

export default connect(mapStateToProps)(BooksList);
