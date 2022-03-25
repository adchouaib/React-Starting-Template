import { createStore, Store } from "redux"
import { Reducers } from "./reducer";

export const configureStore = () => {

    const store:Store = createStore(
        Reducers
    );
    return store;
}