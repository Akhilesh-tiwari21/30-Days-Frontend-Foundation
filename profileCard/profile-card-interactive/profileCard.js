// Select profile button
const btn = document.querySelector("#btn");

// Select content container and text elements
const elements = document.querySelectorAll(".content, .profile-name, .profile-role, .profile-desc");

// Select only text elements for animation
const textElement = document.querySelectorAll(".profile-name, .profile-role, .profile-desc");

// Track button toggle state
let isClicked = false;

// Function to change button text
function contentChange () {
    isClicked = !isClicked;
    btn.textContent = isClicked ? "Hide Profile" : "View Profile";
}

// Button click event
btn.addEventListener("click", () => {
    // Toggle background and visibility styles
    elements.forEach(el => el.classList.toggle("active"));

    // Animate text content
    textElement.forEach(el => el.classList.toggle("transition"));

    // Update button text
    contentChange();
});
