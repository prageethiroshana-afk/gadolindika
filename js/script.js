const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');

// Toggle Mobile Menu
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    // Change icon? Maybe later.
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('shadow-md', 'bg-white/95');
        navbar.classList.remove('shadow-sm', 'bg-white/90');
    } else {
        navbar.classList.remove('shadow-md', 'bg-white/95');
        navbar.classList.add('shadow-sm', 'bg-white/90');
    }
});
