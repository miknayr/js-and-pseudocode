/*
	Part 1: Create three variables: name, age, address.
	Create a fourth variable, greeting, that combines these 3 variables
	to form a greeting.
	For example, "Hello, my name is Anthony. I'm 20 years old and live in 100 Main St."
	Log this variable to the console (console.log(yourVariableName)). 
	Check the console to make sure you're getting the desired result.

*/
let name = "Ryan.";
let age = "30";
let address = "123 saratoga ave.";
let greeting = "Hello, my name is " + name + " I'm " + age + " and live on " + address

console.log(greeting);


/*
	Part 2: Create another variable called greeting2. This time, use the
	new ES6 Syntax, string interpolation, to create the same greeting.

	Hint: String interpolation uses backticks (`) instead of quotation marks.

	Log this variable to the console (console.log(yourVariableName)). 
	Check the console to make sure you're getting the desired result.

*/

let greeting2 = `Hello, my name is ${name} I'm ${age} and live on ${address}`
console.log(greeting2)


/* 
	Part 3: "Code Testing." Let's check and see if we did everything correctly and that `greeting` returns the same value as `greeting2`.
	Create a variable problemSolved whose value is the boolean value of if `greeting` and `greeting2` are equivalent. Log this variable to the console to check the values result.
	If the return is false, correct your bugs above until `greeting` and `greeting2` are equivalent. 
*/

// let problemSolved = true
// function problem(){
// 	if (greeting == greeting2) {
// 		let problemSolved = true;
// 	} if else {
// 		let problemSolved = false
// 	}
// }

// console.log(problem);



let problemSolved = (greeting === greeting2);
console.log(problemSolved);

/*
	Part 4: (No coding is needed for this part).
	We are given a list of 20 numbers. We have to go through the list and find the
	largest number.

	What would the pseudocode for this problem look like? What variables would we need?

	Hint: How would we solve this problem if we had to do this with pencil and paper?
	What number would we write down to remember? Anything that you write down probably
	belongs in a variable.

	Bonus: What would the pseudocode look like if you also had to find the smallest number?
*/

/* first create a variable with an array table of the 20 numbers, spaced out by commas
- and then create another variable with the Math.max forumla, and inside of it, using the spread syntax, ... and arr to account for all the numbers inside.  
- and then finally, i would console log "max" inside the parameters(?) and it should return the largest number within the array.

for min, i would replace Math.max with Math.min.
*/


// var arr = [1, 2, 3, 234, 343, 2232, 221, 12, 65];
// var max = Math.max(...arr);
// console.log(max);