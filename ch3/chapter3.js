console.log("BEGINING 3.2 ARRAY METHODS");
console.log("PUSH METHOD");
{
let favoriteFruit = ["grapefruit","orange","lemon"];
    favoriteFruit.push("tangerine");
    console.log(favoriteFruit.length, favoriteFruit);
let lengthOfFavoriteFruits = favoriteFruit.push("lime");
    console.log(favoriteFruit);
}
console.log("\n SPLICE METHOD");
{
    let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
    arrOfShapes.splice(2, 2, "square", "trapezoid");
    console.log(arrOfShapes);
    console.log("Now splicing with the delete parameter not 0");    
}

console.log("\n CONCAT METHOD");
{
    //concatenate two arrays together.
    let arr5 = [1, 2, 3];
    let arr6 = [4, 5, 6];
    let arr7 = arr5.concat(arr6);
    console.log(`arr5.concat(arr6), results in ${arr7}`);
    //adding values with concat
    let arr8 = arr7.concat(7, 8, 9);
    console.log(arr8);

console.log("\n METHOD TO REMOVE FROM ARRAYS"); //AKA DELETE

    //POP METHOD REMOVES FROM THE END
    arr8.pop();
    console.log("arr8.pop results in: ", arr8);
    //SHIFT REMOVES FROM THE FRONT 
    arr8.shift();
    console.log("arr8.shift results in: ", arr8);
    //SPLICE WITHOUT ANY VALUES TO "ADD" TO THE ARRAY
    arr8.splice(1, 3);
    console.log("arr8.splice(1, 3) returns: ", arr8);
    //REMOVE VALUE WITHOUT REMOVING THE ACTUAL INDEX--DELETE OPERATOR
    delete arr8[0];
    console.log("delete arr8[0] keeps the index, but removes the values \n", arr8);
}

console.log("\n FINDING ELEMENTS")
{ 
    //this will find an element value and return it if it exists
    let arr8 = [ 2, 6, 7, 8 ];
    let findValue = arr8.find(function(e) { return e === 6 });
    let findValue2 = arr8.find(e => e === 10);
    console.log(findValue, findValue2);
    //finding the index of a value if it exists.
    let findIndex = arr8.indexOf(6);
    let findIndex2 = arr8.indexOf(10);
    console.log(findIndex, findIndex2);
    //find an additional occurence of a value
    let findIndex3 = arr8.indexOf(6, 2);
    console.log(findIndex3);
    //finding the final occurence of a value in an array
    let animals = ["dog", "horse", "cat", "platupus", "dog"];
    let lastDog = animals.lastIndexOf("dog");
    console.log(lastDog);
}

console.log("\nSORTING METHODS");
{
    let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
    console.log(names);
    names.sort();
    console.log("the names array is now alphabetized by calling .sort() \n", names);
    let ages = [18, 72, 33, 56, 40];
    console.log("ages before and after calling the .sort() \n",
        ages)
    console.log(ages.sort());

console.log("\nREVERSE ORDER (regardless if sorted or not).");
    console.log(names);
    console.log("Now we will call .reverse on the array names",
        names.reverse());
}

console.log("BEGIN 3.2 EXERCISE QUIZ");
{
    console.log("Create and empty array for a shopping list");
    let shoppingList = [];
    console.log(shoppingList, "Add milk, bread, and apples to the list")
    shoppingList.push("Milk", "Bread", "Apples")
    console.log(shoppingList);

    console.log("Update Bread to Bananas and Eggs");
    console.log(shoppingList.indexOf("Bread"))
    shoppingList.splice(shoppingList.indexOf("Bread"), 1, "Bananas", "Eggs");
    console.log(shoppingList);

    console.log("Remove the last item from the array, print it's value to the console.");
    shoppingList.pop(shoppingList.length);
    console.log(shoppingList);

    console.log("After bananas add carrots and lettuce.");
    shoppingList.splice(shoppingList.indexOf("Bananas"), 0, "Carrots", "Lettuce");
    console.log(shoppingList);    

    console.log("Creat a new array for drinks");
    let drinks = ["Juice", "Pop"];
    console.log(drinks);
    
    console.log("Combine both lists, adding drinks twice");
    let combined = shoppingList.concat(drinks, drinks);
    console.log(combined);

    console.log("Get the last index value of POP and output to console");
    let lastPop = combined.lastIndexOf("Pop");
    console.log(lastPop, " is the index for the final Pop entry");
}

console.log("\nMULTIDIMENTIONAL ARRAYS EXAMPLES");
{
    console.log("Multidimentional means an array of arrays");
    let someValues1 = [1, 2, 3];
    let someValues2 = [4, 5, 6];
    let someValues3 = [7, 8, 9];    
    let arrOfArrays = [someValues1, someValues2, someValues3];
    console.log("\n for example: ", arrOfArrays);

    let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    console.log("we can also make it manually as in the previous variable.", arrOfArrays2);
    console.log("To access elements of the inner arrays, specify an index twice.\nIE arrOfArrays[0][0] returns: ", arrOfArrays2[0][0]);
    console.log("arrOfArrays[2][2] returns: ", arrOfArrays[2][2]);
    
    console.log("Lets make it three layers deep.");
    let arrOfArrOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
    console.log(arrOfArrOfArrays);
    console.log("To get to the middle value of a 3 layers deep array, it is the same:");
    console.log("arrOfArrOfArrays[1][1][1] in our case will grab the middle of the middle array.", arrOfArrOfArrays[1][1][1]);
}

