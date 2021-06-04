import React, {useEffect} from "react";
import {connect} from "react-redux";
import {APP_STATE, BooksState} from "../../core/types/stateTypes";
import {useLocation, useParams} from "react-router";


const mapStateToProps = (state: APP_STATE) => {
    return {
        books: state.books,
    };
};

type AddUpdateBookProps = {
    books: BooksState,
} & any

const AddUpdateBook = (props: AddUpdateBookProps) => {

    const params: any = useParams();
    const location = useLocation();

    const {
        books,
        // dispatch,
    } = props;

    const book = books.data[params.id] || null;

    let mode = '';
    if (location.pathname.includes('/add'))
        mode = 'add';
    else if (location.pathname.includes('/edit'))
        mode = 'edit';

    // TODO: add form with default values

    // EFFECTS

    useEffect(() => {
        if (mode === 'edit' && !book) {
            // TODO: fetch book
        }
    }, []);

    return (
        <div>
            <h3>Book Name</h3>
            <p>Book Description</p>
            <p>Author Name</p>
            <p>Added on</p>
        </div>
    );
};

export default connect(mapStateToProps)(AddUpdateBook);
