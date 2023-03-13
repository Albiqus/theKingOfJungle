import { directions } from "../data/directions"


export const getDirection = (keyCode: number) => {
    return directions[keyCode]
}