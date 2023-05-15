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

    // deviding chained methods with new lines, as above, is considered good practice for readablity
    // calling the methods on the variable will not update the variable's value
    console.log(s); // still prints "hello"
}

console.log("Global Methods");
{
    
}
