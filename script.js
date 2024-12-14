
document.addEventListener("DOMContentLoaded", function () {
    // Initialize empty cart array
    let cart = [];
  
    // Get all the "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    
    // Add event listener to each "Add to Cart" button
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default action (page reload or link behavior)
  
        // Get the product name and price from the button's data attributes
        const productName = event.target.getAttribute('data-product');
        const productPrice = event.target.getAttribute('data-price');
  
        // Add the product to the cart array
        cart.push({ name: productName, price: productPrice });
  
        // Optionally, show an alert or update the cart icon (if implemented)
        alert(`${productName} added to your cart.`);
      });
    });
  
    // Get the modal, close button, and other elements
    const modal = document.getElementById("cartModal");
    const closeModal = document.getElementById("closeModal");
    const viewCartButton = document.getElementById("viewCartButton");
    const cartItemsContainer = document.getElementById("cartItems");
    const processOrderButton = document.getElementById("processOrderButton");
    const clearCartButton = document.getElementById("clearCartButton");
  
    // Function to display the cart in the modal
    function updateCartModal() {
      // Clear the cart list
      cartItemsContainer.innerHTML = '';
  
      if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<li>Your cart is empty.</li>';
      } else {
        // Display each item in the cart
        cart.forEach(item => {
          const listItem = document.createElement("li");
          listItem.textContent = `${item.name} - $${item.price}`;
          cartItemsContainer.appendChild(listItem);
        });
      }
    }
  
    // When the user clicks the "View Shopping Cart" button, open the modal
    viewCartButton.addEventListener('click', function () {
      updateCartModal(); // Update the cart contents
      modal.style.display = "block"; // Show the modal
    });
  
    // When the user clicks the close button, close the modal
    closeModal.addEventListener('click', function () {
      modal.style.display = "none"; // Close the modal
    });
  
    // When the user clicks anywhere outside the modal, close it
    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  
    // When the user clicks "Process Order"
    processOrderButton.addEventListener('click', function () {
      if (cart.length === 0) {
        alert("Your cart is empty. Please add items to the cart before proceeding.");
      } else {
        alert("Thank you for your order!");
        cart = []; // Clear the cart after processing
        updateCartModal(); // Update the modal to reflect the cleared cart
      }
    });
  
    // When the user clicks "Clear Cart"
    clearCartButton.addEventListener('click', function () {
      cart = []; // Clear the cart
      alert("Cart is cleared!");
      updateCartModal(); // Update the modal to reflect the cleared cart
    });
  });
  
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        }).catch(error => {
            console.log('Service Worker registration failed:', error);
        });
    });
}
