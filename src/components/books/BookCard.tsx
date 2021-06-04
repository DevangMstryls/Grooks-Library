import React from "react";
import {Link} from "react-router-dom";
import {Book} from "../../core/types/types";


type Props = {
    book: Book,
} & any

const BookCard = (props: Props) => {

    const {
        book,
        // dispatch,
    } = props;

    return (
        <div>
            <h1 className={'p1'}>{book.name}</h1>
            <p>{book.description?.substring(0, 30)}...</p>
            <p>{book.author}</p>
            <p>{book.publisher}</p>
            <p>{book.addedOn}</p>
            <p>{book.availableStock}</p>
            <Link to={`/book/${book.id}`}>View More details</Link>
            <br/>
            <Link to={`/edit/${book.id}`}>Edit</Link>
        </div>
    );
};

export default BookCard;
