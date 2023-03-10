import { legacy_createStore, combineReducers } from "redux";
import { soundsReducer } from "./soundsReducer";
import { windowsReducer } from "./windowsReducer";


let reducers = combineReducers({
    windows: windowsReducer,
    sounds: soundsReducer,
})

let store = legacy_createStore(reducers)

export { store }
export type RootState = ReturnType<typeof store.getState>