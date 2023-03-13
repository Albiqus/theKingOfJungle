import { getEarthIntervals } from "./getEarthIntervals/getEarthIntervals"
import { isEarth } from "./isEarth/isEarth"


export const fillEarth = (chunks: any, level: string) => {
    const earthIntervals = getEarthIntervals(level)

    const chunksWithEarth = chunks.map((chunk: any) => {
        if (isEarth(earthIntervals, chunk.id)) return { ...chunk, type: 'earth' }
        return chunk
    })

    return chunksWithEarth
}