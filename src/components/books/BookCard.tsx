import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {Book} from "../../core/types/types";
import "./../../styles/components/BookCard.scss";
import {ChevronDownIcon, ChevronUpIcon, DeleteIcon, EditIcon} from "../icons";
import {useDispatch} from "react-redux";
import {ACTION_TYPES, BOOK_COVER_PLACEHOLDER} from "../../core/constants";
import {formatInIndianNumeric, nFormatter} from "../../core/utils";


type Props = {
    book: Book,
} & any

const BookCard = (props: Props) => {

    const routerHistory = useHistory();
    const [showMenu, setShowMenu] = useState(false);
    const dispatch = useDispatch();

    const {
        book,
    } = props;

    // TODO: remove these
    book['price'] = 3020;

    const handleOnClick = (e: any): void => {
        if (!e.target.closest('.menu-open-btn') && !e.target.closest('.menu'))
            routerHistory.push(`/book/${book.id}`);
    };

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

    return (
        <div className="book-card trans" onClick={handleOnClick}>
            <div className="pos-rel">
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
            </div>

            <div className="flex-row flex-align-flex-start h-100pc">
                <div className="book-cover pos-rel">
                    <img className="v-al-mdl" src={book.cover || BOOK_COVER_PLACEHOLDER} alt={book.name}/>
                </div>
                <div className="flex-1 flex-column flex-justify-space-between">
                    <div className="m-b-s">
                        <p className="p4 txt-clr-black m-0 book-name">{book.name}</p>
                        <p className="p5 txt-clr-gray-1 m-0">by {book.author}</p>
                    </div>
                    <div className="m-t-s">
                        <p className={`p5 m-0 ${book.availableStock < 10 ? 'txt-clr-error' : 'txt-clr-gray-1'}`}>In
                            Stock:&nbsp;{nFormatter(book.availableStock, 2)}</p>
                        <p className="txt-clr-gray-1 h6 m-0">₹{formatInIndianNumeric(book.price)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
