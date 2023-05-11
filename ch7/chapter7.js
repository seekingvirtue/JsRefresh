/*

CHAPTER 7 CLASSES, STARTING ON PAGE 174
This chapter is supposed to cover the following:

    - object-oriented programming
    - classes and objects
    - classes
    - inheritance
    - prototypes

*/

console.log("CLASSES AND OBJECTS");
{
    // classes act like blue prints for objects
    // example object:
    let dog = {
        dogName: "JavaScript",
        weight: 2.4,
        color: "brown",
        breed: "chihuahua"
    }

    // classes in js encapsulate data AND functions that are part of the class
    // if you create a class you can create objects using that class like this:
    /*
        class ClassName(prop1, prop2) {
            constructor(prop1, prop2) {
                this.prop1 = prop1;
                this.prop2 = prop2;
            }
        }

        let object = new ClassName("arg1", "arg2");
    */

    // further examples
    function Dog(dogName, weight, color, breed) {
        this.dogName = dogName; // the "this" key word defines the associate of the property to THIS class/object
        this.weight = weight;
        this.color = color;
        this.breed = breed;
    }
    let myDog = new Dog("Jacky", 30, "brown", "labrador");
    console.log(myDog)

    // now using the constructor class syntax
    class ClassDog {
        constructor(dogName, weight, color, breed) {
            this.dogName = dogName;
            this.weight = weight;
            this.color = color;
            this.breed = breed;
        }
    }
    let classDog = new ClassDog("JavaScript", 23, "yellow", "mutt");
    console.log(classDog);

    // we can now access classDog with property syntax
    console.log(classDog.dogName, "is a", classDog.breed, "and weighs", classDog.weight, "lbs");
}

console.log("Examining all the elements of a class");

{
    // the constructor method is a special method that we use to initialize objects with our class blueprint
    // there can only be one constructor per class
    // this constructor contains properties that will be set when initiating the class

    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
    }

    // now we can create a new person using the constructor function that inherited the name of the class
    let p = new Person("John", "Doe");
    console.log(p, "Hi", p.firstname);

    // what happens if you use the constructor to create a person without all the properties?
    let p2 = new Person("Jane");
    console.log(p2, p2.firstname, p2.lastname); // p2.lastname returns undefined as it was never passed as an arguement

    // we can improve this by adding default values to the parameters
    class BetterPerson {
        constructor(firstname, lastname = "Doe") {
            this.firstname = firstname;
            this.lastname = lastname;
        }
    }

    // now if we call the constructor without all the parameters, there is a default value

    let betterP = new BetterPerson("James");
    console.log(betterP, betterP.firstname, betterP.lastname); // no longer returns undefined
}

console.log("PRACTICE EXERCISE 7.1");
{
    // create a person class similar to above with a firstname and lastname parameter set
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
    }
    // create two variable and assign each one a value of the new person object
    let p = new Person("Jorge", "OfJungle");
    let p2 = new Person("Tooki", "Bird");

    // output both to the console with a greeting of hello
    console.log("Hello", p.firstname, p.lastname, "and", p2.firstname, p2.lastname);
}

console.log("Lets now look at methods.");
{
    // in a class, we can specify functions, for example: printing a name using it's own properties.
    // functions inside classes are called methods.
    // when defining these methods, we do not use the "function" keyword.
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        // now lets add our method
        greet() {
            console.log("Hi there, I'm", this.firstname);
        }

        // you can add as many methods on a class as you want
        // just like functions, methods can take in parameters
        compliment(name, object) {
            return "That's a wonderful " + object + ", " + name;
        }
    }
    // now we can call the greet method on the person object
    let p = new Person("John", "Doe");
    p.greet();

    // same with the compliment method
    let compliment = p.compliment("Harry", "at");
    console.log(compliment);
}

console.log("PRACTICE EXERVICE 7.2");
{
    // use the person class from above and add a method called fullname that returns firstname + lastname
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        fullname() {
            return this.firstname + this.lastname;
        }
    }
    // create person1 and person2 variables with the Person constructor
    let person1 = new Person("Jimmy ", "Johns");
    let person2 = new Person("George ", "Washington");

    // print to console the fullname of each
    let message = person1.fullname() + " and " + person2.fullname();
    console.log("Welcome back", message);
}

