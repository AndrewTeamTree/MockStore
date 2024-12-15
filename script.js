document.addEventListener("DOMContentLoaded", function () {
  
  // Cart Functionality
  const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
  const modal = document.getElementById("cartModal");
  const closeModal = document.getElementById("closeModal");
  const viewCartButton = document.getElementById("viewCartButton");
  const cartItemsContainer = document.getElementById("cartItems");
  const processOrderButton = document.getElementById("processOrderButton");
  const clearCartButton = document.getElementById("clearCartButton");

  if (!viewCartButton || !cartItemsContainer || !modal || !closeModal) {
    console.error("Some essential elements are missing in the DOM.");
    return; // Exit script if essential elements are missing
  }
  // Function to update the cart modal
  function updateCartModal() {
    try {
      const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
      cartItemsContainer.innerHTML = '';

      if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<li>Your cart is empty.</li>';
      } else {
        cart.forEach(item => {
          const listItem = document.createElement("li");
          listItem.textContent = `${item.name} - $${item.price}`;
          cartItemsContainer.appendChild(listItem);
        });
      }
    } catch (error) {
      console.error('Error parsing cart data from sessionStorage:', error);
    }
  }

  // Add product to cart
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function (event) {
      event.preventDefault();

      const productName = event.target.getAttribute('data-product');
      const productPrice = event.target.getAttribute('data-price');
      let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

      cart.push({ name: productName, price: productPrice });
      sessionStorage.setItem('cart', JSON.stringify(cart));

      alert(`${productName} added to your cart.`);
    });
  });

  document.querySelector('.signUp').addEventListener('click', function () {
    alert('Thank you for signing up!');
  });

  // View cart button
  viewCartButton.addEventListener('click', function () {
    updateCartModal();
    modal.style.display = "block";
  });

  // Close the modal
  closeModal.addEventListener('click', function () {
    modal.style.display = "none";
  });

  // Close the modal if clicked outside of it
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Process order
  processOrderButton.addEventListener('click', function () {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items to the cart before proceeding.");
    } else {
      alert("Thank you for your order!");
      sessionStorage.removeItem('cart');
      updateCartModal();
    }
  });

  // Clear cart
  clearCartButton.addEventListener('click', function () {
    sessionStorage.removeItem('cart');
    alert("Cart is cleared!");
    updateCartModal();
  });





//function to view order-confirmation.html


 // View custom order-confirmation
 viewCartButton.addEventListener('click', function () {
  //function();
  modal.style.display = "block";
});

  // Handle custom order form
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) {
    console.error("Contact form not found.");
    return; // Exit the script if the contact form is missing
  }
  
  else if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const feedback = document.getElementById('feedback').value;
      const customOrder = document.getElementById('customOrder').checked;

      const orderInfo = { name, email, phone, feedback, customOrder };
      localStorage.setItem('customOrder', JSON.stringify(orderInfo));
      alert('Your order information has been saved successfully!');
      contactForm.reset();
    });
  } else {
    console.error("Contact form not found");
  }

 // Display the order confirmation section
 const orderConfirmation = document.getElementById('orderConfirmation');
 orderConfirmation.style.display = 'block';

  // Order confirmation page
  const savedOrder = JSON.parse(localStorage.getItem('customOrder'));
  const orderName = document.getElementById('orderName');
  const orderEmail = document.getElementById('orderEmail');
  const orderPhone = document.getElementById('orderPhone');
  const orderFeedback = document.getElementById('orderFeedback');
  const orderCustom = document.getElementById('orderCustom');
  const orderDetails = document.getElementById('orderDetails');

  if (!orderConfirmation) {
    console.error("Order confirmation element not found.");
    return; // Exit the script if the order confirmation element is missing
  } else
  if (orderName && savedOrder) {
    orderName.textContent = savedOrder.name || "N/A";
    orderEmail.textContent = savedOrder.email || "N/A";
    orderPhone.textContent = savedOrder.phone || "N/A";
    orderFeedback.textContent = savedOrder.feedback || "N/A";
    orderCustom.textContent = savedOrder.customOrder ? "Yes" : "No";
  } else if (orderDetails) {
    orderDetails.innerHTML = '<p>No order information available.</p>';
  }

   // Optionally hide the form
   //contactForm.style.display = 'none';
});