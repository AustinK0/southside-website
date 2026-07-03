
function displayMessage(message, redirectUrl) {
    // Create a message container
    const messageContainer = document.createElement('div');
    messageContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;

    // Create the text element
    const messageText = document.createElement('div');
    messageText.style.cssText = `
        color: white;
        font-size: 3rem;
        text-align: center;
        padding: 40px;
        max-width: 80%;
        line-height: 1.4;
        font-weight: bold;
    `;
    messageText.textContent = message;

    messageContainer.appendChild(messageText);
    document.body.appendChild(messageContainer);

    // Redirect after 3 seconds
    setTimeout(function () {
        window.location.href = redirectUrl;
    }, 5000);
}

document.addEventListener('DOMContentLoaded', function () {
    // Target the form element
    const form = document.getElementById('reviewForm');

    // Add submit event listener
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const rating = document.querySelector('input[name="rating"]:checked');
        const firstName = document.getElementById('first_name').value;
        const lastName = document.getElementById('last_name').value;

        // Check if rating is selected
        if (!rating) {
            alert("Please select a rating.");
            return;
        }

        // Handle rating
        if (rating.value < 5) {
            displayMessage(`That review appears to be inaccurate. You will now be redirected to a site better fit for you, ${firstName} ${lastName}`, "https://gavinnewsom.com/");
        } else {
            displayMessage("Thank you for the review, you will now be redirected to the homepage", "./index.html");
        }

        // Optionally, you can reset the form after submission
        form.reset();
    });
});
