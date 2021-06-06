import {Book} from "./types";

export type BooksState = {
    data: Book[],
};

export type APP_STATE = {
    books: BooksState,
};
