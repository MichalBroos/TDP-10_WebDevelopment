"use strict"
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
console.log(`Total bill is ??${totalMoney}, remaining to pay is ??${totalLeftToPay}`);
console.log(`Total bill is ??${totalMoney}, remaining to pay is ??${totalMoney - moneyPaidSoFar}`);

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
// (5)??['apple', 'banana', 'grapes', 'pear', 'strawberries']
console.log(d.reverse());//["strawberries", "pear", "grapes", "banana", "apple"]
// (5)??['strawberries', 'pear', 'grapes', 'banana', 'apple']
console.log(d.join());
// strawberries,pear,grapes,banana,apple
console.log(typeof d.join());
// string
d
// (5)??['strawberries', 'pear', 'grapes', 'banana', 'apple']
d.pop();
// 'apple'
d
// (4)??['strawberries', 'pear', 'grapes', 'banana']
d.push("apple");
// 5
d
// (5)??['strawberries', 'pear', 'grapes', 'banana', 'apple']
d.shift();
// 'strawberries'
d
// (4)??['pear', 'grapes', 'banana', 'apple']
JSON.parse('{"name":"Adrian"}');
{name: 'Adrian'}
myArray = ["hello", "everyone"];
// (2)??['hello', 'everyone']
myArray.length;
// 2
myArray.push(1, 2, 3)
// 5
myArray
// (5)??['hello', 'everyone', 1, 2, 3]
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

// Iteration
for (let i = 195; i <= 200; i++) {
    console.log(`i = ${i}`);
}

let a = 196;
while (a <= 200) {
    console.log(a % 2 == 0 ? `${a} even` : `${a} odd`);
    a++;
}

// Other
let now = new Date();
console.log(now.getDay());

// Destructuring
let myArray = [1,2,3];
let [e1, e2, e3] = myArray; // correct
// let a1, a2, a3 = myArray; // would assign entire array to a3 only, so a1 and a2 = undefined
console.log(e1, e2, e3);

// helper
function resetArray() {
    myArray = [];
    for (let i = 10; i <= 20; i++) {
        myArray.push(i);
    }
}

// spread operator
resetArray();
let rest; // required when using strict
[e1, e2, e3,...rest] = myArray;
console.log(e1, e2, e3, rest);

// skipping values
resetArray();
[e1, , e3,...rest] = myArray;
console.log(e1, e3, rest);

// object destructuring
let p = {
    fore: "Forename",
    mid: "Middle",
    sur: "Surname"
};
let {n1, n2} = p;
/*
undefined x2 because above does not assign first two key:value pairs to n1 and n2 as you thought
originally (in fact objects = unordered so what would be the first two pairs anyway?!), but rather
like taking a slice of p and that slice containing what is already in p, hence n1 and n2 are
undefined because they are undefined in p, you need to take the slice of the existing fields
as seen on the next line
actually, it does assign, it's just the default syntax, i.e. not specifying which keys to assign,
looks for the same names, in other words assignment is based on matching names, not order
*/
let {fore, mid} = p;
console.log(n1, n2);
console.log("original 'slice':", fore, mid); // name matching, not order slicing!
// if you want to unpack from an object and assign to variables you do this as shown on 
// MDN-Destructuring assignment-Object destructuring-Assigning to new variable names
let {fore: fore2, mid: mid2} = p;
console.log("unpacked from object:", fore2, mid2);

// JavaScript Exercise Book
// Conditionals 1
let person = {
    age: 33
}
if (person.age >= 20 && person.age < 40) {
    console.log("Between");
} else {
    console.log("Not between");
}
// Iteration 1
for (let i = 1; i <= 1; i++) {
    console.log(i);
}
// Iteration 2
for (let i = 0; i <= 1; i++) {
    if (i % 2 == 0) {
        console.log("Even");
    }
}
// Iteration 3
function iteration3WithMod(upTo, wordForDivBy3, wordForDivBy5) {
    for (let i = 1; i < upTo; i++) {
        let divisibleBy3 = i % 3 === 0;
        let divisibleBy5 = i % 5 === 0;

        if (divisibleBy3 && divisibleBy5) {
            console.log(`${i}: ${wordForDivBy3} and ${wordForDivBy5}`);
        } else if (divisibleBy3) {
            console.log(`${i}: ${wordForDivBy3}`);
        } else if (divisibleBy5) {
            console.log(`${i}: ${wordForDivBy5}`);
        } else {
            console.log(`${i}: Neither ${wordForDivBy3}, nor ${wordForDivBy5}`);
        }
    }
}
iteration3WithMod(16, "divisible by 3", "divisible by 5");
// write a version without using mod, by manipulating strings and using divisibility rules

