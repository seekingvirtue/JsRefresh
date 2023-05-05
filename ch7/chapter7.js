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
        this.dogName = dogName;
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