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

    // make a function that take the element and index, and checks the typeof
    function checkString(element, index) {
        return typeof element === "string";
    }

    // run the array through the filter function and log the results.
    let filterArr = arr.filter(checkString);
    console.log(filterArr);

    console.log("Checking a conditions for all elements");
    // you can use every() to see whether something is true for all elements in the array
    console.log(arr.every(checkString)); // returns false because not every element is a string

    

}

