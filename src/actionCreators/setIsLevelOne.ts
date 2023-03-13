import { SET_IS_LEVEL_ONE } from "../data/actionTypes"

export const setIsLevelOne = (status: boolean) => {
    return {
        type: SET_IS_LEVEL_ONE,
        status
    }
}