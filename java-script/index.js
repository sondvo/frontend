var number = 5;
console.log(number)

// Data Types:
// underfined, null, boolean, string, symbol, number, and object


// 3 ways to declare variables: var, let, const
// var is reusable
var myName = "SonVo"
myName = 8

let outName = "freeCodeCamp"

// const is never changed, ONLY one const name
const pi = 3.14
// const pi = 567 This will raise error


var a;
var b = 2;
console.log(a)

a = 7

b = a;

console.log(a)



var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " string!";
console.log(a, b, c)



var firstNameLength = 0;
var firstName = "AdamPakerSonVo";
firstNameLength = firstName.length;
console.log('firstNameLength:', firstNameLength)
firstName[0] = 'T';
console.log(firstName)

// get last location
lastCharacter = firstName[firstName.length - 1]
console.log(
	firstName.slice(0, 3)
)


function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
	var result = "";
	result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb
	return result;
}

console.log(
	wordBlanks(
		'dog', 'big', 'ran', 'quickly'
	)
)

console.log(
	['dog', 'big', 'ran', 'quickly'].join(' ')
)

myData = [1,2,3, [4,5,6]]
console.log(myData)
myData.push(7,8,9)
console.log(myData)
console.log(myData.pop())
console.log(myData)
console.log(myData.shift())
console.log(myData)

// This is global variable
oopGlobal = 5
console.log(oopGlobal)

function testFunction() {
	// this is NOT global, only be used in this function
	var variable1 = 5;

	// this is GLOBAL, other functions can use this
	variable2 = 6;

	return variable1, variable2;
}
function confirmVar() {
	// this will raise error
	// console.log(variable1);

	// This is OK
	console.log(variable2);
}

testFunction()
confirmVar()

// Function for resuable purpose
function someFunction(var1, var2) {
	var res = "";
	console.log('do something');
	return res;
}

// convert to string:
console.log(
	'a '+ JSON.stringify([1,2,3])
)


// Boolean values
function welcomeToBooleans() {
	// return true;
	return false;
}

// if else statement
function ourTrueOrFalse(num) {
	if (num > 5) {
		return 'this Number is larger than five'
	} else if (num == 5) {
		return 'This is five'
	} else {
		return 'this number is not larger than five'
	}
}
console.log(ourTrueOrFalse(7))
console.log(ourTrueOrFalse(5))
console.log(ourTrueOrFalse(4))

// comparison
console.log(3 == 3)
// wtf is this JS?
console.log(3 == '3')
// == will convert both sides to same type (convert to number in this case)
// === means STRICT operator, no convert the type
console.log(3 === '3')
// similar with !==

// AND / OR statement
function otherFunction(num) {
	if (num < 5 && num >3) {	// AND
		return 'something'
	} else if (num > 5 || num < 3) {	// OR
		return 'other thing'
	}
}

// break statement
for (var i of [1,2,3]) {
	if (i === 2) {
		console.log('break');
		break;
	} else {
		console.log(i)
	}
}

// switch statement
function caseInSwitch(val) {
	var answer = "";
	switch(val) {
		case 1:
			answer = "alpha";
			break;
			// if not break, it will continue till the end of function
			// if latter we have case 1 again, answer will be updated.
		case 2:
			answer = "beta";
			break;
		case 3:
			answer = "delta";
			break;
		case 4:
		case 5:
		case 6:
			answer = 'omega'
		default:
			answer = 'other';
			break;
	}
	return answer;
}
console.log(caseInSwitch(4))


// count++ mean plus 1 (depite integer or float)
var count = 1.5;
for (var i in [1,2,3]) {
	count++;
}
console.log(count)


// JS object
var ourDog = {
	"his name": "Camper",
	"legs": 4,
	"tails": 1,
	"friends": ["everything!"]
};
console.log(ourDog)
console.log(ourDog['tails'])
ourDog['his name'] = 'replacing'
console.log(ourDog)
ourDog['2nd name'] = 'Gold'
console.log(ourDog)
delete ourDog['2nd name']
console.log(ourDog)

// find key in object
var myObj = {
	"gift": "pony",
	"pet": "kitten",
	"bed": "sleigh",
	3: 'testing',
};
console.log(myObj.gift);
console.log(myObj.hasOwnProperty('bed'));
// JS object keys are always coerced to strings
// cannot identify string vs integer key
console.log(myObj.hasOwnProperty(3));
console.log(myObj.hasOwnProperty('3'));

// Clone a JS object
// Shallow copy, only top level,
var original = { a: 1, b: 2 };
var copy = { ...original };
// Deep copy
var original = { a: 1, b: { c: 2 } };
var copy = structuredClone(original);


// While loop
var myArr = [];
var i = 0
while (i < 5) {
	myArr.push(i);
	i++;
}
console.log(myArr)

// another version with for
var myArr = [];
for (var i=0; i<5; i++) {
	myArr.push(i);
}
console.log(myArr)

var myArr = [];
for (var i=0; i<5;) {
	myArr.push(i);
	i ++
}
console.log(myArr)

var myArr = [];
for (var i=10; i>0; i-=2) {
	myArr.push(i);
}
console.log(myArr)

// iterate through array
var refArr = ['a', 'b', 'c', 'd', 'e'];
var myArr = [];
for (var i=0; i<refArr.length; i++) {
	myArr.push(refArr[i]);
}
console.log(myArr)


// Create a random number wihtin a range:
// 0 -> 10
Math.floor(Math.random() * 10)
// 0 -> 20
Math.floor(Math.random() * 20)
// 5 -> 15
// Idea, create from 0 -> 10, then plus 5 @@
Math.floor(Math.random() * (15 - 5 + 1)) + 5


//convert to int
console.log(parseInt('34567'))


// shorten function
function compareNumbers(a, b) {
	if (a > b) {
		return 'a is larger than b'
	} else if (a < b) {
		return 'a is smaller than b'
	} else {
		return 'a is equal to b'
	}
}

function compareNumbers(a, b) {
	return a > b ? "a is larger than b" : a < b ? "a is smaller than b" : "a is equal to b";
}
console.log(compareNumbers(5, 5))


// var : global variable, replacable
// let : local variable (highly recommend)
// const : constant, read-only (except array, object type)
const var1 = [1,2,3] // this is mutated
const var2 = { // this is mutated
	'a': 1,
	'b': 2,
	'c': 3
}
Object.freeze(var1)		// change to read-only
Object.freeze(var2)		// change to read-only


// function
function defaultValues (a, b=1) {
	args = [a, b]
	return args.reduce((a, b) => a + b, 0)
}