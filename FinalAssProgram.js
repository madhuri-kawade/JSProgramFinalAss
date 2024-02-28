// Prompt the user for their name
var userName = prompt("Please enter your name:");

// Check if the user provided a name
if (userName !== null && userName !== "") {
    // Display a greeting message using an alert box
    alert("Hello, " + userName + "!");
} else {
    // Display a message if the user did not provide a name
    alert("Hello, anonymous!");
}
