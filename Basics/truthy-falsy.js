/**
 * there are 6 falsy values. 😒
 * false
 * 0
 * "" or '' (empty string)
 * null
 * undefined
 * NaN
 */

/**
 * below are some confusing truthy values. 🤔
 * everything else leaving the above 6 falsy value is true.
 * true
 * '0'
 * ' '
 * 'false'
 * [] (empty array)
 * {} (empty object)
 * function () {} (empty function)
 */
const x = 0;

if (x) {
    console.log('${x} is a truthy value.');
} else {
    console.log('${x} is a falsy value.');
}

console.log(Boolean(x));