// Iteration 4
function iteration4(n) {
    console.log("-".repeat(10));
    let iterationCount = 0;
    const DIV_BY_3 = "divided by 3";
    const ADDED_1 = "added 1";
    const SUBED_1 = "subtracted 1";

    while (n !== 1) {
        console.log(`Iteration ${iterationCount}, n = ${n}`);

        if (n % 3 === 0) {
            n /= 3;
            console.log(DIV_BY_3);
        } else if ((n + 1) % 3 === 0) {
            n++;
            console.log(ADDED_1);
            n /= 3;
            console.log(DIV_BY_3);
        } else {
            n--;
            console.log(SUBED_1);
            n /= 3;
            console.log(DIV_BY_3);
        }

        iterationCount++;
        console.log("-".repeat(10));
    }
    console.log(`n = ${n}, total number of iterations: ${iterationCount}`);
}
iteration4(10);

// DOM Manipulation
let domExercise1 = () => {
    let h1Ele = document.createElement("h1");
    h1Ele.innerText = "Heading 1";
    document.body.appendChild(h1Ele);

    return "success";
}
// solution by QA - same HTML despite creating another node
let domExercise1QA = () => {
    const heading = document.createElement("h1");
    const heading_text = document.createTextNode("Big head!");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
}
// domExercise1();
// domExercise1QA();

// JavaScript Exercise Book
// DOM 1
let addButton = (textBeforePara) => {
    let button = document.createElement("button");
    button.innerText = `${textBeforePara} paragraph`;
    button.style.display = "block"
    document.body.appendChild(button);
    return button;
}

let addParagraph = (paraId, paraTextId, defaultText = "New paragraph") => {
    let para = document.createElement("p");
    let paraText = document.getElementById(paraTextId);
    para.innerText = paraText.value ? paraText.value : defaultText;
    para.id = paraId;
    document.body.appendChild(para);
}

let changeParagraphText = (paraId, paraTextId) => {
    let para = document.getElementById(paraId);
    if (para) {
        let paraText = document.getElementById(paraTextId);
        para.innerText = paraText.value ? paraText.value : "<blank>";
    } else {
        alert("Create a paragraph first")
    }
}

let deleteParagraph = (paraId) => {
    let para = document.getElementById(paraId);
    if (para) {
        para.remove();
    } else {
        alert("No paragraphs exist");
    }
}

let dom1ExerciseBook = () => {
    let nextParaId = 0;
    let createParaButton = addButton("Create new");
    
    let textBox = document.createElement("input");
    let labelTextBox = document.createElement("label");
    textBox.name = "paraText"
    textBox.id = textBox.name
    labelTextBox.innerText = "Paragraph text:";
    labelTextBox.setAttribute("for", textBox.name); // example of setter
    document.body.appendChild(labelTextBox);
    document.body.appendChild(textBox);
    
    let changeParaButton = addButton("Change most recent");
    let deleteParaButton = addButton("Delete most recent");

    // unsafe because "the W3C model does not state which event handler is fired first and that can not be assumed"?
    // solution: first two events combined and using para${nextParaId++},
    // last two combined and using para${nextParaId != 0 ? --nextParaId : -1} -1 being DNE
    createParaButton.addEventListener("click", () => addParagraph(`para${nextParaId}`, textBox.id));
    createParaButton.addEventListener("click", () => nextParaId++);
    changeParaButton.addEventListener("click", () => changeParagraphText(`para${nextParaId - 1}`, textBox.id));
    deleteParaButton.addEventListener("click", () => deleteParagraph(`para${nextParaId - 1}`)); // or --nextParaId
    deleteParaButton.addEventListener("click", () => nextParaId != 0 ? nextParaId-- : null);
}
// dom1ExerciseBook();

// Counter Exercise
let addCounterButton = (text, numInputId) => {
    let button = document.createElement("button");
    let n = Number.parseInt(text);
    button.innerText = n == 0 ? "R" : text;
    document.body.appendChild(button);
    // example of passing the event which can then be accessed in the listener
    button.addEventListener("click", (e) => updateCounter(e, n, numInputId));
}

