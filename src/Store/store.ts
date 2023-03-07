import { legacy_createStore, combineReducers } from "redux";
import { windowsReducer } from "./windowsReducer";


let reducers = combineReducers({
    windows: windowsReducer,
})

let store = legacy_createStore(reducers)

export { store }
export type RootState = ReturnType<typeof store.getState>