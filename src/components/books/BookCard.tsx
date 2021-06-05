import React from "react";
import {useHistory} from "react-router-dom";
import {Book} from "../../core/types/types";
import "./../../styles/components/BookCard.scss";


type Props = {
    book: Book,
} & any

const BookCard = (props: Props) => {

    const routerHistory = useHistory();

    const {
        book,
        // dispatch,
    } = props;

    // TODO: remove these
    book['cover'] = 'https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL.jpg';
    book['price'] = 300;

    const handleOnClick = (e: any) => {
        if (e.target.nodeName !== 'A')
            routerHistory.push(`/book/${book.id}`);
    };

    return (
        <div className="book-card" onClick={handleOnClick}>
            <div>

            </div>
            <div className="flex-row flex-align-flex-start">
                <div className="book-cover flex-center pos-rel">
                    <img className="v-al-mdl" src={book.cover} alt={book.name}/>
                </div>
                <div className="flex-1 flex-column flex-justify-space-between">
                    <div>
                        <p className="p2 m-0 m-b-s">{book.name}</p>
                        <p className="p4 txt-clr-gray-1">{book.author}</p>
                    </div>
                    <div className="flex-row flex-justify-space-between flex-align-items-center">
                        <p className="txt-clr-gray-1 p2 m-0">₹&nbsp;{book.price}</p>
                        <p className={`p4 m-0 ${book.availableStock < 10 ? 'txt-clr-error': 'txt-clr-gray-1'}`}>In Stock:&nbsp;{book.availableStock}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
