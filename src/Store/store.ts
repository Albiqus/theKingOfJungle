import { legacy_createStore, combineReducers } from "redux";
import { levelsReducer } from "./levelsReducer";
import { locationReducer } from "./locationReducer";
import { soundsReducer } from "./soundsReducer";
import { windowsReducer } from "./windowsReducer";


let reducers = combineReducers({
    windows: windowsReducer,
    sounds: soundsReducer,
    levels: levelsReducer,
    location: locationReducer,
})

let store = legacy_createStore(reducers)

export { store }
export type RootState = ReturnType<typeof store.getState>