console.log("PROPERTIES");
{
    // properties, sometimes also called fields, hold the data of the class.
    // We have seen one kind of property already, when we created them in the constructors:

    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname; // property
            this.lastname = lastname; // property
        }
    }

    // In the above, the Person class gets two properties from the constructor; firstname and lastname.
    // Properties can be added and remove (just like with objects)
    // These can be accessed outside the class, see below

    let p = new Person("Ceact", "Tcaec");
    console.log("Hi", p.firstname);

    // Often it is not desirable to provide direct access to our properties, in fact we want to do this as much as possible
    // We want our class to be in control of the values of properties for several reasons
    // We might want to do validation on a property to assure it has a certain value
    // We can achieve this by making direct access, outside the class, impossible
    // To do so, prefix the property with a # symbol

    class PersonRestricted {
        #firstname;
        #lastname;
        constructor(firstname, lastname) {
            this.#firstname = firstname; // property is no longer accessible outside the class
            this.#lastname = lastname; // ibid
        }
    }

    let pRestricted = new PersonRestricted("Ceact2", "Tcaec2");
    console.log(pRestricted.firstname); // prints "undefined"

    // Say we wanted to create names with only the letter M
    class PersonLetterM {
        #firstname;
        #lastname;
        constructor(firstname, lastname) {
            if(firstname.startsWith("M")) {
                this.#firstname = firstname;
            } else {
                this.#firstname = "M" + firstname;
            }
            this.#lastname = lastname;
        }
        printName() {
            return this.#firstname + " " + this.#lastname;
        }
    }

    let pLetterM = new PersonLetterM("Norman", "Larrz");
    console.log(pLetterM.printName());
}

console.log("GETTERS AND SETTERS");
{
    // getters and setters are properties that we can use to GET data from a class and SET the data fields on classes
    // getters and setters are computed properties (they are more like properties than functions)
    // getters and setters are called ACCESSORS.
    // they look like functions, because they have () behind them, but they are not
    
    // getters and setters allow access to protected properties so those properties cannot be accessed ouside the object itself
    // this is a principle called ENCAPSULATION
    // the class ENCAPSULATES the data, and the object is in control of its own fields

    class Person {
        #firstname;
        #lastname;
        constructor(firstname, lastname) {
            this.#firstname = firstname;
            this.#lastname = lastname;
        }
        // firstname getter
        get firstname() {
            return this.#firstname;
        }
        // firstname setter
        set firstname(firstname) {
            this.#firstname = firstname;
        }
        // lastname getter
        get lastname() {
            return this.#lastname;
        }
        // lastname setter
        set lastname(lastname) {
            this.#lastname = lastname;
        }
    }

    // now the getter is called just like any property
    let p = new Person ("Ceact", "Tcaec");
    console.log(p.firstname, p.lastname); // no longer returns undefined

    // the setter allows us to now update the p.firstname or p.lastname properties
    p.firstname = "CHANGED";
    p.lastname = "CHANGED";
    console.log(p);

    // we can add additional logic to the setter
    class PersonWithLogicInSetter {
        #firstname;
        #lastname;
        constructor(firstname, lastname) {
            this.#firstname = firstname;
            this.#lastname = lastname;
        }
        
        get firstname() {
            return this.#firstname;
        }

        set firstname(firstname) {
            if(firstname.startsWith("M")) {
                this.#firstname = firstname;
            } else {
                this.#firstname = "M" + firstname;
            }
        }

        get lastname() {
            return this.#lastname;
        }

        set lastname(lastname) {
            this.#lastname = lastname;
        }
    }

    let pWithLogicInSetter = new PersonWithLogicInSetter(" ", "Tcaec");
    pWithLogicInSetter.firstname = "Ceact";
    console.log(pWithLogicInSetter.firstname, pWithLogicInSetter.lastname);
}