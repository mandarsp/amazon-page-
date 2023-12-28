// JavaScript (script.js)
// Get references to the previous and next buttons
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

// Get references to your shop sections
const shopSections = document.querySelectorAll('.shop-section');

// Initialize the current section index
let currentSectionIndex = 0;

// Function to show the current section and hide others
function showCurrentSection() {
    shopSections.forEach((section, index) => {
        if (index === currentSectionIndex) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// Initially, show the first section
showCurrentSection();

// Event listener for the "Next" button
nextButton.addEventListener('click', () => {
    if (currentSectionIndex < shopSections.length - 1) {
        currentSectionIndex++;
        showCurrentSection();
    }
});

// Event listener for the "Prev" button
prevButton.addEventListener('click', () => {
    if (currentSectionIndex > 0) {
        currentSectionIndex--;
        showCurrentSection();
    }
});
