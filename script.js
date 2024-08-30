// Function to show a section and hide all others
function showSection(sectionId) {
    // Get all sections
    const sections = document.querySelectorAll('.section');

    // Hide all sections
    sections.forEach((section) => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Registration Form Validation
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Form fields
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const checkInDate = document.getElementById('checkInDate').value;
    const checkOutDate = document.getElementById('checkOutDate').value;
    const roomType = document.getElementById('roomType').value;

    let isValid = true;
    let roomCost = 0;

    // Validate fields (similar to the previous code)
    // Check username, email, password, check-in and check-out dates, and room type...

    // Room cost based on selected room type
    switch (roomType) {
        case 'Deluxe Room':
            roomCost = 100;
            break;
        case 'Super Deluxe Room':
            roomCost = 150;
            break;
        case 'Suite Room':
            roomCost = 200;
            break;
    }

    // If valid, submit the form
    if (isValid) {
        alert(`Registration successful! You selected ${roomType} at $${roomCost} per night.`);
    }
});

// Show the Home section by default when the page loads
showSection('home');

// Review Form Submission
document.getElementById('reviewForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get review text and rating
    const reviewText = document.getElementById('reviewText').value.trim();
    const reviewRating = document.getElementById('reviewRating').value;

    // Add the review to the list
    const reviewsList = document.getElementById('reviewsList');
    const reviewItem = document.createElement('li');
    reviewItem.textContent = `${reviewText} - ⭐`.repeat(reviewRating);
    reviewsList.appendChild(reviewItem);

    // Clear the form
    document.getElementById('reviewText').value = '';
    document.getElementById('reviewRating').value = '1';
});
