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
    if (!/^[a-zA-Z]*$/g.test(text)) {
        alert("Only accepts letters");
        input.focus();
    }
    else {
    	manipulateString(text);
    }
};

/////////////// REVERSING INPUT ////////////////////////

function reversal(text) {
	var reverseString = text.toLowerCase().split("").reverse().join("");
	document.getElementById("rev").innerHTML += reverseString;
};

/////////////// ALPHABETIZING INPUT ////////////////////////

function alphabits(text) {
	var alphabits = text.toLowerCase().split("").sort().join("");
	document.getElementById("alpha").innerHTML += alphabits;
};

/////////////// PALINDROME TEST ////////////////////////

function palindrome(text) {
	var reverseString = text.split("").reverse().join("");
	var palindrome = reverseString.toLowerCase();
	if (palindrome === text.toLowerCase()) {
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
};