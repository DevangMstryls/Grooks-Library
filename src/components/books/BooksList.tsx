import React from "react";
import {APP_STATE, BooksState} from "../../core/types/stateTypes";
import {connect} from "react-redux";
import BookCard from "./BookCard";

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

    const allBooks = books.data;


    return (
        <div>
            {
                Object.keys(allBooks).map((bookId) => {
                    const book = allBooks[bookId];
                    return (
                        <BookCard
                            key={bookId}
                            book={book}
                        />
                    );
                })
            }
        </div>
    );
};

export default connect(mapStateToProps)(BooksList);
