/**
 * Example of constructors and prototype chain.
 */

/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function (nums) {
  this.nums = nums;
};
debugger; // Inspect ArrayWrapper function.

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
  let sum = 0;
  for (const num of this.nums) {
    sum += num;
  }
  return sum;
};
debugger; // Inspect ArrayWrapper function.

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
  const len = this.nums.length;

  let str = "";
  for (let i = 0; i < len; i++) {
    if (i < len - 1) {
      str += this.nums[i] + ",";
    } else {
      str += this.nums[i];
    }
  }
  return "[" + str + "]";
};
debugger; // Inspect ArrayWrapper function.

const arr1 = new ArrayWrapper([3, 2, 5, 4, 0]);
const arr2 = new ArrayWrapper([5, 6, 7, 8, 9]);
debugger; // Inspect arr1 and arr2 object.

console.log(arr1);
console.log(arr1 + arr2);
console.log(String(arr1));

/**
 * When we perform operations like obj1 + obj2 or String(obj1), we are using an object where a primitive is expected instead, so the JS engine will try to perform a type conversion to fulfill the operation (aka try to convert the type from object to a primitive type)
 *
 * If the primitive that's expected is an integer, then JS engine looks for valueOf() (which is a method on Object.prototype)
 *
 * If the primitive that's expected is a string, then JS engine looks for toString() (which is a method on Object.prototype)
 */
