console.log("BEGIN PRACTICE EXERCIZES");
console.log("SUBTRACTION OPERATORS");
let nr1 = 20;
let nr2 = 4;
let str1 = "Hi!";
let nr3 = 3;
let result = nr1 - nr2;
let result2 = str1 - nr3;
console.log(`${nr1} + ${nr2} = `, result);
console.log(`${str1} + ${nr3} = `, result2);

console.log("BEGIN PRACTICE EXERCIZES");
console.log("MULTIPLICATION OPERATORS");
let nr11 = 10;
let nr12 = 15;
let str11 = "Hi!";
let nr13 = 3;
let result1 = nr11 * nr12;
let result12 = str11 * nr13;
console.log(`${nr11} * ${nr12} = `, result1);
console.log(`${str11} * ${nr13} = `, result12);

console.log("BEGIN PRACTICE EXERCIZES");
console.log("DIVISION OPERATORS");
let num = 30;
let num2 = 5;
let numResult = num / num2;
console.log(`${num} / ${num2} = `, numResult);

console.log("BEGIN PRACTICE EXERCIZES");
console.log("EXPONENTIATION OPERATORS");
let num3 = 2;
let num4 = 3;
let numResult1 = num3 ** num4;
console.log(`${num3} ** ${num4} = `, numResult1);

console.log("BEGIN PRACTICE EXERCIZES");
console.log("MODULUS OPERATORS");
let number = 10;
let number1 = 3;
let modulusResult = number % number1;
console.log(`${number} % ${number1} = `, modulusResult);

let number2 = 8;
let number3 = 2;
let modulusResult0 = number2 % number3;
console.log(`${number2} % ${number3} = `, modulusResult0);

let number4 = 15;
let number5 = 4;
let modulusResult1 = number4 % number5;
console.log(`${number4} % ${number5} = `, modulusResult1);

console.log("BEGIN PRACTICE EXERCIZES");
console.log("UNARY OPERATORS");
let unaryNr = 4;
console.log(`${unaryNr}++ equals `, ++unaryNr);

let unaryNr0 = 5;
console.log(`${unaryNr}-- equals `, --unaryNr0);

console.log("BEGIN PRACTICE EXERCIZES");
console.log("PREFIX AND POSTFIX UNARY OPERATORS");
let unaryNr1 = 2
console.log(`${unaryNr}++ + ++${unaryNr0} * ${unaryNr1}++ equals `, (unaryNr++ + ++unaryNr0 * unaryNr1++) );

/* console.log("2.3 EXERCISE QUIZ");
console.log("Calculate the hypotenuse of a triange using the Pythagorean theorem when given the value of 2 sides");
console.log("use prompt() for a and b, square both values, then add them, finally find the square root.");
let a = prompt("Please enter the value for a in the formula a^2+b^2=c^2");
console.log(`a now ='s ${a}`);
let b = prompt("Please enter the value for b in the formula a^2+b^2=c^2");
console.log(`b now ='s ${b}`);
console.log ("lets square a first");
a = a ** 2;
console.log(`a now ='s ${a} by doing the following behind the scene "a = a ** 2"`);
console.log ("lets square b next");
b = b ** 2;
console.log(`b now ='s ${b} by doing the following behind the scene "b = b ** 2"`);
console.log(`The formula is now "${a} + ${b} = c^2"`);
result = a + b
console.log("a + b = ", result);
console.log("c^2 = ", result);
c = result ** .5;
console.log(`c = ${c} by doing the following "(a+b) ** .5"`); */

console.log("PRACTICE EXERCISE QUIZ 2.4");
console.log("ADDITIONAL ASSIGNMENT OPERATORS")
let a = 1;
let b = 2;
let c = 3;
console.log(b += a);
console.log(a /= c);
console.log(c %= b);

