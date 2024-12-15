document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the custom order information from localStorage
  const orderInfo = JSON.parse(localStorage.getItem('customOrder'));

  if (orderInfo) {
    // Display the order information in the HTML
    document.getElementById('orderName').textContent = orderInfo.name;
    document.getElementById('orderEmail').textContent = orderInfo.email;
    document.getElementById('orderPhone').textContent = orderInfo.phone;
    document.getElementById('orderFeedback').textContent = orderInfo.feedback;
    document.getElementById('orderCustom').textContent = orderInfo.customOrder ? "Yes" : "No";
  } else {
    // If no order information is found, display a message
    document.getElementById('orderDetails').innerHTML = '<p>No order information available.</p>';
  }
});
