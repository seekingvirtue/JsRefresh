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

console.log("The DOM");
{
    // the DOM is not very complicated
    // It is a way of displaying the structure of an HTML document as a logical tree
    console.log("Additional DOM properties");
    
    // the document object represents the DOM
    console.dir(document);
}

console.log("Selecting page elements");
{
    // the document object conaints many properties and methods.
    // to select page elements to use within your JavaScript, we can use either querySelector() or querySelectorAll()
    // both querySelector() and querySelectorAll() can be used to select page elements by tag name, ID, or class
    
    // querySelector() will return the first element in the document that matches the specified selector
    // to return multiple matching elements, use document.querySelectorAll()

    const ele1 = document.querySelector("h1");
    console.dir(ele1);

    // to seem multiple
    const eles = document.querySelectorAll(".output");
    console.dir(eles);
}

console.log("PRACTICE EXERCISE 9.3");
{
    // select a page element andupdate the content, change the style, and add attributes
    console.log("see 9.3Exercise.html");
}

console.log("CHAPTER PROJECT");
{
    console.log("see ChapterProject.html");
}