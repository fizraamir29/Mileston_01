// script.ts
document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggleSkills");
    var skillsSection = document.getElementById("skills");
    toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener("click", function () {
        if (skillsSection) {
            if (skillsSection.style.display === "none") {
                skillsSection.style.display = "block";
                toggleButton.textContent = "Hide Skills Section";
            }
            else {
                skillsSection.style.display = "none";
                toggleButton.textContent = "Show Skills Section";
            }
        }
    });
    // Add a fade-in effect to each section on scroll
    var sections = document.querySelectorAll("section");
    window.addEventListener("scroll", function () {
        sections.forEach(function (section) {
            var rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight - 100) {
                section.classList.add("fade-in");
            }
        });
    });
});
