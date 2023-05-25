/*
    CHAPTER 8 BUILT-IN JAVASCRIPT METHODS STARTING ON PAGE 192
    In this chapter we will look at the following concepts:
    
    - Global JavaScript Methods
    = String methods
    - Math Methods
    - Date Methods
    - Array Methods
    - Number methods
*/

console.log("BEGIN BUILT-IN JAVASCRIPT METHODS");

// Many built-in methods belong to built-in classes
// Those classes and their methods can ve used at any time because JavaScript has already defined them.
// The classes exist for our convenience, since they are very common things to need such as the DATE, ARRAY, and OBJECT classes

console.log("Introduction to built in JavaScript methods");
{
    // we have seen many built-in JavaScript methods already such as console.log() Math.random() and prompt()
    // the difference between a method and a function: functions are defined anywhere, a method is inside the class
    // methods can be chained, only if they return a result

    let s = "Hello";
    console.log(
        s.concat(" there!")
        .toUpperCase() // first chained method,
        .replace("THERE", "you") // second chained method,
        .concat(" You're amazing") // third and, in this example, final chained method.
    );

    // deviding chained methods with new lines, as above, is considered good practice for readablity.
    // calling the methods on the variable will not update the variable's value.
    console.log(s); // still prints "hello"
}

console.log("Global Methods");
{
    // the global JavaScript methods can be used without referring to the built-in objects they are a part of,
    // This means that we can just use the method name as if it is a function that has been defined inside the scope we are in.

    let x = 7;
    console.log(Number.isNaN(x)); // built-in method with the object in front of it.
    console.log(isNaN(x)); // built-in method without the object in front of it.    

    // with isNaN(), Number can be left out as isNaN is made globally available without referring to the class it belongs to.
}

console.log("Decoding and encoding URIs");
{
    // encoding is simply converting from one shape to another.
    // Remember URI = uniform resource identifier; URL = uniform resource locator (which is subcatagory of uri)
    // Remember you cannot have a URI with spaces

    console.log("Examining decodeUri() and encodeUri().");
    let uri = "https://www.example.com/submit?name=magiliw van balagtas";
    let encoded_uri = encodeURI(uri);
    console.log("Encoded:", encoded_uri); // notice the spaces have been replaced with %20 characters
    let decode_uri = decodeURI(encoded_uri);
    console.log("Decoded:", decode_uri); // notice the %20 characters have been removed

    // note that special characters will stay: colons question marks, equal signs, slashes, and apersands can be expected

    console.log("Examining decodeUriComponent() and encodeUriComponent()");
    
    // what happens when you need to encode or decode a string that contains special characters?
    let broken_uri = "https://www.example.com/submit?name=this&that=some thing&code=love"
    let encodedBroken_uri = encodeURI(broken_uri);
    console.log(encodedBroken_uri); // notice that the special characters are still in the path.
    
    // the above is a case where we will need to use encodeUriComponenet()
    let encodedComponentBroken_uri = encodeURIComponent(broken_uri);
    console.log("Encoded Components:", encodedComponentBroken_uri);
    let decodedComponentBroken_uri = decodeURIComponent(broken_uri);
    console.log("Decoded Components:", decodedComponentBroken_uri);

    console.log("Encoding with excape() and unescape()");
    // the book says both methods are strongly discouraged and they might disapper from future Javascript versions (or may not be supported by browsers)
}

console.log("PRACTICE EXERCISE 8.1");
{
    // output the decodeURIComponent() for the string "How's%20it%20going%3F"
    // Also encode the string once decoded
    // create a web URL and encode the URI

    let ExerciseString = "How's%20it%20going%3F";
    let decoded = decodeURIComponent(ExerciseString);
    console.log("Decoded:", decoded);
    let encode = encodeURIComponent(decoded);
    console.log("Encoded:", encode);

    let webAddress = "http://www.basescripts.com?=Hello World";
    console.log(encodeURIComponent(webAddress));
}

