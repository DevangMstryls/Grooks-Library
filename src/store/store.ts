import {createStore, Store} from "redux";
import reducers from "../reducers/all";

const store: Store = createStore(
    reducers,
    // ref: https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
