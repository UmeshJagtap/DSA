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
