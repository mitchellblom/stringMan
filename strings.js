/////////////// EXECUTE BUTTON /////////////////////////////////

var input = document.getElementById("inputString");

var button = document.getElementById("captureUserValue");
button.addEventListener("click", manipulateString(input.value));
button.addEventListener("keypress", manipulateString(input.value));

document.onkeydown = function() {
 if (window.event.keyCode === 13) {
   manipulateString(input.value);
 }
};

/////////////// VALIDATING FIELD INPUT ////////////////////////


/////////////// FUNCTIONS FOR OUTPUTS ////////////////////////

function manipulateString(e) {
	    var reverseString = e.split("").reverse().join("");
	//     reverseString = document.getElementById("rev").innerHTML;
	//     return reverseString;
	// reversal();
	console.log(reverseString);
};

// function alphabits(alphaString) {

// }

// function palindrome(palinString) {

// }



/////////////// CALLING THE FUNCTIONS ////////////////////////

// reversal(testString);
// alphabits(testString);
// palindrome(testString);

