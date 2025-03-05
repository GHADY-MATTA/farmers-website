document.addEventListener("DOMContentLoaded", () => {
    // Select all the section elements and the navigation links
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".header__nav--link");

    // Intersection Observer callback function
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            const id = entry.target.id; // Get the ID of the section
            const navLink = document.querySelector(`a[href="#${id}"]`); // Select the corresponding nav link
            console.log(id, entry.isIntersecting); 

            if (entry.isIntersecting) {
                // When the section is in view, highlight the corresponding nav link
                navLink.classList.add("active"); // Add active class to highlight
            } else {
                // When the section is not in view, remove the active highlight
                navLink.classList.remove("active");
            }
        });
    };

    // Intersection Observer options
    const observerOptions = {
        root: null, // Observe the viewport
        rootMargin: "0px", // No margin
        threshold: 0.5 // Trigger when 50% of the section is visible
    };

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});
