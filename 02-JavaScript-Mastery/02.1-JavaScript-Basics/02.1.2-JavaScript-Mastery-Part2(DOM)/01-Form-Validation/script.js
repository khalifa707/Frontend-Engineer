const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

/*
📚 EXPLANATION - DOM Element Selection:

🎯 Purpose: Get references to HTML form elements for manipulation

🔍 Elements Selected:
- form: The main form container element
- username: Username input field
- email: Email input field
- password: Password input field
- password2: Confirm password input field

💡 Key Concepts:
- document.getElementById(): Selects element by its unique ID attribute
- Storing elements in variables for reuse throughout the script
- These references allow us to access and modify the form elements
- Essential first step in any DOM manipulation script

🏗️ HTML Structure Expected:
<form id="form">
  <input id="username" type="text" />
  <input id="email" type="email" />
  <input id="password" type="password" />
  <input id="password2" type="password" />
</form>
*/


//Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

/*
📚 EXPLANATION - showError Function:

🎯 Purpose: Display error styling and message for invalid form inputs

🔧 Function Parameters:
- input: The form input element that has an error
- message: The error message to display to the user

⚙️ How It Works:
1. Gets the parent container (formControl) of the input field
2. Adds 'error' class to change visual styling (red border, etc.)
3. Finds the <small> element inside the container for error messages
4. Sets the error message text that users will see

🎨 Visual Effect:
- Changes input styling to indicate error (usually red border/background)
- Displays custom error message below the input field
- Provides immediate visual feedback to users

💡 CSS Classes Expected:
.form-control.error {
  border-color: red;
  background-color: #ffe6e6;
}

🏗️ HTML Structure Expected:
<div class="form-control">
  <input id="username" />
  <small></small>  <!-- Error message goes here -->
</div>
*/


//Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

/*
📚 EXPLANATION - showSuccess Function:

🎯 Purpose: Display success styling for valid form inputs

🔧 Function Parameters:
- input: The form input element that passed validation

⚙️ How It Works:
1. Gets the parent container (formControl) of the input field
2. Adds 'success' class to change visual styling (green border, etc.)
3. Removes any previous error styling by replacing the className

🎨 Visual Effect:
- Changes input styling to indicate success (usually green border/background)
- Provides positive visual feedback that the field is valid
- Clears any previous error messages or styling

💡 CSS Classes Expected:
.form-control.success {
  border-color: green;
  background-color: #e6ffe6;
}

🔄 State Management:
- Replaces entire className, removing 'error' class if it existed
- Ensures clean state transition from error to success
- Works in conjunction with showError() for complete validation feedback

🎭 User Experience:
- Immediate positive feedback when user fixes validation errors
- Clear visual indication of which fields are correctly filled
- Helps users understand form completion progress
*/


//Check email is valid
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/*
📚 EXPLANATION - isValidEmail Function:

🎯 Purpose: Validate email format using regular expression pattern matching

🔧 Function Parameters:
- email: The email string to validate

⚙️ How It Works:
1. Uses a comprehensive regular expression (regex) to match valid email patterns
2. Converts email to lowercase for case-insensitive validation
3. Returns true if email matches the pattern, false otherwise

🔍 Regex Pattern Breakdown:
- ^: Start of string
- ([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*): Local part (before @)
- |(".+"): Alternative quoted local part
- @: Required @ symbol
- ((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\]): IP address format
- |(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})): Domain name format
- $: End of string

✅ Valid Email Examples:
- user@example.com
- test.email@domain.co.uk
- user123@test-domain.org

❌ Invalid Email Examples:
- plainaddress
- @missingdomain.com
- user@.com
- user..double.dot@example.com

💡 Key Features:
- Comprehensive validation covering most email formats
- Case-insensitive validation
- Returns boolean for easy conditional logic
- Industry-standard regex pattern for email validation
*/


//Get field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

