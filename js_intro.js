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

let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay = totalMoney - moneyPaidSoFar;
console.log(`Total bill is £${totalMoney}, remaining to pay is £${totalLeftToPay}`);
console.log(`Total bill is £${totalMoney}, remaining to pay is £${totalMoney - moneyPaidSoFar}`);

// not strict vs strict?
let userID = null;
console.log(userID == undefined, userID === undefined); //returns true, false

// various stuff from Edge console
/*
let i = 4;
if (i = 5) {
    console.log(true);
}
// true because = and not == or ===
Boolean(null)
// false
Boolean(undefined)
// false
Boolean(0)
// false
Boolean("")
// false
Boolean(false)
// false
Boolean(NaN)
// false
Boolean([])
// true
Boolean("false")
// true
Boolean("0")
// true
Boolean(false)
// false
let classRoom = ["","","",""];
classRoom[2]
// ''
for(let person in classRoom) {
    console.log(person);
}
// 0
// 1
// 2
// 3
let classRoom = [1,2,3,4];
for (let person in classRoom) {
    console.log(person);
}
// 0
// 1
// 2
// 3
for (let person of classRoom) {
    console.log(person);
}
// 1
// 2
// 3
// 4
let d = ["apple","strawberries","banana", "grapes", "pear"];
console.log(d.sort()); // ["apple", "banana", "grapes", "pear", "strawberries"]
// (5) ['apple', 'banana', 'grapes', 'pear', 'strawberries']
console.log(d.reverse());//["strawberries", "pear", "grapes", "banana", "apple"]
// (5) ['strawberries', 'pear', 'grapes', 'banana', 'apple']
console.log(d.join());
// strawberries,pear,grapes,banana,apple
console.log(typeof d.join());
// string
d
// (5) ['strawberries', 'pear', 'grapes', 'banana', 'apple']
d.pop();
// 'apple'
d
// (4) ['strawberries', 'pear', 'grapes', 'banana']
d.push("apple");
// 5
d
// (5) ['strawberries', 'pear', 'grapes', 'banana', 'apple']
d.shift();
// 'strawberries'
d
// (4) ['pear', 'grapes', 'banana', 'apple']
JSON.parse('{"name":"Adrian"}');
{name: 'Adrian'}
myArray = ["hello", "everyone"];
// (2) ['hello', 'everyone']
myArray.length;
// 2
myArray.push(1, 2, 3)
// 5
myArray
// (5) ['hello', 'everyone', 1, 2, 3]
myArray.length;
// 5
myArray.shift();
// 'hello'
for (let el of myArray) {
    console.log(el);
}
// everyone
// 1
// 2
// 3
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
// everyone
// 1
// 2
// 3
*/
