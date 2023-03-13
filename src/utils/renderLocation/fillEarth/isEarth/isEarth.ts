export const isEarth = (intervals: any, id: number) => {
    let status = false
    intervals.forEach((interval: any) => {
        if (interval.start <= id && id <= interval.end) status = true
    })
    return status
}