const form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Show success message
    successMsg.style.display = 'block';

    // Reset form fields
    form.reset();

    // Hide message after 3 seconds
    setTimeout(() => {
        successMsg.style.display = 'none';
    }, 30000);
});
