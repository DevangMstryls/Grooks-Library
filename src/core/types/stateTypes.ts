import {Book} from "./types";

export type BooksState = {
    data: Book[],
    // app: {},
    // can add other states about books
};

export type APP_STATE = {
    books: BooksState,
};
