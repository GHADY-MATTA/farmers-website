let currentIndex = 0;
const testimonials = document.getElementsByClassName('testimonials-item');
const totalTestimonials = testimonials.length;
const testimonialContainer = document.querySelector('.testimonials-content');

// Function to show the current testimonial
function showTestimonial() {
    // Move the testimonial container to the correct position
    testimonialContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Function to move to the next testimonial
function nextTestimonial() {
    currentIndex = (currentIndex + 1) % totalTestimonials;
    showTestimonial();
}

// Function to move to the previous testimonial
function prevTestimonial() {
    currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial();
}

// Automatic slideshow, change every 2 seconds
setInterval(nextTestimonial, 8000);

// Add event listeners for the navigation buttons
document.querySelector('.next-btn').addEventListener('click', nextTestimonial);
document.querySelector('.prev-btn').addEventListener('click', prevTestimonial);

// Initialize the first testimonial
showTestimonial();
