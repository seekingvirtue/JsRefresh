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

console.log("INHERITANCE");
{
    // inheritance is a key concept in OOP
    // it is the concept that classes can have child classes
    // child classes inherit properties and method from parent classess
    // examine the below
    
    class Vehicle {
        constructor(color, currentSpeed, maxSpeed) {
            this.color = color;
            this.currentSpeed = currentSpeed;
            this.maxSpeed = maxSpeed;
        }

        move() {
            console.log("moving at", this.currentSpeed);
        }

        accelerate(amount) {
            this.currentSpeed += amount;
        }
    }
    
    // now lets make a motorcycle class that inherits from Vehicle
    // we will use the extends keyword, and specify the parent classa after
    // the super keyword is calling the constructor from the parrent
    // calling the parent constructor ensures the parent fields are set
    // calling super() is not optional when inheriting

    class Motorcycle extends Vehicle {
        constructor(color, currentSpeed, maxSpeed, fuel) {
            super(color, currentSpeed, maxSpeed); 
            this.fuel = fuel;
        }
        
        doWheelie() {
            console.log("driving on one wheel");
        }
    }

    // because we have access to the properties in Vehicle, the below will work

    let motor = new Motorcycle("Black", 0, 250, "gaspline");
    console.log(motor.color);
    motor.accelerate(50);
    motor.move();

    // lets rewrite the Vehicle class and Motorcycle class to be protected

    class VehicleProtected {
        #color;
        #currentSpeed;
        #maxSpeed;
        constructor(color, currentSpeed, maxSpeed) {
            this.#color = color;
            this.#currentSpeed = currentSpeed;
            this.#maxSpeed = maxSpeed;
        }

        get color() {
            return this.#color;
        }

        set color(color) {
            this.#color = color;
        }

        get currentSpeed() {
            return this.#currentSpeed;
        }

        set currentSpeed(currentSpeed) {
            this.#currentSpeed = currentSpeed;
        }

        get maxSpeed() {
            return this.#maxSpeed;
        }

        set maxSpeed(maxSpeed) {
            this.#maxSpeed = maxSpeed;
        }
        
        move() {
            console.log("moving at", this.#currentSpeed);
        }

        accelerate(amount) {
            this.#currentSpeed += amount;
        }                
    }

    class MotorcycleProtected extends VehicleProtected {
        #fuel;
        constructor(color, currentSpeed, maxSpeed, fuel) {
            super(color, currentSpeed, maxSpeed);
            this.#fuel = fuel;
        }

        get fuel() {
            return this.#fuel;
        }

        set fuel(fuel) {
            this.#fuel = fuel
        }

        doWheelie() {
            console.log("driving on one wheel");
        }                
    }
    
    // the following will work and now all propertied are protected!

    let motorProtected = new Motorcycle("Green", 0, 120, 10);

    console.log(motorProtected.color);
    console.log(motor.currentSpeed);

    motorProtected.accelerate(40);
    motorProtected.doWheelie()
    motorProtected.move();

    console.log(motorProtected.fuel);
    console.log(motor.maxSpeed);
}

console.log("PROTOTYPES");
{
    // a prototype is the mechanism in JavaScript that makes it possible to have objects
    // when nothing is specified when creating a class, the objects inherit from the Object.prototype prototype
    // Object.prototype is a complex built-in JavaScript class we can use
    // consider it the base object that is always on top of the inheritance tree and therefore always present in our objects
    // you can access it as follows
    
    /*
        ClassName.prototype
    */

        class Person{
            constructor(firstname, lastname) {
                this.firstname = firstname;
                this.lastname = lastname;
            }
    
            greet() {
                console.log("Hi there!");
            }
        }

    // lets add a function to a class using the prototype property
    
    Person.prototype.introduce = function () {
        console.log("Hi, I'm", this.firstname);
    }

    // remember, prototype is aproperty holding ALL the properties and methods of an object
    // we can also add properties, just like above

    Person.prototype.favoriteColor = "green";

    // now lets make a new instance of person and try it out

    let p = new Person("Ceact", "Tcaec");
    console.log(p.favoriteColor);
    p.introduce();
    console.log(p);

    // remember, methods and properties defined via the prototype are really as if they were defined in the class
    // this means overwriting them for a certain instance DOESN'T overwrite them for all instances
    
    let p2 = new Person("Magiliw", "Balagtas");
    p2.favoriteColor = "orange";
    console.log("Ceact likes", p.favoriteColor, "and Magiliw likes", p2.favoriteColor);
}

console.log("PRACTICE EXERCISE 7.3");
{
    // create a class that contains properties for different animal species
    // include sounds that each animal species makes
    // create two or more

    class Animal {
        #name
        #mammal
        #carnivorous 
        #color
        #size
        #sound
        constructor(name, mammal, carnivorous, color, size, sound) {
            this.#name = name;
            this.#mammal = mammal;
            this.#carnivorous = carnivorous;
            this.#color = color;
            this.#size = size;
            this.#sound = sound;
        }

        get name() {
            return this.#name
        }

        set name(name) {
            this.#name = name;
        }

        get mammal() {
            return this.#mammal;
        }

        set mammal(mammal) {
            if (mammal === true || mammal === false) {
                this.#mammal = mammal;
            } else {
                this.#mammal = "unknown";
            }
        }

        get carnivorous() {
            return this.#carnivorous;
        }

        set carnivorous(carnivorous) {
            if (carnivorous === true || cornivorous === false) {
                this.#mammal = mammal;
            } else {
                this.#mammal = "unknown";
            }
        }

        get color() {
            return this.#color;
        }

        set color(color) {
            this.#color = color
        }

        get size() {
            return this.#size;
        }

        set size(size) {
            this.#size = size;
        }

        get sound() {
            return this.#sound;
        }

        set sound(sound) {
            this.#sound = sound;
        }
        
        // create a method that prints a given animal and it's sound
        zooInfo() {
            console.log(`${this.#name}'s carinvore status is ${this.#carnivorous}, it is ${this.#size} big and makes a ${this.#sound} sound.`);
        }
    }
    
    // make a three instances of the animal object
    let rabbit = new Animal("rabbit", true, false, "brown", "small", "silent");
    let elephant = new Animal("elephant", true, false, "grey", "huge", "paaawhooo");
    let shark = new Animal("shark", false, true, "blue", "large", "chop");
    
    // add a prototye with another action for the animal

    Animal.prototype.specialAttack = function () {
        console.log(`${this.name} uses it's ${this.size} size and attacks bad guys!`);
    }

    // test the animals
    shark.specialAttack();
    console.log(elephant.mammal);
    elephant.zooInfo();
    console.log(rabbit.sound, "bunny sounds");
}