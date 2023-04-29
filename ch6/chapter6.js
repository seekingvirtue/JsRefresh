/*
BEGIN CHAPTER 6 starting page 142
WE WILL LOOK AT THE FOLLOWING

- Basic functions
- Function arguments
- Return
- Variable scope in functions
- Recursive Functions
- Anonymous functions
- Function callbacks
*/

console.log("WRITING FUNCTIONS");
console.log(`
        function nameOfTheFunction() {
            //content of the function
        }
`);
{
    // // make a function that asks for your name then greets you
    // function sayHello() {
    //     let you = prompt("What's your name? "); // you can have vaiables in functions
    //     console.log("Hello", you + "!");
    // }
    // // call the function
    // sayHello();

    // make a function that logs to console some a phrase
    let varContainingFunction = function() { // notice that variables can have funtions inside them
        let varInFunction = "I'm in a function!";
        console.log("Hi there!", varInFunction);
    }
    // call the function
    varContainingFunction(); //notice the parenthesis on the variable name
}

console.log("PRACTICE EXERCISE 6.1");
{
    // write a function that adds two numbers
    function addTwoNumbers(first, second) { // arguements / parameters were not introduced yet
        return Number(first) + Number(second); // this keyword was not introduced yet
    }
    // declare some number variables
    let number1 = 1;
    let number2 = 2;
    // add them using the function, print to console
    console.log(addTwoNumbers(number1, number2));
}

console.log("PRACTICE EXERCISE 6.2");
// {
//     // write a program that will randomly describe a name
//     // make an array of description words
//     let descriptionsArray = ["old",
//                             "ugly",
//                             "young",
//                             "beautiful",
//                             "grouchy",
//                             "helpful"];
//     // make a function asking for a name
//     function askNameAndDescribe() {
//         let name = prompt("What's your name?");
//         // use a random number to pick a description from the list and print to console.
//         console.log(name, "is a", descriptionsArray[Math.floor(Math.random() * 6)], "name!"); // wasn't sure this would work, but it did!
//     }
//     // invoke the function
//     askNameAndDescribe();
// }

console.log("PARAMETERS AND ARGUMENTS");
console.log(`
        function tester(para1, para2) {
            return para1 + " " + para2;
        }
        const arg1 = "argument 1";
        const arg2 = "argument 2";
        tester(arg1, arg2);
`);
{
    // parameters are the variables listed inside the parentheses of a function
    // x and y in the below example are parameters
    function addTwoNumbers(x, y) {
        console.log(x + y);
    }
    // arguements are the values passed to the function when invoked
    // 1 and 2 in this case are arguements
    addTwoNumbers(1, 2);

    //other examples of arguements
    console.log("this is an arguement");
    let arr = [];
    arr.push("arguement here top");    
}

console.log("PRACTICE EXERCISE 6.3");
{
    // create a basic addition and subtraction calculator taking a string parameter for + or -
    // set up vars to contain number values
    let number1 = 1
    let number2 = 2;
    // set up variable to hold the operator
    let operation = "-";
    // create a function that retrieves the values and operator, add or subtract accordingly
    function addOrSubtract(num1, num2, operation) {
        if (operation === "-") {
            return Number(num1) - Number(num2);
        } else {
            return Number(num1) + Number(num2);
        }
    }
    //log to console
    console.log(addOrSubtract(number1, number2, operation));
}


console.log("DEFAULT OR UNSUITABLE PARAMETERS");
{
    function addTwoNumbers(x, y) {
        console.log(x + y);
    }

    // what happens when you call without parameters?
    console.log(addTwoNumbers()); // NaN

    // adding default parameters
    function addTwoNumbersAgain(x = 3, y = 4) {
        console.log(x + y);
    }
    addTwoNumbersAgain(); // 7
    addTwoNumbersAgain(6, 6); // 12, notice the defaults were replaced.
    addTwoNumbersAgain(10); // 14, notice only x was replaced.
    addTwoNumbersAgain(3, 1, 3, 3, 3, 3, 3, 3, 9); // 4 notice the extra parameters are just ignored
}

