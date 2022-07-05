// Strings

let doubleQuotedString = "I am a string with double quotes";
let singleQuotedString = "I am a single quoted string";

let printTest = '"My quotes will be printed inside"';
let printTest1 = "'My quotes will be printed inside'";
console.log(printTest);
console.log(printTest1);

let name = "John";
let surname = "Doe";

let concatenated = name + " " + surname;
const concat2 = `${name} ${surname}`;
console.log(concatenated);

let someVariable = 5;
let backTicksString = `I am a string literal, and you can interpolate inside me ${someVariable}`;
backTicksString;
let backTicksStringMultiLine = `
I am a string literal, 
And I can also be multiline
Which in sone cases improves readibility
`;

// Strings can be treated as arrays (do nekade)

let nameSize = concatenated.length;
console.log(nameSize);

let changedLength = concatenated;
changedLength.length = 12;
console.log(changedLength);
console.log(changedLength.length);

console.log("test".charAt(0));
console.log("test"[0]);

// toString(), almost any other object can be converted to string
let number = 5;
let string = "Some string";
let date = new Date();
let bool = true;
let obj = { key: "value" };
let arr = [1, 2, 3];
let func = function () {};
let nul = null;
let undef = undefined;

console.log(number.toString());
console.log(string.toString());
console.log(date.toString());
console.log(bool.toString());
console.log(obj.toString());
console.log(arr.toString());
console.log(func.toString());
// console.log(nul.toString())
// console.log(undef.toString())
// console.log(NaN.toString())

// Methods are functions that exist on some objects,
// they are accessible just like object properties, with . syntax
// toString() is one of those methods
// Also String(), object constructor exists that has a similar function like .toString(), it tries to
// make a string out of anything, but it works 'better'

console.log(String(null));
console.log(String(undefined));

let stringPrim = "foo";
let stringObj = new String(stringPrim);

console.log(stringPrim);
console.log(stringObj);

console.log(typeof s_prim); // Logs "string"
console.log(typeof s_obj); // Logs "object"

let s1 = "5 + 5"; // creates a string primitive
let s2 = new String("5 + 5"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2));

console.log(String.fromCharCode(90));

// comparing strings, lexicographically (strcmp() from C)

console.log("a" < "b");

// popular methods

let uppercase = "smallcase".toUpperCase();
uppercase;

let lowercase = "UPPERCASE".toLowerCase();

const trimmed = "    String   ".trim();
trimmed;

let checkIncludes = "The quick brown fox jumps over thedog".includes("fox");
checkIncludes;

let idxOf = "The quick brown fox jumps over the lazy dog".indexOf("fox");
idxOf;
let eidxOf = "The quick brown fox jumps over the lazy dog".lastIndexOf("o");
eidxOf;


const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(" ", str2));

const question = "Are you ok?".endsWith("?");
question;

let ho = "ho";
let santaSays = ho.repeat(3);
santaSays;

const p =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";
console.log(p.replace("dog", "monkey"));

// .slice(startIndex, endIndex)

const sliced = p.slice(10,20);
sliced;
p;

const split = p.slice();

// regex

// literal notation
let re = /ab+c/i;
const regex = new RegExp("ab+c", "i");
// const regex = new RegExp(/ab+c/,'i');

const onlyNumbersRegex = new RegExp(/^\d+$/);
const resultFromTest = onlyNumbersRegex.test("44");
resultFromTest;

// Numbers, Number constructor

// float

100;
100.0;
100 === 100.0; // true

Number("100"); // returns the number 123
Number("123") === 123; // true

Number("unicorn"); // NaN
Number(undefined); // NaN



const isitanumber = isNaN('4ree');
const sigurenBroj = Number('4ree');

sigurenBroj
isitanumber
'43'

const parsedInt = parseInt('643');
parsedInt
parseFloat();

const fixedDecimal = Math.random().toFixed(3)
fixedDecimal
5.0.toString();

