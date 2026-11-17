
// Welcome message in browser console
console.log("Welcome to Sarita's Portfolio!");

// Select all navigation links
const navLinks = document.querySelectorAll(".nav-links a");

// Add smooth navigation feedback
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        console.log("Navigating to: " + this.textContent);
    });
});

// Animate hero content when page loads
window.addEventListener("load", function () {
    const hero = document.querySelector(".hero-content");

    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";
});

// Button click interaction
const projectButton = document.querySelector(".primary-btn");

projectButton.addEventListener("click", function () {
    console.log("Exploring Sarita's projects!");
});
// Reveal sections while scrolling
const revealSections = document.querySelectorAll(
    ".about, .skills, .projects, .education, .contact"
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

revealSections.forEach(section => {
    section.classList.add("reveal");
    revealObserver.observe(section);
});
// Animated typing effect
const typingText = document.getElementById("typing");

const titles = [
    "AI/ML Engineer",
    "Python Developer",
    "Salesforce Enthusiast",
    "Generative AI Learner"
];

let titleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {
    const currentTitle = titles[titleIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingText.textContent = currentTitle.substring(0, characterIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && characterIndex === currentTitle.length) {
        deleting = true;
        speed = 1500;
    } else if (deleting && characterIndex === 0) {
        deleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();