// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  res = [];
  console.log("size=", size);
  for (let i = 0; i < array.length; i += size) {
    // console.log("i=", i);
    let el = [];
    for (let j = 0; j < size && i + j < array.length; j++) {
      // console.log("j=", j);
      el.push(array[i + j]);
    }
    res.push(el);
  }
  return res;
}

module.exports = chunk;
