// Bubble Sort

let arr = [64, 34, 12, 25, 22, 11, 90, 98];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);

// ZUK@DESKTOP-0M6F0IP MINGW64 ~/Documents/GitHub/DSA (main)
// $ node BubbleSort.js
// [
//   11, 12, 22, 25,
//   34, 64, 90, 98
// ]

// Complexity Analysis of Bubble Sort:
// Time Complexity: O(N2)
// Auxiliary Space: O(1)

// Advantages of Bubble Sort:
// Bubble sort is easy to understand and implement.
// It does not require any additional memory space.
// It is a stable sorting algorithm, meaning that elements with the same key value maintain their relative order in the sorted output.

// Disadvantages of Bubble Sort:
// Bubble sort has a time complexity of O(N2) which makes it very slow for large data sets.
// Bubble sort is a comparison-based sorting algorithm, which means that it requires a comparison operator to determine the relative order of elements in the input data set. It can limit the efficiency of the algorithm in certain cases.
