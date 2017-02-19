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

// function noNumber(evt){
// 	var charCode = (evt.which) ? evt.which : event.keyCode;
//     if(charCode > 31 && (charCode < 48 || charCode > 57))

//     return true;
// 	return false;

// }

/////////////// FUNCTION FOR OUTPUTS ////////////////////////

function manipulateString(e) {

	var reverseString = e.split("").reverse().join("");
	console.log(reverseString);
	document.getElementById("rev").innerHTML += reverseString;

	var alphabits = e.split("").sort().join("");
	console.log(alphabits);
	document.getElementById("alpha").innerHTML += alphabits;

	var palindrome = reverseString.toLowerCase();
	if (palindrome === e.toLowerCase()) {
		document.getElementById("palin").innerHTML += "Yep!";
	} else {
		document.getElementById("palin").innerHTML += "Nope!";
	}

};