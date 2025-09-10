// iterate array or string using for of loop.
arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num);
}

const fullName = 'mohd zama';
for (const char of fullName) {
    console.log(char);
}

// iterate object using for in loop.
const person = {
    first_name: 'mohd',
    middle_name: 'zama',
    last_name: 'zaidi',
    age: 21,
    hobbies: [
        'building projects',
        'programming',
        'chess',
        'collecting old ThinkPads',
        'movies and anime',
        'cooking',
    ],
};
for (const key in person) {
    // console.log(typeof key, key);

    // check is the value of key is an array or not.
    const isArr = Array.isArray(person[key]);
    if (isArr) {
        person[key].forEach(ele => {
            console.log(ele);
        });
    } else {
        console.log(person[key]);
    }
}
