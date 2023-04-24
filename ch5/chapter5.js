//BEGIN CHAPTER 5 PAGE 112
  /*
  WE WILL LOOK AT THE FOLLOWING LOOPS
  while
  do while
  for 
  for in
  for of
  NOTE THAT foreach IS OMITTED UNTIL THE NEXT CHAPTER
  */

//while loops
{
    /*
    while(condition){
        execute code
    }
    */

    console.log("Lets count to ten with a while loop");
    //create a variable and set to 0
    let i = 0;
    //start a while loop anc check if the variable is less than 10
    while(i <= 10) {
        console.log(i);
        i++;
    }
    
    console.log("Lets try with arrays");
    //make an array and a boolean
    let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jackey"];
    let notFound = true;
    //check to see if the first value of the array is the desired name, if not shift and try again.
    while (notFound && someArray.length > 0) {
        if (someArray[0] === "Louiza") {
            console.log("Found her!");
            notFound = false;
        } else {
            console.log(someArray.shift());
        }
    }

    console.log("Now lets try some Fibonacci sequences");
    //lets make two number variables, a placeholder, and the array.   
    let nr1 = 0;
    let nr2 = 1;
    let temp;
    let fibonacciArray = [];
    //check to see if the array's length is 25, if not add the first number to the array, then calculate. 
    while (fibonacciArray.length < 25) {
        fibonacciArray.push(nr1);
        temp = nr1 + nr2;
        nr1 = nr2;
        nr2 = temp;
    }
    console.log(fibonacciArray);
}

// console.log("PRACTICE EXERCISE 5.1 NUMBER GUESSING GAME");
// {

//     //generate a random number as the solution
//     let solution = Math.floor(Math.random() * 6);
//     //add a cheat for debugging
//     console.log("The solutions is " + solution);
//     //set the while loop condition
//     let answerCorrect = false;
    
//     //ask the player for a number and evalutate to see if it is correct
//     while (!answerCorrect) {
//         //ask for the user's guess
//         let userGuess = prompt("Enter a number between 0 and 5");
//         /*
//             check the user's input to see if it is allowed, 
//             if it is allowed, check to see if it matches the solution number,
//             if it does not match the solution number, ask the user to try again
//         */
//         if (Number(userGuess) > 5 || isNaN(userGuess)) {
//             console.log("Thats not an allowed guess, please try again")
//         } else if (Number(userGuess) === solution) {
//             console.log("You win! " + solution + " was the right number");
//             //if the answer is correct, break from the loop
//             answerCorrect = true;
//         } else {
//             console.log("Thats incorrect please try again")
//         }
//     }
// }


// //do while loops
// {
//     /*
//         do {
//             code to be exicuted once and iterated if the condition is true
//         } while (condition)
//     */

//     let number;
//     do {
//         number = prompt("Please enter a number between 1 and 100: ");
//     } while (!(number >= 0 && number < 100));

// }

console.log("PRACTICE EXERCISE 5.2");
{
    //THE DYNAMIC COUNTER
    //set the starter to 0
    let startCounter = 0;
    //set a counter to increase the amount by
    let step = 3;
    //in a do while loop, print the counter
    do {
        console.log(startCounter);
        startCounter += step;
    } while (startCounter < 100); //continue the loop until it is more than 100

}

//for loops
{
    /*
        for (initialize variable; condition; statement) {
            code to be executed
        }
    */

    for (let i = 0; i < 10; i++) {
        console.log(i);
    }

    //for loops adding items to an array
    let arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(i);
    }
    console.log(arr);

    //an array with only even numbers
    let arr2 = [];
    for (let i = 0; i < 100; i += 2) {
        arr2.push(i);
    }
    console.log(arr2); 
}

console.log("PRACTICE EXERCISE 5.3");
{
    let myWork = [];
    for (let i = 0; i < 10; i++) {
        let lesson = {
            name: "Lesson " + (i + 1),
            status: (i % 2) === 0 ? true : false
        }
        myWork.push(lesson);   
    }
    console.log(myWork); 
}

//nested loops
{
    //often times this is a sign of poorly written code
    /*
        while (condition 1) {
            //code that gets exicuted if condition 1 is true
            while (condition 2) {
              //code that gets exicuted uf condition 2 is true  
            }
        }
    */

    console.log("lets make an array of arrays with nested for loops");
    let arrOfArray = [];
    for (let i = 0; i < 3; i++) {
        arrOfArray.push([]);
        for (let j = 0; j < 7; j++) {
            arrOfArray[i].push(j);
        }
    }
    console.log(arrOfArray);
    console.table(arrOfArray);
}

