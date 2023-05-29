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

    // moving on from indexOf() (which returns the first) occurence, lastIndexOf() returns where the arguement occurs last
    let lastIndex_re = poem.lastIndexOf("re");
    console.log(lastIndex_re); // returns 24, because that is the last occurence of "re"

    // sometime you will have to do the reverse
    // instead of looking for what index a string occurs at, you will want to know what character is at a certian index
    // examine charAt(), where the specified index position is taken as an arguement

    let pos1 = poem.charAt(10);
    console.log(pos1) // log "r" because that is the character at index 10

    // If you are asking for the position of an index that is out of range, chatAt() returns an empty string
    let pos2 = poem.charAt(1000);
    console.log(pos2);
}

console.log("Creating substrings");
{
    // with slice(start, end) we can create substrings. This will not alter the original string, but return a new string with the substring
    // if you leave out the second parameter, it will just continue to the end of the string from the defined start parameter
    // the end index is not included in the returned substring, if you want it, you add 1 to the number.
    let str = "Create a substring";
    let substr1 = str.slice(5);
    let substr2 = str.slice(0,3);
    console.log("1:", substr1); 
    console.log("2:", substr2);
}

console.log("Replacing parts of the string");
{
    // if you need to replace a part of the string, you can use replace(old, new);
    // it takes two arguements, one to defining what to look for, second is the value to replace it with.
    let hi = "Hi buddy";
    let new_hi = hi.replace("buddy", "Ceact");
    console.log(hi, new_hi);

    // if the string you are targeting does not appear, the replacement doesn't happen and the original string is returned
    let new_hi2 = hi.replace("not there", "Pascal");
    console.log(new_hi2); // returns "Hi buddy"

    // a point to note, replace(old, new) will only replace the first occurence
    let s3 = "hello hello";
    let new_s3 = s3.replace("hello", "oh");
    console.log(new_s3); // logs "oh hello"

    // to replace all, we use replaceAll(old, new)
    let new_s3_2 = s3.replaceAll("hello", "oh");
    console.log(new_s3_2); // logs "oh oh"
}

console.log("Uppercase and lowercase");
{
    // we can change the letters of a string with toUpperCase() and toLowerCase() on strings
    // this does not change the original string either, so we need to capture it or lose it
    let low_bye = "bye!";
    let up_bye = low_bye.toUpperCase();
    console.log(up_bye);

    let caps = "HI HOW ARE YOU?";
    let fix_caps = caps.toLowerCase();
    console.log(fix_caps);

    // what if you do want the first letter of the sentence to be capitalized?
    let first_capital = fix_caps.charAt(0).toUpperCase().concat(fix_caps.slice(1));
    console.log(first_capital);
}

console.log("The start and end of a strng");
{
    // sometimes you want to check what a string starts with and ends with?
    // examine startsWith();

    let encouragement = "You are doing great, keep up the good work!";
    let bool_start = encouragement.startsWith("You");
    console.log(bool_start); // logs true
    // be careful, because startsWith() is case sensitive
    let bool_start2 = encouragement.startsWith("you");
    console.log(bool_start2); // logs false

    // if you don't care about uppercase or lowercase, you can use toLowerCase, or toUpperCase
    let bool_start3 = encouragement.toLocaleLowerCase().startsWith("you");
    console.log(bool_start3); // logs true now

    // We can do the same thing for checking whether a string ends with a certain string.
    let bool_end = encouragement.endsWith("something else");
    console.log(bool_end); // logs false
    
    let bool_end2 = encouragement.endsWith("!");
    console.log(bool_end2); // logs true
}

console.log("PRACTICE EXERCISE 8.4");
{
    // using string manipultion, create a function that will return a string with the first letter of all the words capitalized and the rest of the letters lowercase
    // use the following sentence to transform 
    let sentence = "thIs will be capiTalized for each word";
    console.log(sentence);

    function transform(string) {
        stringLowered = string.toLowerCase();
        // console.log(stringLowered);     

        let arrWordsCorrect = [];

        words = stringLowered.split(" ");
        // console.log(words);

        words.forEach(word => {
            let pushValue = word.slice(0,1).toUpperCase().concat(word.slice(1));
            //console.log(pushValue);
            arrWordsCorrect.push(pushValue)
        });
        // console.log(arrWordsCorrect);

        let joinCorrectedWords = arrWordsCorrect.join(" ");
        // console.log(joinCorrectedWords);

        return joinCorrectedWords;
    }
    
    let check = transform(sentence);
    console.log("transformed sentence:", check);
}

