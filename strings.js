// set an event listener on the button to fire the manipulate function when clicked
document.getElementById("manipulate").addEventListener("click", manipulate);

// set an event listener on the text fields to fire the manipulate function when a user presses ENTER
    //listen for the ENTER key (keyCode=13) and call the manipulate function if true
document.getElementById("string").onkeypress = function(event) {
    if(event.keyCode == 13) {
		manipulate();
	}
}

// set a keyup event listener on the text field that fires the alphaOnly function every time a key is raised
	// allow keys a-z (65-90), backspace(8), enter(13), and shift(16)
	// if the user presses an inappropriate key, signal the user and reset the window
document.getElementsByTagName("input")[0].addEventListener("keyup", alphaOnly);
function alphaOnly(event) {
  	var key = event.keyCode;
  	if ((key >= 65 && key <= 90) || key == 8 || key == 13 || key == 16) {
  		return true;
  	} else alert("Please enter letters only.")
  		window.location.reload();
}

// manipulate the string
	// grab the input value from the text field and log it in a variable
function manipulate() {
	var testString = document.getElementById("string").value;
	// reverse the string
		// establish an empty array
		// initiate a loop to traverse over the string letters backwards
			// push each letter into an array from last to first
		// transform the array into a string
		// display the string in the appropriate place on the window
	function reversal() {
		var revArray = [];
		for (var i = testString.length - 1; i >= 0; i--) {
			revArray.push(testString[i]);
		}	
		revArray = revArray.join("");
		document.getElementById("reversed").innerHTML = "The string reversed is: " + revArray;
	}
	// alphabetize the string
		/* transform the string to lowercase letters to prepare them for comparison, then split them into an array of substrings, sort them, rejoin them, and assign them to a variable */
		// display them in the appropriate place in the window
	function alphabits() {
		var alphaString = testString.toLowerCase().split('').sort().join('');
		document.getElementById("alphabetized").innerHTML = "The string alphabetized is: " + alphaString;
	}
	// determine whether the string is a palindrome
		// transform the letters to lowercase to prepare them for comparison
		// initiate a loop
			// compare each letter to its corresponding partner in the palindromic pattern
			// display whether or not the string is a palindrome
	function palindrome() {
  		testString = testString.toLowerCase();
  		for (var i = 0; i < testString.length; i++) {
	    	if (testString[i] !== testString[testString.length - i - 1]) {
	    		document.getElementById("palindrome").innerHTML = "The string is NOT a palindrome."
	    	} else { 
	    		document.getElementById("palindrome").innerHTML = "The string is a palindrome."
	    	}
  		}
	}
	// call the individual functions
	reversal(testString);
	alphabits(testString);
	palindrome(testString);
}