console.log("PRACTICE EXERCISE 5.4");
{
    //GENERATING TABLES AND VALUES
    let myTable = [];
    let rows = 9;
    let columns = 7;
    let counter = 0;
    for (let i = 0; i < rows + 1; i++) {
        let tempTable = [];        
        for (let j = 0; j < columns + 1; j++) {
            counter++;
            tempTable.push(counter);
        }
        myTable.push(tempTable);
    }
    console.log(myTable); 
    console.table(myTable);
}

//loops and arrays
{
    /*
        let arr = [some array];
        for (initialize variable; var smaller than arr.length; statement)
        {
            // code to be executed
        }
    */
   console.log("Simple example, logging every value in an array");
   let names = ["Chantel", "John", "Maxime", "Bobbi", "Jair"];
   for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
   }

   //lets change the array with a loop
   let names2 = ["Chantel", "John", "Maxime", "Bobbi", "Jair"];
   for (let i = 0; i < names2.length; i ++) {
    names2[i] = "hello " + names[i];
   }
   console.log(names2);

   //lets filter with a loop
   let names3 = ["Chantel", "John", "Maxime", "Bobbi", "Jair"];
   for (let i = 0; i < names3.length; i++) {
    if (names3[i].startsWith("M")){
        delete names3[i];
        continue;
    }
    names3[i] = "hello " + names3[i];
   }
   console.log(names3);
}

console.log("PRACTICE EXERCISE 5.5");
{
    //EXPLORE HOW TO MAKE A TABLE GRIDE USING NESTED ARRAYS
    let grid = [];
    let cells = 64;
    let counter = 0;
    let row;

    for (let i = 0; i < (cells + 1); i++) {
        if (counter % 8 == 0) {
            if (row != undefined) {
                grid.push(row);
            }
            row = [];
        }
        counter++
        row.push(counter);

    }
    console.table(grid);
    console.log(row)
}

//for of loop
{
    /*
        let arr = [some array];
        for (let variableName of arr ) {
            // code to be executed
            // value of variableName gets updated every iteration
            // all values of the array will be a variablName once
        }
    */ 
   // I read like this in my head, "For every value in the array, call it variableName and do the following"
   // console.log names in a names array
   let names = ["Chantel", "John", "Maxime", "Bobbi", "Jair"];
   for (let name of names) {
    console.log(name);
   }
}

console.log("PRACTICE EXERCISE 5.6");
{
    //create an empty array, run a loop 10 times and add incrementing values to the array.
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(i);
    }
    console.log(arr);

    //using the same array, log each individual value of the array to the console.
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    //Do the same thing as above, but with a for of loop
    for (let number of arr) {
        console.log(number + " done with for of looping.");
    }
}

console.log("BEGINNING LOOPS ON OBJECTS")
//for in loop
{
    let car = {
        model: "Golf",
        make: "Volkswagen",
        year: 1999,
        color: "black"
    };
    
    console.log("LOGGING VALUES OF EACH CAR.PROP");
    for (let props in car) {
        console.log(car[props]);
    }

    console.log("LOGGING THE PROPERTY NAMES OF CAR.PROP");
    for (let props in car) {
        console.log(props);
    }

    console.log("NOW LOG THEM BOTH");
    for (let props in car) {
        console.log(props + " : " + car[props]);
    }
}

console.log("PRACTICE EXERCISE 5.7");
{
    // create an object with three properties
    let desk = {
        style: "Modern",
        shape: "Oval",
        maxWeight: 300
    };
    
    // with a for in loop, get the property names and values and output to console
    for (let props in desk) {
        console.log(props + ": " + desk[props]);
    }

    // create an array with the same three items, output to console.
    let arr = [];
    for (let props in desk) {
        arr.push(props + ": " + desk[props])
    }
    console.log(arr);

}

// looping over objects by converting to an array
{
    let car = {
        model: "Golf",
        make: "Volkswagen",
        year: 1999,
        color: "black"
    };
    
    // js built-in function that takes an object and all the properties then converts it to an array
    // Object.keys(nameOfObject);
    // Object.values(nameOfObject);
    // Object.entries(nameOfObject);
    
    // Make an array of the object's keys (property names)
    let arrKey = Object.keys(car);
    console.log(arrKey);

    // Print each key with for of loop
    for (let key of Object.keys(car)) {
        console.log(key);
    }

    // Print each property value with a for of loop
    for (let value of Object.values(car)) {
        console.log(value);
    }

    // Print each key and value for the object with a for loop
    for (let i = 0; i < arrKey.length; i++) {
        console.log(arrKey[i] + ": " + car[arrKey[i]]);
    }

    // loop over bother arrays at the same time
    let arrEntries = Object.entries(car);
    console.log(arrEntries);

    // loop over the 2 dimentional array and print to console
    for (const [key, value] of Object.entries(car)) {
        console.log(key, ":" , value);
    }
}

