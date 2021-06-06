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
                data: [...state.data, payload],
            };
        }

        case ACTION_TYPES.UPDATE_BOOK: {
            const newData = [...state.data];
            const i = newData.findIndex((b) => b.id === payload.id);
            if (i !== -1) {
                newData[i] = {
                    ...newData[i],
                    ...payload,
                };
            }

            return {
                ...state,
                data: newData,
            };
        }

        case ACTION_TYPES.DELETE_BOOK: {
            const newData = [...state.data];
            const i = newData.findIndex((b) => b.id === payload.id);
            if (i !== -1)
                newData.splice(i, 1);

            return {
                ...state,
                data: newData,
            };
        }
    }

    return state;
}

