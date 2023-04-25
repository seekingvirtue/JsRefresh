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

