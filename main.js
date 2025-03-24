// Select all navigation links
const navLinks = document.querySelectorAll('.navigation a');

// Function to handle the click event
function handleNavClick(event) {
    event.preventDefault(); // Prevent the default anchor behavior

    // Remove the active state from all links
    navLinks.forEach(link => {
        link.style.fontSize = ''; // Reset font size
        link.style.color = ''; // Reset color
    });

    // Apply the active state to the clicked link
    const clickedLink = event.target;
    clickedLink.style.fontSize = '1.4rem'; // Increase font size
    clickedLink.style.color = '#FF6347'; // Change color to hover color

    // Smoothly scroll to the target section
    const targetId = clickedLink.getAttribute('href').substring(1); // Get the target section ID
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling
        block: 'start', // Align to the top of the section
    });
}

// Add click event listeners to all navigation links
navLinks.forEach(link => {
    link.addEventListener('click', handleNavClick);
});


// Select the About link and the navigation bar
const aboutLink = document.querySelector('a[href="#about"]');

// Function to add the "My Skills |" button
function addMySkillsButton() {
    // Check if the button already exists to avoid duplicates
    if (!document.querySelector('a[href="#skills"]')) {
        // Create a new link element
        const mySkillsButton = document.createElement('a');
        mySkillsButton.href = "#skills"; // Set the href attribute
        mySkillsButton.textContent = "My Skills |"; // Set the button text
        mySkillsButton.style.marginLeft = "10px"; // Add some spacing

        // Insert the button after the About link
        aboutLink.insertAdjacentElement('afterend', mySkillsButton);
    }
}

// Add a click event listener to the About link
aboutLink.addEventListener('click', addMySkillsButton);
