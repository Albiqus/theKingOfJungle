import { SET_IS_LEVEL_ONE } from "../data/actionTypes";


const startState = {
    isLevelOne: true,
}

export const levelsReducer = (state = startState, action: any) => {
    switch (action.type) {
        case SET_IS_LEVEL_ONE: {
            return {
                ...state,
                isLevelOne: action.status
            }
        }
        default:
            return state;
    }
}