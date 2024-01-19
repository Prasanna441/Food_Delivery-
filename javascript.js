function orderNow(dishName) {
    // Placeholder function for ordering a specific dish
    alert('Order now: ' + dishName);
}
// Smooth scrolling function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Add event listeners for automatic scrolling
document.addEventListener('DOMContentLoaded', function() {
    const menuLink = document.getElementById('menu-link');
    const contactLink = document.getElementById('contact-link');

    menuLink.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToSection('featured-dishes');
    });

    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToSection('contact-section');
    });
});




