import {Book} from "./types";

export type BooksState = {
    data: {
        [bookId: string]: Book,
    },
};

export type APP_STATE = {
    books: BooksState,
};
