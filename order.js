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
 
  document.addEventListener('DOMContentLoaded', function() {
    const savedOrder = JSON.parse(localStorage.getItem('customOrder'));

    if (savedOrder) {
      const orderConfirmation = document.getElementById('orderConfirmation');
      orderConfirmation.innerHTML = `
        <h3>Order Confirmation</h3>
        <p><strong>Name:</strong> ${savedOrder.name}</p>
        <p><strong>Email:</strong> ${savedOrder.email}</p>
        <p><strong>Phone:</strong> ${savedOrder.phone}</p>
        <p><strong>Feedback:</strong> ${savedOrder.feedback}</p>
        <p><strong>Custom Order:</strong> ${savedOrder.customOrder ? 'Yes' : 'No'}</p>
      `;
    }
  });

const savedOrder = JSON.parse(localStorage.getItem('customOrder'));
if (savedOrder) {
  console.log(savedOrder);
  // You can then use the savedOrder object to display the information on your page
}
