import React, {useState} from "react";
import {APP_STATE, BooksState} from "../../core/types/stateTypes";
import {connect, useDispatch} from "react-redux";
import {useParams} from "react-router";
import {useHistory} from "react-router-dom";
import "./../../styles/components/BookDetail.scss";
import {ChevronDownIcon, ChevronUpIcon, DeleteIcon, EditIcon} from "../icons";
import {ACTION_TYPES, BOOK_COVER_PLACEHOLDER} from "../../core/constants";
import BackLink from "../BackLink";
import {formatInIndianNumeric, getFormattedDate} from "../../core/utils";
import {BookNotFoundMsg} from "./BookNotFoundMsg";


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
    const routerHistory = useHistory();
    const [showMenu, setShowMenu] = useState(false);
    const dispatch = useDispatch();

    const {
        books,
        // dispatch,
    } = props;

    const book = books.data[params.id] || null;

    const handleDropdownClick = (): void => {
        setShowMenu(!showMenu);
    };

    const handleEditClick = (): void => {
        routerHistory.push(`/edit/${book.id}`);
    };

    const handleDeleteClick = (): void => {
        if (confirm("Are you sure you want to delete this book?")) {
            dispatch({
                type: ACTION_TYPES.DELETE_BOOK,
                payload: {
                    id: book.id,
                },
            });
        }
    };

    if (!book) return <BookNotFoundMsg/>;

    return (
        <div className="m-x-auto book-detail">

            <BackLink
                onClick={() => {
                    if (routerHistory.length > 1)
                        routerHistory.goBack();
                    else {
                        routerHistory.push('/');
                    }
                }}
            />

            <div className="book-details-head pos-rel">
                <button className="btn-icon menu-open-btn pos-abs" onClick={handleDropdownClick}>
                    {showMenu ? <ChevronUpIcon/> : <ChevronDownIcon/>}
                </button>

                {
                    showMenu &&
                    <div className="menu pos-abs">
                        <div onClick={handleEditClick} className="menu-item flex-row flex-align-items-center cur-p">
                            <EditIcon/>
                            <span>&nbsp;Edit</span>
                        </div>
                        <div
                            onClick={handleDeleteClick}
                            className="menu-item flex-row flex-align-items-center delete-item cur-p"
                        >
                            <DeleteIcon/>
                            <span>&nbsp;Delete</span>
                        </div>
                    </div>
                }

                <div className="book-cover-wrpr flex-row flex-justify-center">
                    <img className="v-al-mdl" src={book?.cover || BOOK_COVER_PLACEHOLDER}/>
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
                            <span>{formatInIndianNumeric(book.availableStock)}</span>
                        </p>
                        <p className="p3">
                            <span className="txt-clr-gray-1">Price:&nbsp;</span>
                            <span>₹{formatInIndianNumeric(book.price)}</span>
                        </p>
                    </div>
                    <div>

                        <p className="p6 m-0">
                            <span className="txt-clr-gray-1">Added on:&nbsp;</span>
                            <span>{getFormattedDate(book.addedOn)}</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* other details */}
            <div>
                <p className="p3 txt-clr-gray-1">About the Book</p>
                <p className="p4">{book.description}</p>
            </div>
        </div>
    );
};

export default connect(mapStateToProps)(BookDetail);
