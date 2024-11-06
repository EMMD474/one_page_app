// Function to copy phone number and show notification
const copy = () => {
    // Copy the number to the clipboard
    const phoneNumber = '+260 779 578 825';
    navigator.clipboard.writeText(phoneNumber).then(() => {
        // Show the notification message
        const notification = document.querySelector('.notify');
        notification.classList.add('show');
        console.log('copy') // Adds a 'show' class to display the notification

        // Hide the notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

const displayPopup = () => {
    const popup = document.querySelector('.popup-overlay');
    popup.style.display = 'flex';  // Set display to 'flex'
}

const closePopup = () => {
    const popup = document.querySelector('.popup-overlay');
    popup.style.display = 'none'
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.send-btn');
    btn.addEventListener('click', (event) => {
        event.preventDefault(); // Prevents form from submitting/reloading the page

        const email = document.querySelector('#email');
        const message = document.querySelector('#message');

        // Reset previous error styles
        email.classList.remove('input-error');
        message.classList.remove('input-error');

        let valid = true; // Track form validity

        // Check if email field is empty
        if (email.value.trim() === '') {
            email.classList.add('input-error'); // Add red border if empty
            valid = false;
        }

        // Check if message field is empty
        if (message.value.trim() === '') {
            message.classList.add('input-error'); // Add red border if empty
            valid = false;
        }

        if (valid) {
            console.log('Email:', email.value);
            console.log('Message:', message.value);
            closePopup(); // Close email popup if form is valid
        }
    });
});



