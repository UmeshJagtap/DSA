let arr = [1, 8, 7, 45, 78, 90];

function largest(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log(max);
}

largest(arr);

// const removeFalsy = (arr) => arr.filter(Boolean);

// console.log(removeFalsy([0, 1, false, true, 0, 0, '', 'hello']));

// ZUK@DESKTOP-0M6F0IP MINGW64 ~/Documents/GitHub/DSA (main)
// $ node Traversing.js
// 90
