'use strict';

// We covered some ARITHMETIC OPERATORS on day 6, but we didn't cover all of them.
3+4;
5-3;
4*43;
6/3;


/*

Here are some additional arithmetic operators:

++
--
+=
-=
*=
/=


*/


// ++ can be used to increment a value. The below two lines perform the same task
num = num + 1;
num++;



// -- used to decrement
let num2 = 5;
num = num - 1;
num--;




// ASSIGNMENT OPERATORS
/*
=
+=
-=
*=
/= 
*/

// I have a salary of 90,000 and received 
// a bonus of 500
let salary = 90000;
let bonus = 500;

salary = salary + bonus; 
salary += bonus;  // this is a more succinct way of writing the previous line



// Let's say I'm a waiter who makes $800 every two weeks. I just broke a dish. That gets taken out of my paycheck.
let waiterSalary = 800;
let dishPrice = 10;

waiterSalary = waiterSalary - dishPrice
waiterSalary -= dishPrice; // this is a more succinct way of writing the previous line



// What if I knocked over a stack of 5 dishes!
waiterSalary -= dishPrice * 5;




// ACTIVITY

// You're creating an accounting platform. Create a function that takes a salary, 
// and adds a $5,000 bonus to it. Log the total.

function salaryAfterBonus(salary) {
	salary += 5000;
	console.log(salary);
}

salaryAfterBonus(90000);


function salaryAfterBonus2(salary, bonus) {
	salary += bonus;
	console.log(salary);
}

salaryAfterBonus2(90000, 5000);