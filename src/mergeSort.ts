export type merge = (left: number[], right: number[]) => number[];
export type mergeSort = (arr: number[]) => number[];

/**
 * @param {Array} left - The left subarray.
 * @param {Array} right - The right subarray.
 * @return The leftover elements.
 */
export const merge : merge = (left, right) => {
  let arr = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }
  return [...arr, ...left, ...right]
}
/**
 * @param {Array} arr - The array to sort.
 * @return The sorted array.
 */
export const mergeSort : mergeSort = (arr) => {
  const half = arr.length / 2
  if (arr.length < 2) {return arr};
  const left = arr.splice(0, half)
  return merge(mergeSort(left), mergeSort(arr))
}