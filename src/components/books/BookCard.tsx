import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {Book} from "../../core/types/types";
import "./../../styles/components/BookCard.scss";
import {ChevronDownIcon, ChevronUpIcon, DeleteIcon, EditIcon} from "../icons";
import {useDispatch} from "react-redux";
import {ACTION_TYPES} from "../../core/constants";


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
    book['cover'] = 'https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL.jpg';
    book['price'] = 300;

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
        <div className="book-card" onClick={handleOnClick}>
            <div className="pos-rel">
                <button className="btn-icon menu-open-btn pos-abs" onClick={handleDropdownClick}>
                    {showMenu ? <ChevronUpIcon/> : <ChevronDownIcon/>}
                </button>

                {
                    showMenu &&
                    <div className="menu pos-abs">
                        <div onClick={handleEditClick} className="menu-item flex-row flex-align-items-center">
                            <EditIcon/>
                            <span>&nbsp;Edit</span>
                        </div>
                        <div
                            onClick={handleDeleteClick}
                            className="menu-item flex-row flex-align-items-center delete-item"
                        >
                            <DeleteIcon/>
                            <span>&nbsp;Delete</span>
                        </div>
                    </div>
                }
            </div>

            <div className="flex-row flex-align-flex-start h-100pc">
                <div className="book-cover pos-rel">
                    <img className="v-al-mdl" src={book.cover} alt={book.name}/>
                </div>
                <div className="flex-1 flex-column flex-justify-space-between">
                    <div>
                        <p className="p2 m-0 m-b-s">{book.name}</p>
                        <p className="p4 txt-clr-gray-1">{book.author}</p>
                    </div>
                    <div className="flex-row flex-justify-space-between flex-align-items-center">
                        <p className="txt-clr-gray-1 p2 m-0">₹&nbsp;{book.price}</p>
                        <p className={`p4 m-0 ${book.availableStock < 10 ? 'txt-clr-error' : 'txt-clr-gray-1'}`}>In
                            Stock:&nbsp;{book.availableStock}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
