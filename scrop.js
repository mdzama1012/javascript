// globally scoped.
const x = 5;

console.log(x);

if (true) {
  // can access inside the block.
  console.log(x);
  // overwriting a globally scoped variable inside a function or block is called over-shadowing.
  x = 10;
  // block scoped.
  const y = 5;
  console.log(y);
}
// console.log(y);

function f() {
  // can access inside the function.
  console.log(x);

  // function scoped.
  const y = 5;
  console.log(y);
}
f();
// console.log(y);