console.log("PRACTICE EXERCISE 8.5");
{
    // using replaceAll(), complete this vowel replacer exercise by replacing the vowels in a string with numbers
    let startingString = "I love JavaScript"
    
    let lowerCaseString = startingString.toLowerCase();
    let vowelArray = ["a", "e", "i", "o", "u"];
    
    for (e of vowelArray) {
       // console.log(e);
       let newCodeStrings = lowerCaseString.replaceAll("a", vowelArray.indexOf("a"))
       .replaceAll("e", vowelArray.indexOf("e"))
       .replaceAll("i", vowelArray.indexOf("i"))
       .replaceAll("o", vowelArray.indexOf("o"))
       .replaceAll("u", vowelArray.includes("u"));
       console.log(newCodeStrings);
    }
}

console.log("NUMBER METHODS");
{
    console.log("Checking if something is (not) a number");
    // this can be done with isNaN()
    // this is a global method which can be used without Number in front of it
    // often you will want to do the opositing, which can be done with the negation operator !

    let x = 34;
    console.log(isNaN(x)); // returns false
    console.log(!isNaN(x)); // returns true
    let str = "hi";
    console.log(isNaN(str)); // returns true
    console.log(!isNaN(str)); // returns false

    // here is that funky javascript everyone talks about
    let str2 = "5"
    console.log("\"5\"",isNaN(str2)); // returns false
    console.log("\"5\"",!isNaN(str2)); // returns true
}

console.log("Checking if something is finite.");
{
    // this is another global method, isFinite()
    // it returns false for NaN, Infinity, and undefined; true for all other values
    let x = 3;
    let str = "finite";
    console.log(isFinite(x)); // returns true
    console.log(isFinite(str)); // returns false
    console.log(isFinite(Infinity)); // returns false
    console.log(isFinite(10 / 0)); // returns false
}

console.log("Checking if something is an integer.");
{
    // this is done with isInteger(), however this is not a global method, therefore we will have to refer to the Number object to use it
    // it will return true if a value is an integer, and false if it is not
    let x = 3;
    let str = "integer";
    console.log(Number.isInteger(x)); // returns true
    console.log(Number.isInteger(str)); // returns false
    console.log(Number.isInteger(Infinity)); // returns false
    console.log(Number.isInteger(2.4)) // returns false (2.4 is a float remember);
}

console.log("Specifying a number of decimals.");
{
    // we can tell JavaScript how many decimals to use with the toFixed() method
    // this is different from the rounding method in Math, since we can specify the number of decimals here
    // it doesn't change the original value, so we'll have to store the result
    let x = 1.23456;
    let newX = x.toFixed(2)
    console.log(newX); // returns 1.23

    // toFixed() will round the number normally
    let newX2 = x.toFixed(3);
    console.log(newX2); // returns 1.235 because the final number is rounded off
}

console.log("Specifying precision");
{
    // there is a method to specify percision.
    // this is different from rounding methods in Math, since we can specify the total number of numbers to look at
    // this comes down to JavaScript looking at the total number of numbers
    // it also counts the numbers before the "."

    let x = 1.23456;
    let newX = x.toPrecision(2);
    console.log(newX); // returns 1.2

    // this will also will round normally
    let newX2 = x.toPrecision(4);
    console.log(newX2); // returns 1.235
}

console.log("MATH METHODS");
// the Math object has many methods that we can use to do calculations and operations on numbers
console.log("Finding the highest and lowest numbers.");
{
    // there is a built in method max() to find the highest number among the arguements
    let highest = Math.max(2, 56, 12, 1, 233, 4);
    console.log(highest); // returns 233

    // similarly we can find the lowest number with min()
    let lowest = Math.min(2, 56, 12, 1, 233, 4);
    console.log(lowest); // returns 1

    // if you try to use max() or min() with non-numeric arguements, you will get NaN
    let highestOfWords = Math.max("hi", 3, "bye");
    console.log(highestOfWords); // returns NaN

    let lowestOfWords = Math.min("hi", 3, "bye");
    console.log(lowestOfWords); // returns NaN also
}

