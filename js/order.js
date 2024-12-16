document.addEventListener("DOMContentLoaded", function () {
  const savedOrder = JSON.parse(localStorage.getItem('contactForm'));
  const contactForm = document.getElementById('contactForm');
  
  if (savedOrder) {
    // Populate order confirmation page with saved data
    document.getElementById('orderName').textContent = savedOrder.name || "N/A";
    document.getElementById('orderEmail').textContent = savedOrder.email || "N/A";
    document.getElementById('orderPhone').textContent = savedOrder.phone || "N/A";
    document.getElementById('orderFeedback').textContent = savedOrder.feedback || "N/A";
    document.getElementById('orderCustom').textContent = savedOrder.customOrder ? "Yes" : "No";
  } 




  // Handle custom order form
  
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        feedback: document.getElementById('feedback').value,
        customOrder: document.getElementById('customOrder').checked
      };

      // Save form data to sessionStorage
      localStorage.setItem('contactForm', JSON.stringify(formData));

      alert('Your order information has been saved successfully!');
      contactForm.reset();

      
    });
  } else {
    console.error("Contact form not found.");
  }

  // Order confirmation page logic (from sessionStorage)
  if (document.getElementById('orderConfirmation')) {
    const savedOrder = JSON.parse(localStorage.getItem('contactForm'));
    const orderName = document.getElementById('orderName');
    const orderEmail = document.getElementById('orderEmail');
    const orderPhone = document.getElementById('orderPhone');
    const orderFeedback = document.getElementById('orderFeedback');
    const orderCustom = document.getElementById('orderCustom');
    

    if (savedOrder) {
      orderName.textContent = savedOrder.name || "N/A";
      orderEmail.textContent = savedOrder.email || "N/A";
      orderPhone.textContent = savedOrder.phone || "N/A";
      orderFeedback.textContent = savedOrder.feedback || "N/A";
      orderCustom.textContent = savedOrder.customOrder ? "Yes" : "No";
    }
  }
});

