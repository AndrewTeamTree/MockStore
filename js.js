document.addEventListener("DOMContentLoaded", function() {
    // Get all the "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');

    // Add event listeners to each "Add to Cart" button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Prevent the default action (page reload or link behavior)
            event.preventDefault();

            // Get the product name and price from the button's data attributes
            const productName = event.target.getAttribute('data-product');
            const productPrice = event.target.getAttribute('data-price');

            // Show an alert with the product name and price
            alert(`Item added to the cart: ${productName} - ${productPrice}$`);
        });
    });
});
