let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');
let string = ""; // Use 'string' instead of 'String'
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string); // Evaluate the expression
            input.value = string; // Display the result in the input field
        } else if (e.target.innerHTML == 'AC') {
            string = ""; // Clear the string
            input.value = string; // Update the input field
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1); // Remove the last character
            input.value = string; // Update the input field
        } else {
            string += e.target.innerHTML; // Append the clicked button's text
            input.value = string; // Update the input field
        }
    });
});
