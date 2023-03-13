import { createChunks } from "./createChunks/createChunks"
import { fillEarth } from "./fillEarth/fillEarth"


export const renderLocation = (level: string) => {
    const chunks = createChunks()
    return fillEarth(chunks, level)
}