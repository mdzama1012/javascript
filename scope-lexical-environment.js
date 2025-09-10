function x() {
  const a = 10;
  y();
  function y() {
    // here a is search inside the local memory of x execution context.
    console.log(a);
  }
}
x();

// lexical environment is created when an execution context is created.

// lexical environment means the outer variables inside which a function is defined.

// lexical environment is a local memory along with the lexical environment of its parent (and this chain goes on until global executing context).

// lexical mean hierarchy in coding (example is below).
function f() {
  // here function y lexically sites inside function x.
  function g() {
    console.log("hello");
  }
  g();
}
f();

// whenever we use a variable its value is searched for all the lexical environments, and this concept is know as scope chain.

// we can see global execution context in our web browsers's dev tool source tab by using debugger.
