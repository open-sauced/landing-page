//get partial string in percentage from the beginning of a string
// percentage should be between 0 and 1
export const getPartialString = (str: string, percentage: number) => {
  const words = str.split(' ')
  const length = words.length
  const thirtyPercent = Math.floor(length * percentage)
  return words.slice(0, thirtyPercent).join(' ')
}

//get partial string in percentage from the end of a string
// percentage should be between 0 and 1
export const getPartialStringFromEnd = (str: string, percentage: number) => {
  const words = str.split(' ')
  const length = words.length
  const thirtyPercent = Math.ceil(length * percentage)
  return words.slice(length - thirtyPercent, length).join(' ')
}