document.addEventListener('DOMContentLoaded', function () {
    // Target the form element
    const form = document.getElementById('reviewForm');

    // Add submit event listener
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const firstName = document.getElementById('first_name').value;
        const lastName = document.getElementById('last_name').value;

        // Detect Stevie

        if (firstName.toLowerCase().startsWith("stev") && lastName.toLowerCase() == "mayor") {
            alert("That review appears to be inaccurate\nYou will now be redirected to a site better fit for you, Mr. Mayor")
            window.location.href = "https://joebiden.com/"
        } else {
            alert("Submission failed: ERROR CODE 404, Please try again later");
            window.location.href = "./index.html"
        }

        // Optionally, you can reset the form after submission
        form.reset();
    });
});
