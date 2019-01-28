/**
 * 1. Write a JavaScript function to check whether an `input` is an array or not.
 * Test Data :
 * console.log(is_array('w3resource'));
 * console.log(is_array([1, 2, 4, 0]));
 * false
 * true
 */

function func1(arr) {
  return arr.constructor === Array;
}

// console.log(func1("w3resource"));
// console.log(func1([1, 2, 4, 0]));

/**
 * 2. Write a JavaScript function to clone an array.
 * Test Data :
 * console.log(array_Clone([1, 2, 4, 0]));
 * console.log(array_Clone([1, 2, [4, 0]]));
 * [1, 2, 4, 0]
 * [1, 2, [4, 0]]
 */

function func2(arr) {
  //   return arr.slice();
  return [...arr];
}

// console.log(func2([1, 2, 4, 0]));
// console.log(func2([1, 2, [4, 0]]));

/**
 * 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
 * Test Data :
 * console.log(first([7, 9, 0, -2]));
 * console.log(first([],3));
 * console.log(first([7, 9, 0, -2],3));
 * console.log(first([7, 9, 0, -2],6));
 * console.log(first([7, 9, 0, -2],-3));
 * Expected Output :
 * 7
 * []
 * [7, 9, 0]
 * [7, 9, 0, -2]
 * []
 */

function func3(arr, n = 1) {
  return arr.slice(0, n);
}

// console.log(func3([7, 9, 0, -2]));
// console.log(func3([], 3));
// console.log(func3([7, 9, 0, -2], 3));
// console.log(func3([7, 9, 0, -2], 6));
// console.log(func3([7, 9, 0, -2], -3));

/**
 * 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
 * Test Data :
 * console.log(last([7, 9, 0, -2]));
 * console.log(last([7, 9, 0, -2],3));
 * console.log(last([7, 9, 0, -2],6));
 * Expected Output :
 * -2
 * [9, 0, -2]
 * [7, 9, 0, -2]
 */

function func4(arr, n = 1) {
  return arr.slice(-n);
}

// console.log(func4([7, 9, 0, -2]));
// console.log(func4([7, 9, 0, -2], 3));
// console.log(func4([7, 9, 0, -2], 6));

/**
 * 9. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
 */

function func9(str) {
  return str
    .split("")
    .map(char =>
      char == char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
}

// console.log(func9("The Quick Brown Fox"));

/**
 * 10. Write a JavaScript program which prints the elements of the following array.
 * Note : Use nested for loops.
 * Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 * Sample Output :
 * "row 0"
 * " 1"
 * " 2"
 * " 1"
 * " 24"
 * "row 1"
 * ------
 * ------
 */

function func10(arr) {
  arr.forEach((row, i) => {
    let line = "";
    console.log("row " + i);
    row.forEach(char => (line += char + " "));
    console.log(line + "\n------");
  });
}

// func10([
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
//   [7, 4, 28, 14],
//   [3, 10, 26, 7]
// ]);

/**
 * 12. Write a JavaScript program to compute the sum and product of an array of integers.
 */

function func12(arr) {
  console.log(
    "sum = " +
      arr.reduce((sum, item) => {
        return (sum += item);
      }, 0)
  );
  console.log(
    "product = " +
      arr.reduce((prod, item) => {
        return (prod *= item);
      }, 1)
  );
}

// func12([1, 2, 3, 4, 5, 6]);

/**
 * 17. Write a JavaScript program to shuffle an array.
 */

function func17(arr) {
  let len = arr.length;
  while (len > 0) {
    const rand = Math.floor(Math.random() * len);
    len--;
    const temp = arr[len];
    arr[len] = arr[rand];
    arr[rand] = temp;
  }
  return arr;
}

// console.log(func17([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/**
 * 20. Write a JavaScript program to find duplicate values in a JavaScript array.
 */

function func20(arr) {
  const result = [];
  const obj = {};
  arr.forEach(item => (obj[item] ? obj[item]++ : (obj[item] = 1)));
  for (let key in obj) obj[key] > 1 ? result.push(key) : null;
  return result;
}

console.log(func20([1, 2, 3, 4, 5, 6, 7, 5, 4, 3]));
