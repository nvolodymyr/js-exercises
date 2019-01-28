/**
 * 1. Write a JavaScript function that reverse a number.
 * Example x = 32243;
 * Expected Output : 34223
 */

function func1(x) {
  return Number(
    x
      .toString()
      .split("")
      .reverse()
      .join("")
  );
}
// console.log(func1(32243));

/**
 * 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
 * A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
 */

function func2(str) {
  const enteredStr = str.toLowerCase().replace(/\s/g, "");
  const reversedStr = enteredStr
    .split("")
    .reverse()
    .join("");

  return enteredStr === reversedStr;
}
// console.log(func2("madam"));
// console.log(func2("nuRses run"));

/**
 * 3. Write a JavaScript function that generates all combinations of a string.
 * Example string : 'dog'
 * Expected Output : d,do,dog,o,og,g
 */

function func3(str) {
  //   const allCombinations = [];
  //   if (str.lenght === 1) return str;
  //   for (let x = 0; x < str.length; x++) {
  //     for (let y = 0; y < str.length; y++) {
  //       if (x == y) {
  //         allCombinations.push(str[x]);
  //       } else {
  //         allCombinations.push(str[x] + str[y]);
  //       }
  //     }
  //   }

  //   return [...new Set(allCombinations)];

  const allCombinations = [];

  console.log(str);
  for (let x = 0; x < str.length; x++) {
    for (let y = 0; y <= str.length; y++) {
      if (str.substring(x, y) !== "") allCombinations.push(str.substring(x, y));
    }
  }

  return [...new Set(allCombinations)].join();
}

// console.log(func3("dog"));

/**
 * 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
 * Example string : 'webmaster'
 * Expected Output : 'abeemrstw'
 */

function func4(str) {
  return str
    .split("")
    .sort()
    .join("");
}

// console.log(func4("webmaster"));

/**
 * 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
 * Example string : 'the quick brown fox'
 * Expected Output : 'The Quick Brown Fox '
 */

function func5(str) {
  return str
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

// console.log(func5("the quick brown fox"));

/**
 * 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
 * Example string : 'Web Development Tutorial'
 * Expected Output : 'Development'
 */

function func6(str) {
  return str.split(" ").sort((a, b) => b.length - a.length)[0];
}

// console.log(func6("Web Development Tutorial"));

/**
 * 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
 * Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
 * Example string : 'The quick brown fox'
 * Expected Output : 5
 */

function func7(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let countOfvowels = 0;

  str.split("").forEach(char => {
    if (vowels.indexOf(char) !== -1) countOfvowels++;
  });
  return countOfvowels;
}

// console.log(func7("The quick brown fox"));

/**
 * 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
 * Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 */

function func8(input) {
  let prime = true;
  for (let i = 2; i < input; i++) {
    if (input % i === 0) {
      prime = false;
    }
  }

  return prime && input > 1;
}

// console.log(func8(7));

/**
 * 9. Write a JavaScript function which accepts an argument and returns the type.
 * Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
 */

function func9(input) {
  return typeof input;
}

// console.log(func9("str"));

/**
 * 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
 */

function func10(n) {
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < n; k++) {
      if (i === k) {
        console.log(" 1 ");
      } else {
        console.log(" 0 ");
      }
    }
    console.log("-------");
  }
}

// console.log(func10(10));

/**
 * 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. Go to the editor
 * Sample array : [1,2,3,4,5]
 * Expected Output : 2,4
 */

function func11(array) {
  const sortedArray = array.sort((a, b) => a - b);
  return [
    sortedArray.slice(1, 2),
    sortedArray.slice(sortedArray.length - 2, sortedArray.length - 1)
  ].join(",");
}

// console.log(func11([3, 2, 4, 5, 1]));

/**
 * 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string.
 */

function func17(str) {
  return str
    .replace(/\s/g, "")
    .toLowerCase()
    .split("")
    .reduce((result, char) => {
      if (result.hasOwnProperty(char)) result[char]++;
      else result[char] = 1;
      return result;
    }, {});
}

// console.log(func17("The quick brown fox"));