console.log("Parsing Numbers");
{
    console.log("let's make integers with parseInt()");
    
    // with parseInt(), strings can become numbers
    // this method is part of the Number class, but it is global
    let str_int = "6";
    let int_int = parseInt(str_int);
    console.log("Type of", int_int, "is", typeof int_int);
    
    // what about trying different types of numbers?
    let str_float = "7.6";
    let int_float = parseInt(str_float);
    console.log("Type of", int_float, "is", typeof int_float);

    let str_binary = "0b101";
    let int_binary = parseInt(str_binary);
    console.log("Type of", int_binary, "is", typeof int_binary);

    // in the above the parseInt() stops parsing when it runs into a non-numeric character
    // this is the intended behavior, and is working like it should (remember that)
    // what about if the string is really not a number

    let str_nan = "hello!";
    let int_nan = parseInt(str_nan);
    console.log("Type of", int_nan, "is", typeof int_nan);

    console.log("Lets make floats with parseFloat()");

    // with parseFloat(), it works exactly the same as parseInt() except it can understand and handle decimals
    let int_float2 = parseFloat(str_float);
    console.log("Type of", int_float2, "is", typeof int_float2); // notice now that 7.6 is returned
    
    // what if there are more than one decimals?
    let str_version_nr = "2.3.4";
    let float_version_nr = parseFloat(str_version_nr);
    console.log("Type of", float_version_nr, "is", typeof float_version_nr); // logs 2.3

    // the strategy of the parseFloat() method is like parseInt().
    // as soon as parseFloat() encounters a character it cannot interpret (the second . above) it will stop parsing
    // note: parseFloat() will not append .0 to integers
    let float_int = parseFloat(str_int);
    console.log("Type of", float_int, "is", typeof float_int); // logs 6, not 6.0
    
    // parseFloat() on binary numbers and NaNs acts the same as parseInt()
    let float_binary = parseFloat(str_binary)
    console.log("Type of", float_binary, "is", float_binary); // logs 0, not 0b101

    let float_nan = parseFloat(str_nan);
    console.log("Type of", float_nan, "is", typeof float_nan); // logs NaN
}

console.log("Executing JavaScript with eval()");
{
    // this is a global method that executes the argument
    // this means it will do whatever is inserted into it
    // the book says better to not use this at all due to security risks
}

console.log("Array Methods");
{
    // we have seen some already such as shift() and push()
    
    console.log("Performing a certain action for every item");
    
    // you might be thinking of a loop, but the forEach() method is built in for iterating
    
    let arr = ["grapefruit", 4, "hello", 5.6, true];
    
    function printStuff(element, index) {
        console.log("Printing stuff", element, "on array positions", index);
    }

    arr.forEach(printStuff);
}

console.log("Filtering an array");
{
    let arr = ["squirrel", 5, "Tjed", new Date(), true];

    // make a function that takes the element and index, and checks the typeof
    function checkString(element, index) {
        return typeof element === "string";
    }

    // run the array through the filter function and log the results.
    let filterArr = arr.filter(checkString);
    console.log(filterArr);

    console.log("Checking a conditions for all elements");
    // you can use every() to see whether something is true for all elements in the array
    console.log(arr.every(checkString)); // returns false because not every element is a string

    console.log("Replaceing part of an array with another part of the array");
    
    // lets examine the copyWithin() method that is part of the array class
    // it can replace a part of the array with another part of the array
    // in the first example below we will specify three arguements
    // the first is the target position, to which the values get copied
    // the second is the start of what to copy to the target position
    // the third is the end of the sequence that willbe copied to the target position (not including the index)
    let array = ["grapefruit", 4, "hello", 5.6, true];
    array.copyWithin(0, 3, 4);
    console.log(array); // array becomes [5.6, 4, 'hello', 5.6, true]
    
    // if we extend the range
    array.copyWithin(0, 3, 5); // notice the index 5 is beyond the final index of 4
    console.log(array); // array becomes [5.6, true, 'hello', 5.6, true]

    // leaving out the final argument will copy the value through to the end of the array
    let arrayAgain = ["grapefruit", 4, "hello", 5.6, true, false];
    arrayAgain.copyWithin(0,3);
    console.log(arrayAgain); // [5.6, true, false, 5.6, true, false]
}

console.log("Mapping the values of an array.");
{
    // some times you need to change all the values in an array
    // array.map() will do exactly that, this method will return a new array with all the new values
    let arr= [1, 2, 3, 4];
    let mapped_arr = arr.map(x => x + 1); // with map(), you have to specify how to create those new values. In this case we used an arrow function
    console.log(mapped_arr); // this logs [2, 3, 4, 5]
}

