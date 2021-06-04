import {Book} from "../core/types/types";
import {LOCALSTORAGE_KEYS} from "../core/constants";

export class BooksService {
    static getAllBooks(): Promise<Book[]> {
        return new Promise((resolve, reject) => {
            try {
                const books: Book[] = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEYS.books) ?? '');
                if (books)
                    resolve(books);
                else
                    resolve([]);
            }
            catch (e) {
                reject(e);
            }
        });
    }

    static getBook(bookId: string): Promise<Book | null> {
        return new Promise((resolve, reject) => {
            try {
                const books: Book[] = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEYS.books) ?? '');
                const book = books.find((b) => b.id === bookId);
                if (book)
                    resolve(book);
                else
                    resolve(null);
            }
            catch (e) {
                reject(e);
            }
        });
    }

    static addBook(book: Book): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                localStorage.setItem(LOCALSTORAGE_KEYS.books, JSON.stringify(book));
                resolve(true);
            }
            catch (e) {
                reject(e);
            }
        });
    }

    static updateBook(book: Book): Promise<Book> {
        return new Promise((resolve, reject) => {
            try {
                const books: Book[] = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEYS.books) ?? '');
                const index = books.findIndex((b) => b.id === book.id);
                if (index !== -1) {
                    books[index] = {
                        ...books[index],
                        ...book,
                    };
                    localStorage.setItem(LOCALSTORAGE_KEYS.books, JSON.stringify(books));
                    resolve(books[index]);
                }
                else
                    reject('Book not found');
            }
            catch (e) {
                reject(e);
            }
        });
    }

    static deleteBook(bookId: string) {
    }
}
