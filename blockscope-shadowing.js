/**
 * NOTES:
 * block combines multiple statements into a group, It is also know as compound statement.
 *
 * we group multiple statements into one statement so that we can use multiple statements in place where javascript expects a single statement.
 *
 * variable inside a block are also hoisted.
 *
 * we have 5 types of scope: local, global, script, block and closure.
 *
 * block also follow scope chain just like closure.
 */

// let and const are block scoped because they are hoisted on the block.
{
  console.log(c);
  const a = 10;
  let b = 20;
  var c = 30;
  console.log(a, b, c);
}

function x() {
  // var is function scoped.
  var test = "this is test variable";
  console.log(test);
}
x();

// Example 1: shadowing with var variable.
var a = 10;
{
  var a = 20;
  console.log(a); // 20
}
console.log(a); // 20

// Example 2: shadowing with let.
let t = 10;
{
  let t = 20;
  console.log(t); // 20
}
console.log(t); // 10

// Example 3: Explain, how below code works?
function x() {
  var x = 20;
  {
    var y = 10;
    let a = 50;
    const b = 70;
    // Can only access a and b inside this block only.
    console.log(a, b, y);
  }
  // x and y are accessed from local scope of function.
  console.log(x, y);
}
x();

// Example 4: Block scope chaining
{
  const a = 5;
  {
    const b = 7;
    {
      console.log(a, b);
    }
  }
}
