document.addEventListener("DOMContentLoaded", function () {
  // Retrieve and display the custom order information
  const orderInfo = JSON.parse(localStorage.getItem('customOrder'));

  if (orderInfo) {
    document.getElementById('orderName').textContent = orderInfo.name;
    document.getElementById('orderEmail').textContent = orderInfo.email;
    document.getElementById('orderPhone').textContent = orderInfo.phone;
    document.getElementById('orderFeedback').textContent = orderInfo.feedback;
    document.getElementById('orderCustom').textContent = orderInfo.customOrder ? "Yes" : "No";
  } else {
    document.getElementById('orderDetails').innerHTML = '<p>No order information available.</p>';
  }
});
