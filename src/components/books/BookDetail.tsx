import React from "react";
import {APP_STATE, BooksState} from "../../core/types/stateTypes";
import {connect} from "react-redux";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import "./../../styles/components/BookDetail.scss";


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
        <div className="m-x-auto book-detail">
            <p className="p7">
                <Link to={'/'}>&lt; Back</Link>
            </p>

            <div className="book-details-head">
                <div>
                    <div className="book-cover-wrpr pos-rel">
                        <img
                            className="v-al-mdl"
                            src={'https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL.jpg'}/>
                    </div>
                </div>
                <div className="book-main-details flex-column flex-justify-space-between">
                    <div>

                        <h1 className={'h4 m-0'}>{book.name}</h1>
                        <p className="p3">
                            <span className="txt-clr-gray-1">by&nbsp;</span>
                            <span>{book.author}</span>
                        </p>
                        <p className="p3">
                            <span className="txt-clr-gray-1">Published by:&nbsp;</span>
                            <span>{book.publisher}</span>
                        </p>
                        <p className="p3">
                            <span className="txt-clr-gray-1">Available Stock:&nbsp;</span>
                            <span>{book.availableStock}</span>
                        </p>
                    </div>
                    <div>

                        <p className="p6 m-0">
                            <span className="txt-clr-gray-1">Added on:&nbsp;</span>
                            {/* TODO: parse the date */}
                            <span>{book.addedOn}</span>
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <p className="p3">{book.description}</p>
            </div>
        </div>
    );
};

export default connect(mapStateToProps)(BookDetail);
