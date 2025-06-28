
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
            alert(`That review appears to be inaccurate. You will now be redirected to a site better fit for you, ${firstName} ${lastName}`);
            window.location.href = "https://gavinnewsom.com/";
        } else {
            alert("Thank you for the review, you will now be redirected to the homepage");
            window.location.href = "./index.html";
        }

        // Optionally, you can reset the form after submission
        form.reset();
    });
});
