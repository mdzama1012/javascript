/**
 * closures is function bind together with it lexical scope.
 * function with its lexical scope forms a closure.
 * closures function has access to its parent lexical scope.
 */

// function y follow the concept of lexical scope.
function x() {
  const a = 5;
  function y() {
    console.log(a);
  }
  y();
}
// x();

// return a function from a function.
function x() {
  const a = 5;
  function y() {
    console.log(5);
  }
  return y;
}
// here when y was returned it still maintain its lexical scope.
// console.log(x());
// x()();

// example question - 1:
function x() {
  const a = 5;
  function y() {
    // here a doesn't refers to its value, it refer to the a variable.
    // so, the a value changes to 100 and not garbage collected.
    console.log(a);
  }
  a = 100;
  return y;
}
// x()();

// example question - 2:
function x() {
  const a = 5;
  function y() {
    const b = 3;
    function z() {
      console.log(a, b);
    }
    z();
  }
  y();
}
x();
