/////////////// DECLARING VARIABLES ////////////////////////

var button = document.getElementById("captureUserValue");
var resetButton = document.getElementById("reset");


/////////////// VALIDATING FIELD INPUT ////////////////////////

// function validate() {
//     if (document.myForm.name.value == "") {
//         alert("Enter text with letters only");
//         document.myForm.name.focus();
//         return false;
//     }
//     if (!/^[a-zA-Z]*$/g.test(document.myForm.name.value)) {
//         alert("Invalid characters - letters only please");
//         document.myForm.name.focus();
//         return false;
//     }
// }

/////////////// ADDING EVENT LISTENERS ////////////////////////

button.addEventListener("click", reversal);
button.addEventListener("keypress", reversal);

resetButton.addEventListener("click", function() {
    document.getElementById("inputString") = "";
});

document.onkeydown = function() {
 if (window.event.keyCode === 13) {
   reversal();
 } 
};

document.onclick = function() {
    
}

/////////////// FUNCTIONS FOR OUTPUTS ////////////////////////

function reversal(reverseString) {
    // var reverseString = testString.reverse();
    // return reverseString
    console.log(reverseString);
};

// function alphabits(alphaString) {

// }

// function palindrome(palinString) {

// }

/////////////// CALLING THE FUNCTIONS ////////////////////////

var testString = document.getElementById("inputString");
console.log(testString);
reversal(testString);
// alphabits(testString);
// palindrome(testString);

