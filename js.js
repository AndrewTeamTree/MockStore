document.addEventListener("DOMContentLoaded", function() {
    // Get all the "Add to Cart" buttons and "Sign Up" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    const signUpButtons = document.querySelectorAll('.signUp');
    
    // Add event listeners to each "Add to Cart" button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default action (link navigation)
            
            const productName = event.target.getAttribute('aria-label');
            alert(`Item added to the cart: ${productName}`);
        });
    });

    // Add event listeners to each "Sign Up" button
    signUpButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default button action

            // Get the email input field value
            const emailInput = document.getElementById('emailInput');
            const email = emailInput.value;

            // Check if the email is not empty
            if (email) {
                alert(`Thank you for signing up! We've received your email: ${email}`);
                emailInput.value = ''; // Clear the input after successful sign-up
            } else {
                alert('Please enter a valid email address.');
            }
        });
    });
});

       