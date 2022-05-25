let x = 6;
console.log(x);

let obj = {
    name: "Name",
    number: 12345
}
console.log(obj);

console.log("con" + "cat");

function add(a, b) {
    return a + b;
}
console.log(add("adding", "strings"));
console.log("adding numbers:", add(1, 2));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
let undef;
console.log(typeof(x), typeof(obj), typeof(add), typeof(false),
            typeof(null), typeof(obj.name), typeof(undef), typeof(undefined));

console.log(typeof(123) === "number");

console.log(typeof(Number("string")) === "number");
console.log(Number("string"));

// String() converts anything to a string, safer than toString
console.log(typeof(String(123)) == "string");

// calls of the ! (logical NOT) operator are equivalent to Boolean()
console.log(Boolean(123), !123, !!123, typeof(!123) === "boolean", typeof !!(123) === "boolean");

let declaredButUndefinedVariable;
console.log(typeof(declaredButUndefinedVariable), typeof(undeclaredVariable));

// use Array.isArray or Object.prototype.toString.call to differentiate regular objects from arrays
console.log(typeof([1, 2, 4]) === "object", Array.isArray([1, 2, 4]));

// This stands since the beginning of JavaScript
typeof null === 'object';
// In the first implementation of JavaScript, JavaScript values were represented as
// a type tag and a value. The type tag for objects was 0. null was represented as
// the NULL pointer (0x00 in most platforms). Consequently, null had 0 as type tag,
// hence the typeof return value "object". (reference)
// A fix was proposed for ECMAScript (via an opt-in), but was rejected.
// It would have resulted in typeof null === 'null'.

