// script.ts

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleSkills");
    const skillsSection = document.getElementById("skills");

    toggleButton?.addEventListener("click", () => {
        if (skillsSection) {
            if (skillsSection.style.display === "none") {
                skillsSection.style.display = "block";
                toggleButton.textContent = "Hide Skills Section";
            } else {
                skillsSection.style.display = "none";
                toggleButton.textContent = "Show Skills Section";
            }
        }
    });

    // Add a fade-in effect to each section on scroll
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight - 100) {
                section.classList.add("fade-in");
            }
        });
    });
});
