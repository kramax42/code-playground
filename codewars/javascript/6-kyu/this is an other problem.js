// 6 kyu
// "this" is an other problem
// https://www.codewars.com/kata/547f1a8d4a437abdf800055c

// Task description:
// After you've solved @priyankaherur's problem ( http://www.codewars.com/kata/this-is-a-problem/javascript ) you may try to solve this other one.
// The problem:
// Having created a function NamedOne which takes first & last names as parameters and returns an object with firstName, lastName and fullName ( = firstName + a space + lastName ) properties which should be all accessibles, we discovered that "accessible" also means "mutable".

// If, for example, we've got a "NamedOne" like this:
// var namedOne = new NamedOne("Naomi","Wang")
// namedOne.firstName // -> "Naomi"
// namedOne.lastName  // -> "Wang"
// namedOne.fullName  // -> "Naomi Wang"
// ...properties may be changed :
// namedOne.firstName = "John"
// namedOne.firstName // -> "John"
// namedOne.lastName = "Doe"
// namedOne.lastName  // -> "Doe"
// ...but all properties are not updated !
// namedOne.fullName  // -> "Naomi Wang" 
// //-- Oh no ! we want fullName == "John Doe" now !

// Your mission:
// So the purpose of this kata is to create an object with accessible and "updatable" (can i say that?) properties.
// If .firstName or .lastName are changed, then .fullName should also be changed
// If .fullName is changed, then .firstName and .lastName should also be changed.
// Note : "input format" to .fullName will be firstName + space+ lastName. If given fullName isn't valid then no property is changed.

// Examples:
// var namedOne = new NamedOne("Naomi","Wang")
// namedOne.firstName = "John"
// namedOne.lastName = "Doe"
// // ...then...
// namedOne.fullName // -> "John Doe"
// // -- And :
// namedOne.fullName = "Bill Smith"
// // ...then...
// namedOne.firstName // -> "Bill"
// namedOne.lastName  // -> "Smith"
// // -- But :
// namedOne.fullName = "Tom" // -> no : lastName missing
// namedOne.fullName = "TomDonnovan" // -> no : no space between first & last names
// namedOne.fullName // -> "Bill Smith" (unchanged)

// Can you change our function to create such a NamedOne object ?
// ( Hint: in this kata you'll try to define properties of an object )

// Solution 1.
class NamedOne1 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    set fullName(v) {
        // The test() method executes a search for a match between
        // a regular expression and a specified string.
        // Returns true or false.

        // That tests if whitespace is contained at 'v' string,
        if (/ /.test(v)) {
            [this.firstName, this.lastName] = v.split(' ')
        }
    }
}


// Solition 2.
function NamedOne2(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    Object.defineProperty(this, "fullName", {
        set: function (value) {
            let parts = value.split(" ");
            if (parts.length === 2) {
                this.firstName = parts[0];
                this.lastName = parts[1];
            }
        },
        get: function () {
            return this.firstName + ' ' + this.lastName;
        }
    });
}
