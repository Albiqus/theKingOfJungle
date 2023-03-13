export const createChunks = () => {
    const area = []
    for (let i = 1; i <= 375; i++) {
        area.push({ id: i, type: 'air' })
    }
    return area
}