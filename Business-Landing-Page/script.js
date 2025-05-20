// Navigation scroll functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all nav links
    const navAbout = document.getElementById('nav-about');
    const navProducts = document.getElementById('nav-products');
    const navServices = document.getElementById('nav-services');
    const navContact = document.getElementById('nav-contact-us');
    const navHome = document.getElementById('nav-home');
    
    // Add click event listeners
    navAbout.addEventListener('click', function() {
        document.querySelector('.about-container').scrollIntoView({ behavior: 'smooth' });
    });
    
    navProducts.addEventListener('click', function() {
        document.querySelector('.products-container').scrollIntoView({ behavior: 'smooth' });
    });
    
    navServices.addEventListener('click', function() {
        document.querySelector('.services-container').scrollIntoView({ behavior: 'smooth' });
    });
    
    navContact.addEventListener('click', function() {
        document.querySelector('.contact-container').scrollIntoView({ behavior: 'smooth' });
    });
    
    navHome.addEventListener('click', function(e){
        e.preventDefault(); // Prevent default anchor behavior
        document.querySelector('.hero-container').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Footer links functionality
    const footerLinks = document.querySelectorAll('.footer-link');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const linkText = this.textContent.toLowerCase();
            
            switch(linkText) {
                case 'about':
                    document.querySelector('.about-container').scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'products':
                    document.querySelector('.products-container').scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'services':
                    document.querySelector('.services-container').scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'contact':
                    document.querySelector('.contact-container').scrollIntoView({ behavior: 'smooth' });
                    break;
                default:
                    break;
            }
        });
    });
});