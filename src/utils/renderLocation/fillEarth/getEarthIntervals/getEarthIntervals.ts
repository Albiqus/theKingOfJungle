import { levelOneEarthIntervals } from "../../../../data/earthIntervals"


export const getEarthIntervals = (level: string) => {
    switch (level) {
        case 'levelOne': return levelOneEarthIntervals
    }
}