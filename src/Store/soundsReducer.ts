import { SET_EFFECTS_VOLUME, SET_MUSIC_VOLUME } from "../data/actionTypes";


const startState = {
    musicVolume: 100,
    effectsVolume: 100,
}

export const soundsReducer = (state = startState, action: any) => {
    switch (action.type) {
        case SET_MUSIC_VOLUME: {
            return {
                ...state,
                musicVolume: action.volume
            }
        }
        case SET_EFFECTS_VOLUME: {
            return {
                ...state,
                effectsVolume: action.volume
            }
        }
        default:
            return state;
    }
}