console.log("Finding the last occurrence in an array.");
{
    // we can find occurances with indexOf(), to find the last occurrence we use lastIndexOf()
    let bb = ["so", "bye", "bye", "love"];
    console.log(bb.lastIndexOf("bye")); // returns 2 because that is the last occurrence of "bye"
    console.log(bb.lastIndexOf("hi")); // returns -1 because there is no occurrence of "hi"
}

console.log("PRACTICE EXERCISE 8.2");
{
    //Remove duplicates from the array using filter() and indexOf()
    let arrayWithDupes = [
        "Laurence",
        "Mike",
        "Larry",
        "Kim",
        "Joanne",
        "Laurence",
        "Mike",
        "Laurence",
        "Mike",
        "Laurence",
        "Mike"
    ];

    // I copied this from the back of the book because I did not really understand what to do
    const arr2 = arrayWithDupes.filter((value, index, array) => {
        console.log(value, index, array.indexOf(value));
        return arrayWithDupes.indexOf(value) === index;
    });
    console.log(arr2);
}

console.log("PRACTICE EXERCISE 8.3");
{
    // using the array.map() method, update an array's contents
    let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7];
    
    // using map() return an updated array, multiplying all the numbers in the array by 2
    
    function multiplyBy2(number) {
        return number * 2;
    }
    let arrayMultipliedWithFunction = arrayOfNumbers.map(multiplyBy2);
    console.log(arrayMultipliedWithFunction);
    
    let arrayMultiplied = arrayOfNumbers.map(e => e * 2); // I could not figure out how to do this without arrow function
    console.log(arrayMultiplied);
}

console.log("String methods");
{
    console.log('combining strings')
    
    // usage of concat() will not change the original strings, it returns the combined result as a string
    // you have to capture the result in a new variable or it will get lost
    let s1 = "Hello ";
    let s2 = "Javascript";
    let result = s1.concat(s2);
    console.log(result);

    console.log("Converting a string to an array.");
    
    // usage of the split() method we can convert a string to an array.
    // again we will have to capture the result, or lose it, as split() will not change the original string
    let array_result = result.split(" "); // the arguement is saying "every time you encounter that string, create a new array item/element"
    console.log(array_result); // logs ["Hello", "Javascript"]

    // we can split() by any character
    let favoriteFruits = "strawberry,watermelon,grapfruit";
    let array_fruit = favoriteFruits.split(",");
    console.log(array_fruit); // logs ['strawberry', 'watermelon', 'grapfruit']

    console.log("converting an array into a string");
    
    // with join(), we can convert an array into a string
    let letters = ["a","b","c"];
    let stringFromArray = letters.join();
    console.log(stringFromArray); // logs "a,b,c"
    // if you want something other than a comma, you can specify it as an arguement to join()
    let stringFromArrayWithHyphen = letters.join("-");
    console.log(stringFromArrayWithHyphen); // logs "a-b-c"
}

console.log("Working with index and positions");
{
    // being able to find what index a certain substring is at within your string is very useful
    // when you need to search for a certain word through the user input of a log file and create substring starting at that index.
    // just like arrays, strings will use the indexOf() method
    // indexOf() will return the index, a single number, of the first character of the substring

    let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
    let index_re = poem.indexOf("re");
    console.log(index_re); // return 7 because the first occurance of "re" is in "are", and it begins at index 7
    
    // when it cannot find the index, -1 is reurned
    let indexNotFound = poem.indexOf("python");
    console.log(indexNotFound); // returns -1 because "python" is not in the poem
    
    /*
        often you will write an if check to see wherether it's -1 before dealing with the result
        i.e.

        if(poem.indexOf("python") != -1){
            // do stuff
        }
    */

    // an alternate way of searching for a particular substring within a string is to use the search() method
    let searchStr = "When I see my fellow, I say hello";
    let position = searchStr.search("lo");
    console.log(position); // logs 17 because that is the index of "lo" in "fellow".

    // much like indexOf(), search() will return -1 if nothing is found
    let notFound = searchStr.search("JavaScript");
    console.log(notFound); // returns -1 because "JavaScript" is not in the original string

    // note search() will accept a regex format as an input, where indexOf() only takes a string.

    // 
}