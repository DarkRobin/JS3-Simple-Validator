//Phone Number
var userInput = prompt("What is your phone number?", "xxx-xxx-xxxx");
	alert(userInput.charAt(3) === '-' && userInput.charAt(7) === '-' && userInput.length === 12);

//Birth Date
var birthDay = prompt("Please enter your birthday", "xx/xx/xx");
	alert(birthDay.charAt(2) === '/' && birthDay.charAt(5) === '/' && birthDay.length === 8);

//Postal code
var postCode = prompt("Please enter your postal code", "xxxxx");
	alert(postCode.length === 5);


//State Abbreviation
var state = prompt("Please enter your state ", "XX");
	alert(state.charAt(0) === state[0].toUpperCase() && state.charAt(1) === state[1].toUpperCase() && state.length === 2);


//Married?
var married = prompt("Are you married? ", "Yes or No");
	alert(married.toUpperCase() === 'YES' || married.toUpperCase() === 'NO');