console.log("Square root and raising to the power of.");
{
    // the method sqrt() is used to calculate the square root of a certain number.
    let result = Math.sqrt(64);
    console.log(result); // returns 8

    // in order to raise a number to a certain power (3^2), we use pow(base, exponent)
    let result2 = Math.pow(5, 3);
    console.log(result2); // returns 125, because 5*5*5 = 125
}

console.log("Turning decimals into integers.");
{
    // there are different ways to turn decimals into integers
    // sometimes you will want to round the number, which we can do with Math.round()
    let x = 6.78;
    let y = 5.34;

    console.log("When using Math.round()");
    console.log("X:", x, "becomes", Math.round(x)); // returns 7
    console.log("Y:", y, "becomes", Math.round(y)); // returns 5

    // what if you always want to round up? 
    // for example, if you need to calculate how many wood boards you need and conclude you need 1.1, 1 is not going to be enough to do the job
    // in this case, we use the Math.ceil() method (refering to ceiling);
    let negativeX = -x;
    let negativeY = -y;

    console.log("When using Math.ceil()");
    console.log("negativeX", negativeX, "becomes", Math.ceil(negativeX)); // returns -6
    console.log("negativeY", negativeY, "becomes", Math.ceil(negativeY)); // returns -5

    // the Math.floor() method does the exact opposite of the Math.ceil() method
    console.log("When using Math.floor()");
    console.log("X:", x, "becomes", Math.floor(x)); // returns 6
    console.log("Y:", y, "becomes", Math.floor(y)); // returns 5

    // becareful with negative numbers here, because it feels counterintuitive
    console.log("negativeX", negativeX, "becomes", Math.floor(negativeX)); // returns -7
    console.log("negativeY", negativeY, "becomes", Math.floor(negativeY)); // returns -6

    // the last method we will explore to make decimals into integers is Math.trunc();
    // this gives the same result as Math.floor(), but gets the results differently.
    // Math.trunc() is not doing any rounding, but rather only returning the integer part
    console.log("When using Math.trunc()");
    console.log("X:", x, "becomes", Math.trunc(x)); // returns 6
    console.log("Y:", y, "becomes", Math.trunc(y)); // returns 5

    // again, watch out for negative numbers
    console.log("negativeX", negativeX, "becomes", Math.trunc(negativeX)); // returns -6
    console.log("negativeY", negativeY, "becomes", Math.trunc(negativeY)); // returns -5
}

console.log("Exponent and logarithm.");
{
    // the exponent is the number to which a base is being raised.
    // we use e (Euler's number) a lot in mathematics, this is what the Math.exp() method in JavaScript does.
    // it returns the number to which e must be raised to get the input.
    // we can use the Math.exp() built-in method of Math to calculate the exponent, and the Math.log() to calculate the natural logarithm
    let x = 2;
    let exp = Math.exp(x);
    console.log("Exp:", exp);
    let log = Math.log(exp);
    console.log("Log:", log);

    // Don't worry if you cannot follow along mathematically, you'll figure this our whenever you'll need it for your programming
}

console.log("PRACTICE EXERCISE 8.6");
{
    // experiment with the Math object with the following steps
    // output the value of PI to the console using Math
    console.log(Math.PI); // remember PI is not a method

    // using Math, get the ceil() valye of 5.7, get the floor() of 5.7, get the round() of 5.7, and output to console
    let step2 = 5.7;
    console.log("Math.ceil(step2) when step2 =", step2, "is", Math.ceil(step2)); // returns 6
    console.log("Math.floor(step2) when step2 =", step2, "is", Math.floor(step2)); // returns 5
    console.log("Math.round(step2) when step2 =", step2, "is", Math.round(step2)); // returns 6

    // output a random value to the console
    console.log("random value 1-100 using Math.random()", Math.random() * 100);

    // use Math.floor() and Math.random() to get a number between 0-10
    console.log("random value 0-10 using Math.random()", Math.floor(Math.random() * 11));

    // use Math.floor() and Math.random() to get a number between 1-10
    console.log("random value 1-10 using Math.random()", Math.floor(Math.random() * 10) + 1);

    // use Math.floor() and Math.random() to get a number between 1-100
    console.log("random value 1-100 using Math.random()", Math.floor(Math.random() * 100) + 1);
    
    // create a function to generate a random number using the paramenters of min() and max(), 
    // run the function 100 times returning to the console each time.
    function oneHundredTimes(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min); // not exactly sure what is happening here
    }
    for(let i = 0; i < 100; i++) {
        console.log(oneHundredTimes(1, 100));
    }
}