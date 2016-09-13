is.js
=====


* is.string(s)
    * Determines if the argument is a string
    * is.string(12345) // false
* is.number(n)
    * Determines if the argument is a number
    * is.number("12345") // false
* is.bool(b)
    * Determines if the argument is a boolean (true or false)
* is.fn(f)
    * Determines if the argument is a function
* is.array(a)
    * Determines if the argument is an array
* is.object(o)
    * Determines if the argument is an object. Since nearly all Javascript types inherit from Object, this will most likely return true for anything but numbers, strings, booleans, and null/undefined. This function can be used to determine if arbitrary properties can be set on the given object.
* is.regex(r)
    * Determines if the argument is a regular expression object
* is.element(e)
    * Determines if the argument is an HTMLElement. Does not return true for window or document.

* is.numeric(n)
    * Determines if the argument is a number-like value;
    * is.numeric("12345")  //true
    * is.numeric("-12345") //true
	
* is.hash(h)
    * Determines if the argument is a hash, or key/value pair object that is not an Array, function, or user-defined object.
    * is.hash({})  // true
	
* is.set(variable)
    * Determines if the specified variable is undefined or null.
    * is.set(null)  // false
    * is.set(undefined) // false
* is.empty(s)
    * is.empty("") // true
    * is.empty([]) // true
    * is.empty({}) // true
    * is.empty(null)  // true
    * is.empty(undefined) // true