/*
📚 EXPLANATION - getFieldName Function:

🎯 Purpose: Convert input element ID to user-friendly field name for error messages

🔧 Function Parameters:
- input: The form input element whose ID will be converted

⚙️ How It Works:
1. Gets the input element's ID attribute
2. Capitalizes the first character using charAt(0).toUpperCase()
3. Concatenates with the rest of the ID using slice(1)
4. Returns the formatted field name

🔄 Transformation Examples:
- "username" → "Username"
- "email" → "Email"
- "password" → "Password"
- "password2" → "Password2"
- "firstName" → "FirstName"

💡 Why This Is Useful:
- Creates consistent, professional error messages
- Avoids hardcoding field names in multiple places
- Makes error messages more user-friendly
- Automatically handles any new fields added to the form

📝 Usage in Error Messages:
- Instead of: "username is required"
- Shows: "Username is required"
- Instead of: "email must be at least 3 characters"
- Shows: "Email must be at least 3 characters"

🔧 String Methods Used:
- charAt(0): Gets the first character
- toUpperCase(): Converts to uppercase
- slice(1): Gets substring from index 1 to end
- Concatenation (+): Joins the capitalized first letter with the rest
*/


//Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

/*
📚 EXPLANATION - checkRequired Function:

🎯 Purpose: Validate that required form fields are not empty

🔧 Function Parameters:
- inputArr: Array of input elements to check for required values

⚙️ How It Works:
1. Iterates through each input element using forEach()
2. Checks if the input value is empty after trimming whitespace
3. Shows error message if field is empty, success styling if filled
4. Uses template literals for dynamic error messages

🔍 Validation Logic:
- input.value.trim() === '': Checks for empty or whitespace-only values
- trim(): Removes leading/trailing whitespace to prevent spaces-only submissions
- Template literal: `${getFieldName(input)} is required`

📝 Error Messages Generated:
- "Username is required"
- "Email is required"
- "Password is required"
- "Password2 is required"

💡 Key Features:
- Handles multiple fields efficiently with single function
- Prevents whitespace-only submissions
- Provides consistent error messaging
- Immediate visual feedback for each field

🔄 Usage Example:
checkRequired([username, email, password, password2]);

🎯 Benefits:
- DRY principle: Don't Repeat Yourself
- Scalable: Easy to add new required fields
- Consistent: Same validation logic for all required fields
- User-friendly: Clear, specific error messages
*/


//Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

/*
📚 EXPLANATION - checkLength Function:

🎯 Purpose: Validate that input values meet minimum and maximum length requirements

🔧 Function Parameters:
- input: The form input element to validate
- min: Minimum required character length
- max: Maximum allowed character length

⚙️ How It Works:
1. Checks if input length is below minimum requirement
2. Checks if input length exceeds maximum limit
3. Shows appropriate error message or success styling
4. Uses dynamic error messages with actual min/max values

🔍 Validation Logic:
- input.value.length < min: Too short
- input.value.length > max: Too long
- else: Perfect length (between min and max inclusive)

📝 Error Messages Generated:
- "Username must be at least 3 characters"
- "Username must be less than 15 characters"
- "Password must be at least 6 characters"
- "Password must be less than 25 characters"

💡 Security & UX Benefits:
- Prevents extremely short passwords (security)
- Prevents database overflow with long inputs
- Guides users to appropriate input lengths
- Immediate feedback during typing

🔄 Usage Examples:
- checkLength(username, 3, 15): Username 3-15 characters
- checkLength(password, 6, 25): Password 6-25 characters
- checkLength(description, 10, 500): Description 10-500 characters

🎯 Best Practices:
- Username: 3-15 characters (readable, not too long)
- Password: 6-25 characters (secure but manageable)
- Email: Usually no length check needed (handled by email validation)
*/


//Check passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

/*
📚 EXPLANATION - checkPasswordsMatch Function:

🎯 Purpose: Ensure password and confirm password fields contain identical values

🔧 Function Parameters:
- input1: The original password input field
- input2: The confirm password input field

⚙️ How It Works:
1. Compares the values of both password fields using strict equality (!==)
2. Shows error on the second password field if they don't match
3. Only shows error - success styling handled by other validation functions

🔍 Validation Logic:
- input1.value !== input2.value: Passwords are different
- Uses strict equality to ensure exact character match
- Case-sensitive comparison (as passwords should be)

📝 Error Message:
- "Passwords do not match" - Clear, specific feedback

💡 UX Design Decisions:
- Error shown on second password field (input2)
- User typically types password first, then confirms
- Error on confirmation field makes logical sense
- Doesn't show success here (handled by other functions)

🔒 Security Considerations:
- Prevents typos in password creation
- Ensures user knows exactly what password they're setting
- Critical for account security and user access

🔄 Usage Example:
checkPasswordsMatch(password, password2);

⚠️ Important Notes:
- Only checks for mismatch, doesn't validate if passwords are empty
- Should be used in conjunction with checkRequired() and checkLength()
- Assumes both fields have values (other functions handle empty validation)

🎯 Form Flow:
1. Check if passwords are required (checkRequired)
2. Check password length (checkLength)
3. Check if passwords match (checkPasswordsMatch)
*/


