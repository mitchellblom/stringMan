/////////////// EXECUTE BUTTON /////////////////////////////////

var input = document.getElementById("inputString");

var button = document.getElementById("captureUserValue");
button.addEventListener("click", getInputStringValue);
button.addEventListener("keypress", validate);

document.onkeydown = function() {
 if (window.event.keyCode === 13) {
   validate(input.value);
 }
};

function getInputStringValue(){
	validate(input.value);
};

/////////////// VALIDATING FIELD INPUT ////////////////////////

function validate(text) {
	console.log(text);
    if (text == "") {
        alert("Enter something, silly!");
        input.focus();
    }
    if (!/^[a-zA-Z\s+]*$/g.test(text)) {
        alert("Only accepts letters");
        input.focus();
    }
    else {
    	manipulateString(text);
    }
};

/////////////// REVERSING INPUT ////////////////////////

function reversal(text) {
	document.getElementById("rev").innerHTML = "Reversed: ";
	var reverseString = text.toLowerCase().split("").reverse().join("");
	document.getElementById("rev").innerHTML = `Reversed: ${reverseString}`;
};

/////////////// ALPHABETIZING INPUT ////////////////////////

function alphabits(text) {
	document.getElementById("alpha").innerHTML = "Alphabetized: ";
	var alphabits = text.replace(/\s+/g, '').toLowerCase().split("").sort().join("");
	document.getElementById("alpha").innerHTML = `Alphabetized: ${alphabits}`;
};

/////////////// PALINDROME TEST ////////////////////////

function palindrome(text) {
	var reverseAndSquish = text.replace(/\s+/g, '').toLowerCase().split("").reverse().join("");
	var palindrome = reverseAndSquish.toLowerCase();
	if (palindrome === text.replace(/\s+/g, '').toLowerCase()) {
		document.getElementById("palin").innerHTML = "Yay! This string is a Palindrome.";
	} else {
		document.getElementById("palin").innerHTML = "Sorry, this string is not a Palindrome.";
	}
};

/////////////// EXECUTING THE FUNCTIONS ////////////////////////

function manipulateString(text) {
	reversal(text);
	alphabits(text);
	palindrome(text);
	input.value = "";
};