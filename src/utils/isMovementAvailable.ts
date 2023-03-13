import { leftBorder, rightBorder } from "../data/locationBorders"


export const isMovementAvailable = (location: any, playerId: number, direction: string) => {
    let border;
    let step = '';
    switch (direction) {
        case 'right':
            border = rightBorder
            step = '+1'
            break
        case 'left':
            border = leftBorder
            step = '-1'
            break
    }
    if (border?.includes(playerId)) {
        return false
    }
    if (location.find((el: any) => el.id === playerId + +step).type === 'earth') {
        return false
    }
    return true
}