console.log("PRACTICE EXERCISES COMPARISION OPERATORS");
console.log("EQUAL IN VALUE vs VALUE & DATATYPE (JAVASCRIPT SPECIFIC)");
let x = 5;
let y = "5";
let xy = (x == y);
let xyFalse = (x === y);
console.log(`${x} == "${y}" returns `, xy);
console.log(`However ${x} === "${y}" returns `, xyFalse);
console.log("NOT EQUAL COMPARISION OPERATORS");
let w = 5;
let q = "5";
let wq = (w != q);
let wqTrue = (w !== q);
console.log(`${w} != "${q}" returns `, wq);
console.log(`However ${w} !== "${q}" returns `, wqTrue);
console.log("GREATER THAN OPERATORS");
let d = 5;
let e = "5";
let de = (d > e);
let deGrEq = (d >= e);
let dd = (d > d);
let ddEq = (d >= d)
console.log(`${d} > "${e}" returns, `, de);
console.log(`${d} >= "${e}" returns `, deGrEq);
console.log(`${d} > ${d} returns `, dd);
console.log(`${d} >= ${d} returns `, ddEq);

console.log("LESS THAN OPERATORS");
console.log(`${d} < "${e}" returns `, de);
console.log(`${d} <= "${e}" returns `, deGrEq);
console.log(`${d} < ${d} returns `, dd);
console.log(`${d} <= ${d} returns `, ddEq);

console.log("LOGICAL OPERATORS");
console.log("AND OPERATOR");
let one = 1;
let two = 2;
let three = 3;
let and1 = (one < two) && (two < three);
let and2 = (one > two) && (two < three);
console.log(`(${one} < ${two}) && (${two} < ${three}) returns `, and1);
console.log(`(${one} > ${two}) && (${two} < ${three}) returns `, and2);

console.log("OR OPERATOR");
let or1 = (one > two) || (two < three);
let or2 = (one > two) || (two > three);
console.log(`(${one} > ${two}) || (${two} < ${three}) returns `, or1);
console.log(`(${one} > ${two}) || (${two} > ${three}) returns `, and2);

console.log("NOT OPERATOR");
let f = false;
console.log(`!${f} returns `, !f);
console.log(`!(${one} < ${two}) returns `, !(one < two));

//CHAPTER PROJECT BEGIN
console.log("\n");
console.log("~~`~`~`~`~`~`~`~~");
console.log("CHAPTER PROJECT");
console.log("MILES TO KILOMETERS CONVERTER");
console.log("~~`~`~`~`~`~`~`~~");

/*CREATE A VARIABLE THAT CONTAINS A VALUE IN MILES
 CONVERT IT TO KILOMETERS
 AND PRINTS THE VALUE IN KILOMETERS
 IN THE FOLLOWING FORMAT
 "THE DISTANCE OF 130 KMS IS EQUAL TO 209.2142 MILES"*/

 //Given the miles
 let miles = 2;
 //When converted
 let kilometerConvert = (miles * 1.60934)
//Then print the message
console.log(`The distance of ${kilometerConvert} kms is equal to ${miles} miles.`);

console.log("\n");
console.log("~~`~`~`~`~`~`~`~~");
console.log("CHAPTER PROJECT");
console.log("BMI CALCULATOR");
console.log("~~`~`~`~`~`~`~`~~");

/*set values for height in inches and weight in pounds,
 then convert the values to centimeters and kilos,
 oututting the results to console
 1 inch = 2.54 cm
 2.2046 pounds = 1 kg*/

 //Given the height and weight
 let height = 72
 let weight = 175
 //When the units are coverted to kilos and centemeters
 let heightConvert = (height * 2.54);
 let weightConvert = (weight / 2.2046);
 console.log(`current height ${height} inches, weight ${weight}\nwhich is ${heightConvert} centemeters, and ${weightConvert} kilograms`)
 let bmi = weightConvert/((heightConvert/100) ** 2);
 console.log(bmi + "is the bmi.")