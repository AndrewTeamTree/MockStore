document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the custom order information from localStorage
  const savedOrder = JSON.parse(localStorage.getItem('customOrder'));

  if (savedOrder) {
    // Display the order details on the page
    document.getElementById('orderName').textContent = savedOrder.name;
    document.getElementById('orderEmail').textContent = savedOrder.email;
    document.getElementById('orderPhone').textContent = savedOrder.phone;
    document.getElementById('orderFeedback').textContent = savedOrder.feedback;
    document.getElementById('orderCustom').textContent = savedOrder.customOrder ? 'Yes' : 'No';
  } else {
    // If no order data is available, show a default message
    document.getElementById('orderDetails').innerHTML = '<p>No order information available.</p>';
  }
});
