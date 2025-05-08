// Select elements
const counterValue = document.getElementById('counterValue');
const increaseBtn = document.getElementById('increaseBtn');
const resetBtn = document.getElementById('resetBtn');
const decreaseBtn = document.getElementById('decreaseBtn');

// Initialize counter
let counter = 0;

// Update the counter display
function updateCounter() {
    counterValue.textContent = counter;
}

// Increase button functionality
increaseBtn.addEventListener('click', () => {
    counter++;
    updateCounter();
});

// Reset button functionality
resetBtn.addEventListener('click', () => {
    counter = 0;
    updateCounter();
});

// Decrease button functionality
decreaseBtn.addEventListener('click', () => {
    if (counter != 0) counter--;
    updateCounter();
});