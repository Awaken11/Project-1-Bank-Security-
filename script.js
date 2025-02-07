document.addEventListener("DOMContentLoaded", function() {

    // Handle Login Form Submission
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault(); // Prevent default form submission
            
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Simple validation for demo purposes
            if (username === "admin" && password === "admin123") {
                alert("Login Successful");
                window.location.href = "dashboard.html"; // Redirect to the dashboard page
            } else {
                alert("Invalid Credentials");
            }
        });
    }

    // Handle Transaction Form Submission
    const transactionForm = document.getElementById("transactionForm");
    if (transactionForm) {
        transactionForm.addEventListener("submit", function(e) {
            e.preventDefault(); // Prevent default form submission
            
            const recipient = document.getElementById("recipient").value;
            const amount = document.getElementById("amount").value;

            // Validate inputs
            if (recipient && amount > 0) {
                alert(`Transferred $${amount} to ${recipient}`);
                // Here you can add further functionality like making an API request to process the transfer.
            } else {
                alert("Please fill out all fields with valid data.");
            }
        });
    }

});
