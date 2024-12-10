document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    // Ensure the form exists
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent default form submission behavior
            
            // Basic validation
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !subject || !message) {
                alert("All fields are required!");
                return;
            }

            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            alert("Thank you for reaching out! We'll get back to you soon.");
        });
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}