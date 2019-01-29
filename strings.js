/**
 * 5. Write a JavaScript function to convert a string in abbreviated form.
 * Test Data :
 * console.log(abbrev_name("Robin Singh"));
 * "Robin S."
 */

function func5(str) {
  let splitedStr = str.split(" ");
  return splitedStr.length > 1
    ? splitedStr[0] +
        " " +
        splitedStr
          .slice(1)
          .map(word => word[0])
          .join(" ")
          .toUpperCase()
    : str;
}

// console.log(func5("Robin Singh"));

/**
 * 6. Write a JavaScript function to hide email addresses to protect from unauthorized user.
 * Test Data :
 * console.log(protect_email("robin_singh@example.com"));
 * "robin...@example.com"
 * Click me to see the solution.
 */

function func6(email) {
  let splitedEmail = email.split("@");
  return splitedEmail[0].slice(0, 5) + "...@" + splitedEmail[1];
}

// console.log (func6("robin_singh@example.com"));

/**
 * 7. Write a JavaScript function to parameterize a string.
 * Test Data :
 * console.log(string_parameterize("Robin Singh from USA."));
 * "robin-singh-from-usa"
 */

function func7(str) {
  return str
    .toLowerCase()
    .split(" ")
    .join("-");
}

// console.log(func7("Robin Singh from USA"));

/**
 * 8. Write a JavaScript function to capitalize the first letter of a string.
 * Test Data :
 * console.log(capitalize('js string exercises'));
 * "Js string exercises"
 */

function func8(str) {
  return str[0].toUpperCase() + str.slice(1);
}

// console.log(func8("js string exercises"));

/**
 * 9. Write a JavaScript function to capitalize the first letter of each word in a string.
 * Test Data :
 * console.log(capitalize_Words('js string exercises'));
 * "Js String Exercises"
 */

function func9(str) {
  return str
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

// console.log(func9("js string exercises"));

/**
 * 10. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
 * Test Data :
 * console.log(swapcase('AaBbc'));
 * "aAbBC"
 */
function func10(str) {
  return str
    .split("")
    .map(char =>
      char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
}

// console.log(func10("AaBbc"));

/**
 * 11. Write a JavaScript function to convert a string into camel case.
 * Test Data :
 * console.log(camelize("JavaScript Exercises"));
 * console.log(camelize("JavaScript exercises"));
 * console.log(camelize("JavaScriptExercises"));
 * "JavaScriptExercises"
 * "JavaScriptExercises"
 * "JavaScriptExercises"
 * Click me to see the solution.
 */

function func11(str) {
  return str
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join("");
}

// console.log(func11("JavaScript Exercises"));
// console.log(func11("JavaScript exercises"));
// console.log(func11("JavaScriptExercises"));

/**
 * 12. Write a JavaScript function to uncamelize a string.
 * Test Data :
 * console.log(uncamelize('helloWorld'));
 * console.log(uncamelize('helloWorld','-'));
 * console.log(uncamelize('helloWorld','_'));
 * "hello world"
 * "hello-world"
 * "hello_world"
 */

function func12(str, type = " ") {
  return str
    .split("")
    .map(word =>
      word.toUpperCase() === word ? " " + word.toLowerCase() : word
    )
    .join("")
    .split(" ")
    .join(`${type}`);
}

// console.log(func12("helloWorld"));
// console.log(func12("helloWorld", "-"));
// console.log(func12("helloWorld", "_"));

