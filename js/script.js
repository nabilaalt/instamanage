// header

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  }

// Sticky header on scroll
window.onscroll = function() {
    const header = document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

    // Show features and testimonials on scroll
    const features = document.querySelectorAll('.feature-card');
    const testimonials = document.querySelectorAll('.testimonials');

    features.forEach((feature) => {
        if (isInViewport(feature)) {
            feature.classList.add('show');
        }
    });

    testimonials.forEach((testimonial) => {
        if (isInViewport(testimonial)) {
            testimonial.classList.add('show');
        }
    });
};

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Initial check for visibility
window.onload = function() {
    const features = document.querySelectorAll('.feature-card');
    const testimonials = document.querySelectorAll('.testimonials');

    features.forEach((feature) => {
        if (isInViewport(feature)) {
            feature.classList.add('show');
        }
    });

    testimonials.forEach((testimonial) => {
        if (isInViewport(testimonial)) {
            testimonial.classList.add('show');
        }
    });
};