let updateCounter = (e, numToAdd, numInputId) => {
    let numInput = document.querySelector(`#${numInputId}`);
    numInput.value = numToAdd ? Number.parseInt(numInput.value) + numToAdd : 0;

    // accessing the passed event
    /* https://stackoverflow.com/a/64585152
    In other words, "event" should really be passed as an argument to a JS event handler.
    You shouldn't be using the global object; you shouldn't NEED to use the global object.
    */
    console.log(event);
    console.log(e);
    console.log(e.target.value); // button has no value, innerText
    console.log(e.target.innerText);
}

let counterExercise = () => {
    let numInput = document.createElement("input");
    numInput.name = "result";
    numInput.id = "result";
    numInput.type = "number";
    numInput.value = 0;
    document.body.appendChild(numInput);

    addCounterButton("-5", numInput.id);
    addCounterButton("-1", numInput.id);
    addCounterButton("0", numInput.id);
    addCounterButton("+1", numInput.id);
    addCounterButton("+5", numInput.id);
}
// add log history extension
// counterExercise();

// Calculator Exercise
function createInputs(inputName) {
    let inputBox = document.createElement("input");
    inputBox.name = inputName;
    inputBox.id = inputName;
    inputBox.type = "text";
    inputBox.readOnly = true;
    document.body.appendChild(inputBox);
    return inputBox;
}

let calculatorExerciseV2 = () => {
    let tracker = createInputs("tracker");
    let result = createInputs("result");
    result.value = 0;
    let operatorPressed = false;
    let numberPressed = false;

    const otherButtonsText = [["+", "-"], ["*", "/"], ["0", "="]];
    for (let i = 0; i <= 2; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.id = "row" + i;
        document.body.appendChild(rowDiv);

        for (let j = 1; j <= 3; j++) {
            let numButton = document.createElement("button");
            numButton.innerText = j + i * 3;
            numButton.id = numButton.innerText
            rowDiv.appendChild(numButton);

            numButton.addEventListener("click", () => {
                if (operatorPressed) {
                    result.value = 0;
                    operatorPressed = false;
                }
                result.value = result.value === "0" ? numButton.innerText : result.value + numButton.innerText;
                numberPressed = true;
            });
        }
    
        for (let buttonText of otherButtonsText[i]) {
            let otherButton = document.createElement("button");
            otherButton.innerText = buttonText;
            otherButton.id = otherButton.innerText;
            rowDiv.appendChild(otherButton);

            otherButton.addEventListener("click", () => {
                if (otherButton.innerText === "0") {
                    // special otherButton which is not an operand
                    result.value = !numberPressed ? 0 : result.value + 0;
                    numberPressed = true;
                } else {
                    operatorPressed = true;
                    console.log(tracker.value);
                    if (!tracker.value) {
                        tracker.value = otherButton.innerText !== "=" ? `${result.value} ${otherButton.innerText}` : "";
                    } else if (!numberPressed) {
                        // pressing a sign followed by another sign is handled by this condition
                        // just update the sign using regex
                        tracker.value = tracker.value.replace(/.$/, otherButton.innerText);
                    } else {
                        let trackerSplit = tracker.value.split(" ");
                        let op1 = Number.parseInt(trackerSplit[0]);
                        let op = trackerSplit[1];
                        let op2 = Number.parseInt(result.value);
                        let op2Signed = result.value < 0 ? result.value : `${op}${result.value}`;
                        console.log(op1, op2Signed);
                        console.log(op1, op2Signed, op2);
    
                        if (op === "+" || op === "-") {
                            result.value = op1 + Number.parseInt(op2Signed);
                        } else if (op === "*") {
                            result.value = op1 * Number.parseInt(op2Signed.slice(1)); // sign removed, could use op2 instead
                        } else if (op === "/") {
                            result.value = op1 / Number.parseInt(op2Signed.slice(1)); // sign removed, could use op2 instead
                        }
    
                        if (otherButton.innerText === "=") {
                            // tracker.value = `${op1} ${op} ${op2} = ${result.value}`; // Windows-like
                            tracker.value = "";
                        } else {
                            tracker.value = `${result.value} ${otherButton.innerText}`;
                        }
                    }
                    numberPressed = false;
                }
            });
        }
    }
}
calculatorExerciseV2();
