//BEGINNING CHAPTER 4 OF JAVASCRIPT BEGINNING TO PROFESSIONAL
console.log("IF AND IF ELSE STATEMENTS");
{
    //LETS MAKE SOME DECISIONS WITH CODE:
    let rain = true;

    if(rain) {
        console.log("** Taking my umbrella when I need to go outside **");
    } else {
        console.log("** I can leave my umbrella at home **")
    };
    
    console.log("PRACTICE EXERCISE 4.1");
    {
        //CREATE A VARIABLE WITH A BOOLEAN VALUE
        let bool1 = false;
        //output the var to the console
        console.log(bool1);
        //check whether the variable is true and if so, output a message to the console.
        if(bool1) {
            console.log("this is a true block hit");
        } else {
            console.log("the bool is not true");
        };
        //Check to make sure expression is not true with "!"
        if(!bool1) {
            console.log("this boolean is !false ");
        } else {
            console.log("this bool is !true");
        };
    }
}
console.log("ELSE IF STATEMENTS");
{
    let age = 10;
    let cost = 0;
    let message;
    if (age < 3) {
        cost = 0;
        message = "Access is free under 3";
    } else if (age >= 3 && age < 12){
        cost = 5;
        message = "With the child discount, the fee is 5 dollars.";
    } else if (age >= 12 && age <= 65) {
        cost = 10;
        message = "A regular ticket costs 10 dollars";
    } else {
        cost = 7;
        message = "a ticket is 7 dollars";
    }
    console.log(message);
    console.log("Your Total cost " + cost );
}

// console.log("PRACTICE EXERCISE 4.2");
// {
//     //create a prompt asking for the users age.
//     let userAge = prompt("What is your age?");
//     //convert response to a number.
//     Number(userAge);
//     let message;
//     //validate age
//     if (userAge >= 21) {
//         message = "Allow entry with alcohol purchase.";
//     } else if (userAge >= 19) {
//         message = "Allow entry without alcohol purchase.";
//     } else {
//         message = "No entry allowed.";
//     }
//     console.log(message);
// }

console.log("CONDITIONAL TERNARY OPERATORS");
{
    let age = 12
    let access = age < 18 ? console.log("denied") : console.log("allowed");
}

console.log("PRACTICE EXERCISE 4.3");
{
    //create a boolean for an ID variable
    let idVar = true;
    //using a ternary operator, create a message var that will check to see if ID is valid or not.
    let message = idVar = true ? console.log("allowed") : console.log("denied");
}

console.log("SWITCH STATEMENTS");
{
    //HERE IS A REALLY LONG IF STATEMENT
    let activity = ""
    if(activity === "Get up") {
        console.log("It is 6:30AM");
    } else if(activity === "Breakfast") {
        console.log("It is 7:00AM");
    } else if(activity === "Drive to work") {
        console.log("It is 8:00AM");
    } else if(activity === "Lunch") {
        console.log("It is 12:00PM");
    } else if(activity === "Drive Home") {
        console.log("It is 5:00PM");
    } else if(activity === "Dinner") {
        console.log("It is 6:30PM");
    } else {
        console.log("I cannot determine the current time.");
    };
    /* 
     Syntax for a switch statement
     switch(expression) {
        case value1:
            //code to be exicuted
            break;
        case value2:
            //code to be exicuted
            break;
        case value-n:
            //code to be exicuted
            break;
     }
    */
   console.log("let us make a switch statement for the same if statement");
   activity = "Drive t work";
   switch(activity) {
    case "Get up":
        console.log("It is 6:30AM");
        break;
    case "Breakfast":
        console.log("It is 7:00AM");
        break;
    case "Drive to work":
        console.log("It is 8:00AM");
        break;
    case "Lunch":
        console.log("It is 12:00PM");
        break;
    case "Drive home":
        console.log("It is 5:00PM");
        break;
    case "Dinner":
        console.log("It is 6:30PM");
        break;
    default:
        console.log("I cannot determine the time.");
   }
}

