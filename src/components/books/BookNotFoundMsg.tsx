import {BookIcon} from "../icons";
import {Link} from "react-router-dom";
import React from "react";

export const BookNotFoundMsg = () => {
    return (
        <div className="txt-al-c flex-column flex-center flex-1">
            <BookIcon width={100} height={100} color={'#bab9b9'}/>
            <p className="p2 m-t-s m-b-s txt-clr-gray-1 mxw-500 m-x-auto">
                Oops! We couldn&apos;t find that book.
            </p>
            <Link to={'/'}>View all Books</Link>
        </div>
    );
};