console.log("SPECIAL FUNCTIONS AND OPERATORS");
{
    // lets look at some special ways to handle functions and some special operators
    console.log("Arrow function styles");
    console.log("Single line");
    console.log(`
        (param1, param2) => body of the function
    `);
    console.log("Without parameters");
    console.log(`
        () => body of function
    `);
    console.log("If only one parameter");
    console.log(`
        param1 => body of function
    `);
    console.log("Lastly, multiline function with multiple parameters");
    console.log(`
        (param1, param2) => {
            line 1
            line 2
            line etc.
        }
    `);

    // lets rewrite the following with an arrow function
    function doingStuff(x) {
        console.log(x);
    }

    //to rewrite as an arrow function you have to store it inside of a variable
    let doingArrowStuff = x => console.log(x); //single parameter implementation
    doingArrowStuff(); // no supplied arguement will return undefined
    doingArrowStuff("I did an arrow thing.");

    // further examples
    let addTwoNumbers = (x, y) => console.log(x + y);
    addTwoNumbers(5, 3);

    let sayHi = () => console.log("hi");
    sayHi();

    // combine arrow function with built-in methods
    const arr = ["squirrel", "alpaca", "buddy"];
    arr.forEach(e => console.log(e));
}

console.log("SPREAD OPERATOR");
{
    /*
        indicated with an elipsis "..."
        the operator spreads out the arguements or elements of an array
    */
   let spread = ["so", "much", "fun"];
   let message = ["JavaScript", "is", ...spread, "and", "very", "powerful"]; //notice the elipsis

   console.log(message);

   for (let e in message) {
    console.log(message[e]);
   }

   // using spread to send multiple arguements to a function
   function addTwoNumbers(x, y) {
    console.log(x + y);
   }
   let arr = [5, 9];
   addTwoNumbers(...arr) // notice the spread operator again

   // calling a function with multiple spread operators
   function addFourNumbers(x, y, z, a) {
    console.log(x + y + z + a);
   }
   let arr2 = [6, 7];
   addFourNumbers(...arr, ...arr2) // notice two different arrays using the spread
}

console.log("REST PARAMETER");
{
    // similar to the spread operator
    // allows us to send in any number of arguements and translates them into a parameter array
    function functWithRest(param1, ...paramRest) { // notice the elipsis is now a parameter making it the REST operator
        console.log(param1, paramRest);
    }
    functWithRest("hi", "there", "how are you?"); // notice three arguements, without the ...paramRest, the thrid would be ignored
    // prints "hi ['there', 'how are you?']" notice the second parameter became an array
}

console.log("RETURNING FUNCTION VALUES");
{
    // functions can hand back a result when we specify a return value.
    // return values can be stored in a variable
    function addTwoNumbers(x, y) {
        console.log(x + y);
    }
    let result = addTwoNumbers(4, 5);
    console.log(result); // retuns undefined because nothing is inserted into the function to store the result

    // lets fix the function
    function addTwoNumbersAgain(x, y) {
        return x + y; // notice the RETURN key word
    }
    let resultAgain = addTwoNumbersAgain(4, 5);
    console.log(resultAgain); // prints 9

    // the function can now be used in a loop
    let resultArray = [];

    for (let i = 0; i < 10; i++) {
        let result = addTwoNumbersAgain(i, 2*i);
        resultArray.push(result);
    }

    console.log(resultArray);
}

console.log("PRACTICE EXERCISE 6.4");
{
    /**
        Modify the calculator that was made in 6.3 to return added values instead of printing them.
        Then call the function 10 or more times in a loop, and store the results in an array.
        When the loop finishes, output the final array into the console
    **/ 

    function addOrSubtract(num1, num2, operation) {
        if (operation === "-") {
            return Number(num1) - Number(num2);
        } else {
            return Number(num1) + Number(num2);
        }
    }

    let calculatedArray = [];
    for (let i = 0; i < 10; i++) {
        let val1 = i * 5;
        let val2 = i * i;
        let result = addOrSubtract(val1, val2, "+");
        calculatedArray.push(result);
    }
    console.log(calculatedArray);
}

