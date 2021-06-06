export const ACTION_TYPES = {
    ADD_BOOK: 'ADD_BOOK',
    UPDATE_BOOK: 'UPDATE_BOOK',
    DELETE_BOOK: 'DELETE_BOOK',
    SET_BOOKS: 'SET_BOOKS',
};

export const MSGS: {[field: string]: any} = {
    name: {
        required: 'Required',
        minLength: 'Min Length is 2',
    },
    description: {
        required: 'Required',
    },
    author: {
        required: 'Required',
    },
    publisher: {
        required: 'Required',
    },
    availableStock: {
        required: 'Required',
        min: 'Minimum available stock should be more than or equal 0',
    },
    price: {
        required: 'Required',
        min: 'Minimum price should be more than or equal 0',
    },
    genre: {
        required: 'Required',
    },
};

export const LOCALSTORAGE_KEYS = {
    books: 'books',
};

export const BOOK_COVER_PLACEHOLDER = './placeholder-img.png';
