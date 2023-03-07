const SET_IS_INITIAL_WINDOW = 'SET_IS_INITIAL_WINDOW'


const startState = {
    isInitialWindow: true,
}

export const windowsReducer = (state = startState, action: any) => {
    switch (action.type) {
        case SET_IS_INITIAL_WINDOW: {
            return {
                ...state,
                isInitialWindow: action.payload.status
            }
        }
        default:
            return state;
    }
}