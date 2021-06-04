import {LOCALSTORAGE_KEYS} from "../core/constants";
import {INITIAL_STATE} from "./defaultStore";

export const loadState = () => {
    try {
        const savedState = localStorage.getItem(LOCALSTORAGE_KEYS.books);
        if (!savedState)
            return INITIAL_STATE;
        return JSON.parse(savedState);
    }
    catch (e) {
        return INITIAL_STATE;
    }
};

export const saveState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(LOCALSTORAGE_KEYS.books, serializedState);
    }
    catch (e) {
        // ignore errors
        console.warn(e);
    }
};
