export const formatter = {
  timeSystem: (time: number) => {
    const formatTime = time < 10 ? `0${time}` : time
    return formatTime
  },
}
