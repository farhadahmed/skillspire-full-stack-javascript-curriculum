// One data type in JS is the 'numbers' data type

32

3.43556

Math.PI


// Programs commonly use numbers for arithmetic
// Arithmetic operators: +, -, /, *, %
// 

3 + 4

3 + 2 * 2

// JS runs arithmatic using mathematic order of operations
// Think of PEMDAS (Parentheses, Exponents, Multiplication and Division, Addition and Subtraction)
// When there is more than one + or - sign, it's computed from left to right. Same for * and /

3 + 2 * 2 / 2

(3 + 2) * 2

// Modulo (the percent sign) returns the remainder after dividing the value on the left with 
// the value on the right.

8%2

9%5

// NaN stands for Not A Number.  NaN sometimes represents unrepresentable data. It may also get
// returned if you attempt to do something like multiply a string by a number.
NaN

// Math.random() returns a random floating point value from 0 to 1.
Math.random()

// Adding a * followed by a number at the end of Math.random() will give you random numbers
// from 0 up to (but not including) the number you specified.
Math.random()*3

// Math.floor(Math.random()*3) returns an integer (as opposed to a floating point) less than the
// number you specify after the *
Math.floor(Math.random() * 3);



/*
 Exercise
 1. Generate a random number from 0-10
 2. Find the remainder of 5/2
*/

