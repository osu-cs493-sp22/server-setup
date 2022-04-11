const circle = require('./circle');
const fs = require('fs');
const figlet = require('figlet');

console.log("Hello World!");

console.log("== process.env:", process.env);
console.log("== process.env.MY_ENV_VARIABLE:", process.env.MY_ENV_VARIABLE);

console.log("== circle:", circle);
console.log("== circle.circumference(5):", circle.circumference(5));
console.log("== circle.area(5):", circle.area(5));

fs.readFile('circle.js', 'utf-8', function (err, data) {
    if (!err) {
        console.log(data);
    }
});

figlet('Hello, CS 493!', function (err, data) {
    if (!err) {
        console.log(data);
    }
});