console.log("RETURNING WITH ARROW FUNCTIONS");
{
    // with one line arrow functions, we can return without using the keyword RETURN.
    // lets rewrite one of the functions from above.
    let addTwoNumbers = (x, y) => x + y;
    let result = addTwoNumbers (12, 15);
    console.log(result);

    // multiline arrow functions will need to have the keyword RETURN
    let addTwoNumbersAgain = (x, y) => {
        console.log("Adding...");
        return x + y;
    }
    console.log(addTwoNumbersAgain(12, 15));
}

console.log("VARIABLE SCOPE IN FUNCTIONS");
{
    // scope defines where you can access a certain variable
    console.log("Local variables in functions");
    
    // examine the variable x in the below function
    function testAvailability(x) {
        console.log("Available here:", x);
    }

    testAvailability("Hi");
//  console.log("Not available here", x) // trying to access x here will throw a ReferenceError because it is out of scope.

    // an additional example
    function testAvailabilityAgain() {
        let a = "Local Variable";
        console.log("Available here:", a);
    }
    testAvailabilityAgain();
//  console.log("Not available here:", a) // trying to access a here will throw a ReferenceError because it is out of scope.

    // if you need a value from a variable declared inside a function, use the RETURN keyword
    function testAvailabilityThird() {
        let y = "I'll return";
        console.log("Available here:", y);
        return y; //notice we are now RETURNing the variable's value
    }

    let z = testAvailabilityThird();  // the value of y is now assigned to z
    console.log("Outside the function", z); 
//  console.log("Still not available here:", y); // trying to access y here will throw a ReferenceError because it is out of scope.
}

console.log("let versus var variables");
{
    // var is function scoped
    // let is blocked scope
    // a block is defined by two curly braces { }

    function doingStuff() {
        if (true) {
            var x = "local";
        }
        console.log(x) // this works because x was declared with var
    }

    doingStuff();

    // another difference is order of declaration.

    /*
        // This will error
        function doingStuffAgain() {
            if (true) {
                console.log(x);
                let x = "local" // variables with let cannot be accessed before being defined, even in the same block
            }
        }
    */
    // To correct the above with var:
    function doingStuffThird() {
        if (true) {
            console.log(x);
            var x = "local";
        }
    }
    doingStuffThird(); // returns undefined, rather than a reference error. See "hoisting" in chapter 12.
}

console.log("const scope");
{
    //constants are blocked scope just like let.
    /*
    function doingStuff() {
        if (true) {
            const X = "local"
        }
        console.log(X); // this will throw a reference error
    }
    doingStuff();
    */
}

console.log("Global Variables");
{
    // global variables are declared outside a function and not in some other code block.
    // variables defined outside of a function are available inside a function.
    // examine:
    let globalVar = "Accessible everywhere!";
    console.log("Outside function:", globalVar);

    function creatingNewScope(x) {
        console.log("Access to global vars inside function.", globalVar, x);
    }

    creatingNewScope("some parameters");

    console.log("Still Available:", globalVar);

    // if you create a variable with the same name inside a function,
    // that variable's value will be used whenever you refer to that variable name within the scope of that particular function

    let x = "global";

    function doingStuff() {
        let x = "local";
        console.log(x); // the value of x is "local"
    }
    
    doingStuff();
    console.log(x); // the value of x is "global"

    // the same is true for parameter names

    let y = "global";

    function doingStuffAgain(y) {
        console.log(y);
    }

    doingStuffAgain("parameter");
    console.log(y);

    // defining variables without a keyword const, let, or var makes them global by default
    function confuseReader() {
        z = "Guess my scope..."; // define variable without keyword
        console.log("Inside the function:", z);
    }
    
    confuseReader();
    console.log("Outside the function:", z)
}

console.log("Immediately invoked function expression (IIFE)");
{
    // IIFEs are anonymous functions -- without a name -- and is self executing
    (function () {
        console.log("IIFE!");
    })();

    // IIFE with arrow function pattern
    (()=>{
        console.log("Right away!");
    })();
}

console.log("PRACTICE EXERCISE 6.5");
{
    // Use IIFEs to create a few functions and observe how the scope is affected
    let value = "1000";

    (()=>{
        let value = "0001";
        console.log(value);
    })();

    let result = (()=>{
        let value = "1100";
        return value;
    })();

    console.log(result, value);

    ((value)=>{
        console.log(`My name is ${value}`);
    })("Jesse");
}