console.log("PRACTICE EXERCISE 4.4");
{
    //MAGIC 8BALL USING RANDOM AND SWITCH STATEMENT
    //SET A VARIABLE THAT GETS A RANDOM VALUE BETWEEN 0 AND < 5
    let randomNumber = Math.floor(Math.random() * 5);
    //CREATE A PROMPT TO GET A STRING FROM THE USER
    let userInput;
    userInput = prompt("Please ask the 8ball a question.");
    console.log(userInput);
    //CREATE 6 RESPONSES USING A SWITCH STATMENT USING A VALUE FROM THE RANDOM GENERATOR
    let message;
    switch(randomNumber) {
        case 0:
            message = "Not likely"
            break;
        case 1:
            message = "Definately No";
            break;
        case 2:
            message = "Pretty likely";
            break;
        case 3:
            message = "Maybe";
            break;
        case 4:
            message = "Definately yes";
            break;
        default:
            message = "Something went wrong.";
            break;            
    }
    console.log(`You asked: ${userInput}, the 8ball says: ${message}`);    
}
    //COMBINING CASES
    //SIMILAR ACTION TO AN OR (||) CLAUSE IN AN IF STATEMENT
    //GRADE OUTPUT
    let grade = "C";
    switch(grade) {
        case "F":
        case "D":
            console.log("You've Failed!");
            break;
        case "C":
        case "B":
            console.log("You've passed");
            break;
        case "A":
            console.log("Nice");
            break;
        default:
            console.log("I don't know that grade");
    }

console.log("PRACTIVE EXERCISE 4.5");
{
    //CREATE A VARIABLE CALLED PRIZE AND USE A PROMPT TO ASK THE USER TO SET THE VA;UE TO 0-10
    let prize = prompt("Please set a number between 1 and 10");
    //CONVERT TO A NUMBER
    prize = Number(prize);
    console.log(prize);
    //CREATE A VARIABLE TO USE FOR THE OUTPUT MESSAGE CONTAINING THE VALUE "My Selection: "
    let outputMessage = "My Selection: ";
    //USING A SWITCH STATEMEMENT, PROVIDE A RESPONSE BACK REGARDING THE PRISE
    let winning;
    switch(prize) {
        case 1:
            winning = "Goats";
            break;
        case 2:
            winning = "Pigs";
            break;
        case 3:
            winning = "Chickens";
            break;
        case 4:
            winning = "Cows";
            break;
        case 5:
            winning = "Fish";
            break;
        case 6:
            winning = "Goats";
            break;
        case 7:
        case 8:
        case 9:
            winning = "House";
            break;
        case 10:
            winning = "The whole farm";
            break;
        default:
            "Something went wrong";
    }
    console.log(`${outputMessage}${prize}, you won the ${winning}!`);
}

console.log("CHAPTER PROJECTS");
{
    //EVALUTATING A NUMBER GAME
    //ASK THE USER TO ENTER A NUMBER AND SEE IF IT IS >, <, OR = TO A DYNAMIC NUMBER
    let rndNmb = Math.floor(Math.random() * 100);

    let userNumber = prompt("Please select a number between 1 and 100");

    if(userNumber > rndNmb){
        console.log(`You chose ${userNumber} and the computer chose ${rndNmb}, yours is greater.`);
    } else if(userNumber < rndNmb){
        console.log(`You chose ${userNumber} and the computer chose ${rndNmb}, yours is less.`);
    } else {
        console.log("The numbers are equal");
    }

    //FRIEND CHECKER
    //ASK THE USER FOR THEIR NAME, USING A SWITCH STATMENT, SEE IF THEY ARE ON THE FRIEND LIST
    let userName = prompt("Please enter your name.");
    switch(userName) {
        case "Jim":
            console.log("Hi Jim!");
            break;
        case "Jane":
            console.log("Hi Jane")
            break;
        default:
            console.log("I don't know you.");
    }

    //ROCK, PAPER, SCISSORS GAME
    //CREATE AN ARRAY THAT CONTAINS ROCK PAPER SCISSORS
    let gameArray = ["Rock","Paper","Scissors"];
    //GENERATE THE INDEX NUMBER FOR USERS AND COMPUTER
    let playerRndNmb = Math.floor(Math.random() * 3);
    let computerRndNmb = Math.floor(Math.random() * 3);
    //CREATE A RESPONSE MESSAGE
    console.log(`The player chose ${gameArray[playerRndNmb]}, and the computer got ${gameArray[computerRndNmb]}.`);
    //EVALUTATE THE OUTCOME
    if (playerRndNmb === computerRndNmb) {
        console.log("It's a tie.");
    } else if (playerRndNmb > computerRndNmb) {
        if (playerRndNmb === 2 && computerRndNmb === 0) {
            console.log("computer wins.");
        } else {
            console.log("You win!");
        };
    } else if (computerRndNmb > playerRndNmb) {
        if (computerRndNmb === 2 && playerRndNmb === 0) {
            console.log("You win!");
        } else {
            console.log("You win!");
        };
    };
}
