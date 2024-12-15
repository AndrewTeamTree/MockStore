document.addEventListener("DOMContentLoaded", function () {
  
  // Cart Functionality
  const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
  const modal = document.getElementById("cartModal");
  const closeModal = document.getElementById("closeModal");
  const viewCartButton = document.getElementById("viewCartButton");
  const cartItemsContainer = document.getElementById("cartItems");
  const processOrderButton = document.getElementById("processOrderButton");
  const clearCartButton = document.getElementById("clearCartButton");

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

  // Custom Order Form Functionality
  const contactForm = document.getElementById('contactForm');

  // Handle form submission
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the page refresh

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const feedback = document.getElementById('feedback').value;
    const customOrder = document.getElementById('customOrder').checked;

    const orderInfo = {
      name: name,
      email: email,
      phone: phone,
      feedback: feedback,
      customOrder: customOrder
    };

    // Save the order information to localStorage
    try {
      localStorage.setItem('customOrder', JSON.stringify(orderInfo));
      alert('Your order information has been saved successfully!');
    } catch (error) {
      console.error('Error saving order information to localStorage:', error);
    }
    console.log('Form submitted!'); 
    // Optionally clear the form
    contactForm.reset();
  });

  // Display order details on the order confirmation page
  const savedOrder = JSON.parse(localStorage.getItem('customOrder'));

  if (savedOrder) {
    document.getElementById('orderName').textContent = savedOrder.name;
    document.getElementById('orderEmail').textContent = savedOrder.email;
    document.getElementById('orderPhone').textContent = savedOrder.phone;
    document.getElementById('orderFeedback').textContent = savedOrder.feedback;
    document.getElementById('orderCustom').textContent = savedOrder.customOrder ? 'Yes' : 'No';
  } else {
    document.getElementById('orderDetails').innerHTML = '<p>No order information available.</p>';
  }
});
