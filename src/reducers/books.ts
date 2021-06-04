import {Action} from "../core/types/types";
import {INITIAL_STATE} from "../store/defaultStore";
import {BooksState} from "../core/types/stateTypes";
import {ACTION_TYPES} from "../core/constants";


export function booksReducer(state = INITIAL_STATE.books, action: Action): BooksState {
    const {type, payload} = action;

    switch (type) {
        case ACTION_TYPES.ADD_BOOK: {
            return {
                ...state,
                data: {
                    ...state.data,
                    [payload.id]: payload,
                },
            };
        }

        case ACTION_TYPES.UPDATE_BOOK: {
            return {
                ...state,
                data: {
                    ...state.data,
                    [payload.id]: payload,
                },
            };
        }

        case ACTION_TYPES.DELETE_BOOK: {
            const newState = {...state};
            delete newState.data[payload.id];
            return newState;
        }
    }

    return state;
}

