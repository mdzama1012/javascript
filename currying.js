// CURRYING
function sum(a) {
  return function (b) {
    return function (c) {
      // In currying, we make sure we run the main logic when all the parameters are present.

      // Executing the main logic, after gathering of all three parameters.
      return a + b + c;
    };
  };
}

// rewrite in ES6 syntax.
const sumES6 = (a) => (b) => (c) => a + b + c;

// so we have to pass 3 parameters to execution of the logic.
const res = sumES6(5)(4)(9);

console.log(res);

/**
 * In currying we return multiple closure functions.
 * This is common practice in high order function and functional programming.
 */