//Check email
function checkEmail(input) {
    if (isValidEmail(input.value)) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

/*
📚 EXPLANATION - checkEmail Function:

🎯 Purpose: Validate email format and provide appropriate visual feedback

🔧 Function Parameters:
- input: The email input element to validate

⚙️ How It Works:
1. Uses the isValidEmail() helper function to check email format
2. Shows success styling if email is valid
3. Shows error message if email format is invalid

🔍 Validation Flow:
- Calls isValidEmail(input.value) which returns true/false
- True: Email format is correct → showSuccess()
- False: Email format is incorrect → showError()

📝 Error Message:
- "Email is not valid" - Simple, clear feedback

💡 Integration with Other Functions:
- Works with isValidEmail() for the actual validation logic
- Uses showSuccess() and showError() for consistent UI feedback
- Part of the overall form validation chain

📧 Email Validation Examples:
✅ Valid: user@example.com, test.email@domain.co.uk
❌ Invalid: plaintext, @domain.com, user@, user..double@domain.com

🔄 Usage Example:
checkEmail(email);

🎯 Benefits:
- Separates email validation logic from UI feedback
- Reusable function for any email input
- Consistent error messaging
- Immediate user feedback

⚠️ Assumptions:
- Assumes input has a value (empty check handled by checkRequired)
- Focuses only on format validation
- Doesn't check if email actually exists (would require server-side validation)
*/

//Event Listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);

/*    if (username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, 'Email is required');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Email is not valid');
    } else {
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password, 'Password is required');
    } else {
        showSuccess(password);
    }

    if (password2.value === '') {
        showError(password2, 'Password 2 is required');
    } else {
        showSuccess(password2);
    }*/
});

/*
📚 EXPLANATION - Form Submit Event Listener:

🎯 Purpose: Handle form submission and run all validation checks

⚙️ How It Works:
1. Listens for 'submit' event on the form element
2. Prevents default form submission with e.preventDefault()
3. Runs all validation functions in sequence
4. Provides immediate feedback without page reload

🔧 Event Handling:
- addEventListener('submit', callback): Attaches submit event listener
- Arrow function (e) => { }: Modern ES6 syntax for event handler
- e.preventDefault(): Stops form from submitting to server

🔍 Validation Sequence:
1. checkRequired(): Ensures all fields have values
2. checkLength(username, 3, 15): Username length validation
3. checkLength(password, 6, 25): Password length validation
4. checkEmail(email): Email format validation
5. checkPasswordsMatch(): Password confirmation validation

💡 Modern vs Legacy Code:
✅ Current (Clean, Modular):
- Uses dedicated validation functions
- DRY principle (Don't Repeat Yourself)
- Easy to maintain and extend
- Consistent error handling

❌ Legacy (Commented Out):
- Repetitive if/else statements
- Hardcoded validation logic
- Difficult to maintain
- Inconsistent error messages

🎯 Benefits of Current Approach:
- Modular: Each validation is a separate function
- Reusable: Functions can be used elsewhere
- Maintainable: Easy to modify validation rules
- Scalable: Easy to add new validation types
- Consistent: Same error/success handling throughout

🔄 Form Submission Flow:
1. User clicks submit button
2. Event listener triggers
3. Default submission prevented
4. All validations run
5. Visual feedback provided
6. Form only submits if all validations pass

⚠️ Important Notes:
- Form doesn't actually submit anywhere (no action attribute)
- In real application, would need server-side validation too
- Client-side validation is for UX, not security
- Could add logic to only submit if all validations pass
*/