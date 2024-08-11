// Get elements
const rabbit = document.getElementById('rabbit');
const modal = document.getElementById('modal');
const close = document.getElementById('close');
const modalText = document.getElementById('modal-text');
const carrotsContainer = document.getElementById('carrots');

// Define the messages
const messages = [
    "🥕helloo!🥕",
    "i really love carrots🥕.",
    "hop hop🥕.",
    "i like your hair🥕",
    "did you know? you mean the whole world to master🥕",
    "master said you have the prettiest eyes of all other woman in this world!!🥕",
    "master feels very lonely he just cant wait to meet u again🥕",
    "you got any carrots?🥕",
    "he told me to tell you that he 🥕LOVESSS YOU AND MISS YOU🥕",
];

// Function to create and position random carrots
function createCarrots(numCarrots) {
    for (let i = 0; i < numCarrots; i++) {
        const carrot = document.createElement('div');
        carrot.className = 'carrot';
        carrot.style.top = `${Math.random() * 100}vh`; // Random vertical position
        carrot.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        carrotsContainer.appendChild(carrot);
    }
}

// Show the modal with a message
rabbit.onclick = function() {
    // Choose a random message or set a specific one
    const message = messages[Math.floor(Math.random() * messages.length)];
    modalText.textContent = message;
    modal.style.display = 'block';

    // Create carrots in the background
    createCarrots(20); // Adjust number of carrots as needed
}

// Hide the modal when clicking on <span> (x)
close.onclick = function() {
    modal.style.display = 'none';
    carrotsContainer.innerHTML = ''; // Remove carrots when modal closes
}

// Hide the modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        carrotsContainer.innerHTML = ''; // Remove carrots when modal closes
    }
}
