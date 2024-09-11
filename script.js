document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const type = document.getElementById('type').value;

    // Validation (basic check for required fields)
    if (name && email && date && time && type) {
        document.getElementById('confirmationMessage').innerText =
            `Thank you, ${name}! Your ${type} booking for ${date} at ${time} has been confirmed.`;
    } else {
        document.getElementById('confirmationMessage').innerText = 'Please fill out all fields.';
    }
});
