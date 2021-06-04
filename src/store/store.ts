import {createStore, Store} from "redux";
import reducers from "../reducers/all";
import {loadState, saveState} from "./localStorage";

const initialState = loadState();
const store: Store = createStore(
    reducers,
    initialState,
    // ref: https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => {
    console.log('store changed');
    saveState(store.getState());
});

export default store;
