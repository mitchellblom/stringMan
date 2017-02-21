/////////////// EXECUTE BUTTON /////////////////////////////////

var input = document.getElementById("inputString");

var button = document.getElementById("captureUserValue");
button.addEventListener("click", validate);
button.addEventListener("keypress", validate);

document.onkeydown = function() {
 if (window.event.keyCode === 13) {
   validate(input.value);
 }
};

/////////////// VALIDATING FIELD INPUT ////////////////////////

function validate(e) {
    // if (input == "") {
    //     alert("Enter something, silly!");
    //     input.focus();
    // }
    // if (!/^[a-z]*$/g.test(input)) {
    //     alert("Only accepts lowercase letters");
    //     input.focus();
    // }
    // else {
    	manipulateString(e);
    // }
};

/////////////// REVERSING INPUT ////////////////////////

function reversal(e) {
	var reverseString = e.split("").reverse().join("");
	console.log(reverseString);
	document.getElementById("rev").innerHTML += reverseString;
};

/////////////// ALPHABETIZING INPUT ////////////////////////

function alphabits(e) {
	var alphabits = e.split("").sort().join("");
	console.log(alphabits);
	document.getElementById("alpha").innerHTML += alphabits;
};

/////////////// PALINDROME TEST ////////////////////////

function palindrome(e) {
	var reverseString = e.split("").reverse().join("");
	var palindrome = reverseString.toLowerCase();
	if (palindrome === e.toLowerCase()) {
		document.getElementById("palin").innerHTML = "Yay! This string is a Palindrome.";
	} else {
		document.getElementById("palin").innerHTML = "Sorry, this string is not a Palindrome.";
	}
};

/////////////// EXECUTING THE FUNCTIONS ////////////////////////

function manipulateString(e) {
	reversal(e);
	alphabits(e);
	palindrome(e);
};