//break and continue
{
    //we will use this array of cars to demonstrate
    let cars = [
        {
            model: "Golf",
            make: "Volkswagen",
            year: 1999,
            color: "black"
        },
        {
            model: "Picanto",
            make: "Kia",
            year: 2020,
            color: "red"
        },
        {
            model: "Peugeot",
            make: "208",
            year: 2021,
            color: "black"
        },
        {
            model: "Fiat",
            make: "Pinto",
            year: 2020,
            color: "black"
        }
    ];

    //break example
    for (let i = 0; i < 10; i++) {
        console.log(i);
        //demonstrating break usage outside of switch statements
        if (i === 4) {
            break;
        }
    }

    //lets find a car that matches some critera with and break when it is found
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].year >= 2020) {
            if (cars[i].color === "black") {
                console.log("I have found my new car!", cars[i]);
                //this is not best practice, just illustration
                break;
            }
        }
    }
    
    //try to work with the condition of the loop, rather than break,
    //consider this loop with a break.

    let superLongArray = [1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,11,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,1,1,42];
    while (true) {
        if (superLongArray[0] != 42 && superLongArray.length > 0) {
            superLongArray.shift();
        } else {
            console.log("Found 42!");
            break;
        }
    }

    //the above is better written without the break
    let notFound = true;
    while (superLongArray.length > 0 && notFound) {
        if (superLongArray[0] != 42) {
            superLongArray.shift();
        } else {
            console.log("Found 42!");
            notFound = false;
        }
    }

    //continue will move onto the next iteration of the loop
    for (let car of cars) {
        if (car.color !== "black") {
            continue;
        };
        if (car.year >= 2020) {
            console.log("We could get this one:", car);
        }
    }
}

console.log("PRACTICE EXERCISE 5.8");
{
    //set up a variable for output, count in a loop and update the output counter each time. Skip a number and break/continue to see results.
    let output = 0;
    let numberToSkip = 7;
    
    for (let i = 0; i < 10; i++) {
        if (i === numberToSkip) {
            break //or continue;
        }
        output+=1
    }

    console.log(output);
}

//break and continue in nested loops
{
    //Important to remember, when break or continue is used in nested loop, the outer loop will not break.
    //We will use this array for break and continue in nested loops
    let groups = [
        ["Martin", "Daniel", "Keith"],
        ["Margot", "Marina", "Ali"],
        ["Helen", "Jonah", "Sambikos"],
    ];

    //lets find the group that has two names starting with "M"
    for (let i = 0; i < groups.length; i++) {
        matches = 0;
        for (let j = 0; j < groups.length; j++) {
            if (groups[i][j].startsWith("M")) {
                matches++;
            } else {
                continue;
            }
            if (matches === 2 ) {
                console.log("Found a group with two names starting with an M:");
                console.log(groups[i]);
                break;
            }
        }
    }

    //another way to for of loop and list the names, unfortunately it only find the first value.
    for (let group of groups) {
        for (let member of group) {
            if(member.startsWith("M")) {
                console.log("found one starting with M: ", member);
                break;
            }
        }
    }
}

//break and continue and labeled blocks
{
    let groups = [
        ["Martin", "Daniel", "Keith"],
        ["Margot", "Marina", "Ali"],
        ["Helen", "Jonah", "Sambikos"],
    ];
    //We can break out of the outer loop from inside the inner loop, but only if we give a label to our loop like so:
    outer: //label which can pretty much be anything I just used "outer" and "inner" as labels
    for (let group of groups) {
        inner: 
        for (let member of group) {
            if (member.startsWith("M")) {
                console.log("Again, found one starting with M: ", member);
                break outer; // break the labeled loop, in this case the outer one.
            }            
        }
    }
}

console.log("CHAPTER PROJECTS");
{
    console.log("Math Multiplication Table:");
    //setup a blank array to hold the final table
    let multiplicationTable = [];
    //how many values you want to multiply with
    let values = 7;
    //create outer for loop
    outer:
    for (let r = 0; r < values + 1; r++) {
        let temp = [];
        inner:
        for (let c = 0; c < values + 1; c++) {
            temp.push(r * c);
        }
        multiplicationTable.push(temp);
    }
    console.log(multiplicationTable);
    console.table(multiplicationTable);
}