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

// CSS
console.time("CSS Timer");
let myTxt = "This could be useful!";
console.log("this is a %c a message with some CSS. " + myTxt,
            "color: yellow; font-style: italic; background-color: blue; padding: 2px");
console.log("This is now %c the end of the exercise.", "color: orange; font-family: fantasy; " +
            "font-style: bold; background-color: black; padding: 10px");
console.timeEnd("CSS Timer");

// Template literals
let myCar = "Audi";
let myModel = "TT";
console.log(`my fav car is ${myCar} and the model is ${myModel}`);

// not strict vs strict?
let userID = null;
console.log(userID == undefined, userID === undefined); //returns true, false
