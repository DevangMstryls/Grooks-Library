import {Action} from "../core/types/types";
import {INITIAL_STATE} from "../store/defaultStore";
import {BooksState} from "../core/types/stateTypes";
import {ACTION_TYPES} from "../core/constants";


export function booksReducer(state = INITIAL_STATE.books, action: Action): BooksState {
    const {type, payload} = action;

    switch (type) {
        case ACTION_TYPES.ADD_BOOK:
            return state;
    }

    return state;
}

