// the DOM = Document Object Model
// this chapter will discuss the following topics
/*
    -HTML Crash Course
    -Introducing the BOM (Browser Object Model)
    -Introducting the DOM
    -Types of DOM elements
    -Selecting Page Elements
*/

// the DOM grabs an HTML page and turns it into a logical tree
// the BOM holds all the methods and properties for JavaScript to interact with the browser

// the DOM contains the HTML elements on the web page. 

// the BOM is sometimes called the WINDOWS BROWSER OBJECT, it is the magic element that makes it possible for JavaScript code to communicate with the browser
// some of the most important objects of the BOM we will look are are
/*
    HISTORY
    NAVIGATOR
    LOCATION
*/

console.log("PRACTICE EXERCISE 9.1");
{
    console.log(window.outerHeight, window.outerWidth, window.innerHeight, window.innerWidth);
}

console.log("history is actually global, even though it is on the windows object");
{
    console.dir(history);
    // this is the object you use to go back a previous page
    window.history.go(-1) // this does nothing in the current sandbox because we only have one page, index.html
}

console.log("Window navigator object");
{
    // in the window object, there is a navigator property
    // this tells us about the browser, operating system, and versions

    console.dir(window.navigator);

    console.log("navigator is also available globaly")
    console.dir(navigator);
}

console.log("Windows location object");
{
    // the window.location property contains the URL of the current page
    // overriding this, or parts of it, will force the browser to go to a new page
    // this can vary between browsers

    console.dir(window.location);
    
    console.log("location is also global");
    console.dir(location);
    
    // access other objects on the location object
    console.log(window.location.ancestorOrigins.length);
}

console.log("PRACTICE EXERCISE 9.2");
{
    // travel through the window object to get the location object
    // output the values of the protocol and href properties.
    console.log("Protocol:", window.location.protocol);
    console.log("location's href:", window.location.href);
}

