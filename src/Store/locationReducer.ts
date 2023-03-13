import { MOVE_LEFT, MOVE_RIGHT } from "../data/actionTypes";
import { renderLocation } from "../utils/renderLocation/renderLocation";


const startState = {
    location: renderLocation('levelOne'),
    playerId: 276,
}

export const locationReducer = (state = startState, action: any) => {
    switch (action.type) {
        case MOVE_RIGHT: {
            return {
                ...state,
                playerId: state.playerId + 1
            }
        }
        case MOVE_LEFT: {
            return {
                ...state,
                playerId: state.playerId - 1
            }
        }
        default:
            return state;
    }
}