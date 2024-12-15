document.addEventListener("DOMContentLoaded", function () {
  const savedOrder = JSON.parse(sessionStorage.getItem('contactForm'));

  if (savedOrder) {
    // Populate order confirmation page with saved data
    document.getElementById('orderName').textContent = savedOrder.name || "N/A";
    document.getElementById('orderEmail').textContent = savedOrder.email || "N/A";
    document.getElementById('orderPhone').textContent = savedOrder.phone || "N/A";
    document.getElementById('orderFeedback').textContent = savedOrder.feedback || "N/A";
    document.getElementById('orderCustom').textContent = savedOrder.customOrder ? "Yes" : "No";
  } 
});
