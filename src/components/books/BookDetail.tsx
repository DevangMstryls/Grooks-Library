import React from "react";
import {APP_STATE, BooksState} from "../../core/types/stateTypes";
import {connect} from "react-redux";
import {useParams} from "react-router";
import {Link} from "react-router-dom";


const mapStateToProps = (state: APP_STATE) => {
    return {
        books: state.books,
    };
};

type Props = {
    books: BooksState,
} & any

const BookDetail = (props: Props) => {

    const params: any = useParams();

    const {
        books,
        // dispatch,
    } = props;

    const book = books.data[params.id] || null;

    if (!book) {
        return (
            <p>Book not found</p>
        );
    }

    return (
        <div>
            <Link to={'/'}>&lt; Back</Link>
            <h1 className={'p1'}>{book.name}</h1>
            <p>{book.description}</p>
            <p>{book.author}</p>
            <p>{book.publisher}</p>
            <p>{book.addedOn}</p>
            <p>{book.availableStock}</p>
        </div>
    );
};

export default connect(mapStateToProps)(BookDetail);