console.log("\n PRACTICE EXERCISE 3.3");
{
    console.log("create an array containing three values: 1, 2, 3");
    let firstArray = [1, 2, 3];
    console.log("Nest the original array into a new array, three times.");
    let arrayOfThree = [firstArray, firstArray, firstArray];
    console.log("Output the value of 2 from one of the arrays: ", arrayOfThree[0][1], arrayOfThree[1][1], arrayOfThree[2][1]);
}
 
console.log("\n PRACTICE EXERCISE 3.4");
{
    console.log("create a car object, add properties that contain number, boolean, and strings");
    let myCar = {
        make: "Nissan",
        model: "Juke",
        VIN: "abcd1234defg",
        onLot: true,
        year: 2013,
        odometer: 54333,
    };
    console.log(myCar, "this is the starting object.")
    console.log("create a variable that can hold the string value.");
    let variableProp = "color";
    myCar[variableProp] = "red";    
    console.log("myCar now has a new color");
    console.log(myCar, "this is the object now.");


    variableProp = "forSale";
    myCar[variableProp] = true;
    console.log("Now it has a forSale property.", myCar);

    console.log(myCar.make, " is the make.");
    console.log(myCar.model, " is the model.");
    console.log(myCar.forSale, " is it for sale?");
}

console.log("\n WORKING WITH OBJECTS AND ARRAYS");
{
    console.log("lets do some objects in objects");
    let company = {
        companyName: "Healthy Candy",
        activity: "food manufacturing",
        address: {
            street: "2nd street",
            number: "123",
            zipcode: "33116",
            city: "Miami",
            state: "Florida"
        },
        yearOfEstablishment: 2021
    };
    console.log("now let's modify some of the properties in address");
    //method 1
    company.address.zipcode = "33117";
    //method 2
    company["address"]["number"] = "100";
    console.log(company);

    console.log("/n ARRAYS IN OBJECTS");
    company = {
        companyName: "Healthy Candy",
        activity: [
         "food manufacturing",
         "improving kids health",
         "manufacturing toys"   
        ], /*CHANGED PROPERTY TO AN ARRAY*/
        address: {
            street: "2nd street",
            number: "123",
            zipcode: "33116",
            city: "Miami",
            state: "Florida"
        },
        yearOfEstablishment: 2021
    };
    //lets get the value from the array
    console.log("logging: company.address[1]", company.activity[1]);

    console.log("\n objects in arrays examples.");
    let addresses = [{
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    {
        street: "1 West Ave",
        number: "5",
        zipcode: "75001",
        city: "Addison",
        state: "Texas"
    }];
    console.log("gaining access to properties");
    console.log(`logging addresses[0].street: ${addresses[0].street}`);

    console.log("\n that is all fine and good, now some objects, in arrays, in objects");
    //lets update the company to include the address array of objects
    company = {
        companyName: "Healthy Candy",
        activity: [
         "food manufacturing",
         "improving kids health",
         "manufacturing toys"   
        ], /*CHANGED PROPERTY TO AN ARRAY*/
        address: [{
            street: "2nd street",
            number: "123",
            zipcode: "33116",
            city: "Miami",
            state: "Florida"
        },
        {
            street: "1 West Ave",
            number: "5",
            zipcode: "75001",
            city: "Addison",
            state: "Texas"
        }],
        yearOfEstablishment: 2021
    };

    console.log("to access elements further nested");
    console.log("company.address[0].street returns: ", company.address[0].street);
}

console.log("\n PRACTICE EXERCISE 3.5");
{
    console.log("Create and object named people that contains and empty array that is called friends");
    let people = {
        friends: [            
        ]
    }
    //lets make three friends:
    let angelika = {
        firstName: "Angelika",
        lastName: "Roth",
        idValue: "12345"
    };
    let james = {
        firstName: "James",
        lastName: "Peters",
        idValue: "54321"
    };
    let scott = {
        firstName: "Scott",
        lastName: "Simon",
        idValue: "0987"
    };
    //add three friends to the array:
    people.friends.push([angelika, james, scott]);
    console.log(people);
}

console.log("\n CHAPTER PROJECTS");
//MANIPULATING AN ARRAY
{
    //take the following array
    const theList = [
        'Laurence',
        'Svkeis',
        true,
        35,
        null,
        undefined,
        {test: 'one', score: 55},
        ['one', 'two']
    ];
    //Remove the first item: and the last item:
    theList.shift();
    theList.pop();
    //assign "FIRST" to the start of the array:
    theList.unshift("FIRST")
    //assign "hello world" to the 4th value:
    theList[3] = "hello world";
    //assign "MIDDLE" to the third index:
    theList[2] = "MIDDLE";
    //Add "LAST" to the last position;
    theList.push("LAST");
    //output to console:
    console.log(theList);

}
//COMPANY PRODUCT CATALOG
{
    //create an array to hold inventory and store items.
    let inventory = [
    ]
    //create three items with name, model, cost, and quantity properties:
    let item1 = {
        name:"Mushrooms",
        cost: 100,
        model: "P2ww3",
        quantity: 5
    };
    let item2 = {
        name:"Cactus",
        cost: 130,
        model: "P2qq4",
        quantity: 4
    };
    let item3 = {
        name:"Flower",
        cost: 103,
        model: "P2aa5",
        quantity: 2
    };
    //add all three items to the main array, then log to console:
    inventory.push(item1, item2, item3);
    console.log(inventory);
    //access the quantity on the third item:
    console.log(inventory[2].quantity);
}