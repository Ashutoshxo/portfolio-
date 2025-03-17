document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent default form submission
  
    // Get the values from form fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Form validation
    if (!name || !email || !message) {
      displayModal("Please fill in all fields!", "error");
      return;
    }
  
    if (!validateEmail(email)) {
      displayModal("Please enter a valid email address!", "error");
      return;
    }
  
    // Simulate form submission (you can send it to the server here)
    displayModal("Thank you for contacting me! Your message has been received.", "success");
  
    // Clear the form fields after submission
    document.getElementById("contactForm").reset();
  });
  
  // Email validation function
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  // Display modal with success or error message
  function displayModal(message, type) {
    const modalTitle = type === "success" ? "Success!" : "Error!";
    const modalBodyClass = type === "success" ? "modal-success" : "modal-error";
  
    const modalHtml = `
      <div class="modal fade" id="feedbackModal" tabindex="-1" aria-labelledby="feedbackModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="feedbackModalLabel">${modalTitle}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body ${modalBodyClass}">
              ${message}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    `;
  
    // Append the modal HTML to the body
    document.body.insertAdjacentHTML('beforeend', modalHtml);
  
    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('feedbackModal'));
    modal.show();
  
    // Remove modal from DOM after it is closed
    document.getElementById("feedbackModal").addEventListener('hidden.bs.modal', function () {
      document.getElementById("feedbackModal").remove();
    });
  }
  