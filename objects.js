/**
 * 1. Write a JavaScript program to list the properties of a JavaScript object.
 * Sample object:
 * var student = {
 * name : "David Rayy",
 * sclass : "VI",
 * rollno : 12 };
 * Sample Output: name,sclass,rollno
 */

function func1(obj) {
  return Object.keys(obj).toString();
}

// console.log(
//   func1({
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
//   })
// );

/**
 * 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
 * Sample object:
 * var student = {
 * name : "David Rayy",
 * sclass : "VI",
 * rollno : 12 };
 */

function func2(obj, prop) {
  console.log(obj);
  delete obj[prop];
  console.log(obj);
}

// func2(
//   {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
//   },
//   "rollno"
// );

/**
 * 3. Write a JavaScript program to get the length of an JavaScript object.
 * Sample object :
 * var student = {
 * name : "David Rayy",
 * sclass : "VI",
 * rollno : 12 };
 */

function func3(obj) {
  return Object.keys(obj).length;
}

// console.log(
//   func3({
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
//   })
// );

/**
 * 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
 */
var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
  }
];

function func4(arr) {
  arr.forEach(book => {
    console.log(
      `Book ${book.title} is ${
        book.readingStatus ? "readed" : "needed to read"
      }`
    );
  });
}

// func4(library);

/**
 * 8. Write a JavaScript program to create a Clock.
 * Note: The output will come every second.
 * Expected Console Output :
 * "14:37:42"
 * "14:37:43"
 * "14:37:44"
 * "14:37:45"
 * "14:37:46"
 * "14:37:47"
 */

function func8() {
  setTimeout(function tick() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    console.log(`${hours}:${minutes}:${seconds}`);
    setTimeout(tick, 1000);
  }, 1000);
}

// func8();

/**
 * 10. Write a JavaScript program to sort an array of JavaScript objects.
Sample Object :

var library = [
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];
Expected Output:

[[object Object] {
  author: "Walter Isaacson",
  libraryID: 4264,
  title: "Steve Jobs"
}, [object Object] {
  author: "Suzanne Collins",
  libraryID: 3245,
  title: "Mockingjay: The Final Book of The Hunger Games"
}, [object Object] {
  author: "The Road Ahead",
  libraryID: 1254,
  title: "Bill Gates"
}]
 */
var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245
  }
];

function func10(obj, key) {
  return obj.sort((a, b) => b[key] - a[key]);
}

// console.log(func10(library, "libraryID"));

/**
 * 17. Write a JavaScript function to check if an object contains given property.
 */

function func17(obj, val) {
  return obj.hasOwnProperty(val);
}

// console.log(func17({ a: 1, b: 2 }, "c"));

/**
 * 18. Write a JavaScript function to check whether a given value is a DOM element.
 */

console.log(Object.nodeType);
