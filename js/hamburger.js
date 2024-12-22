// Initialize DOM elements with error handling
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const body = document.querySelector('body');

// Debug mode
const DEBUG = true;

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    if (!hamburger || !navLinks || !body) {
        console.error('Required DOM elements not found');
        return;
    }

    const closeMenu = () => {
        if (DEBUG) console.log('Closing menu');
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        body.style.overflow = 'auto';
    };

    const toggleMenu = (e) => {
        e.preventDefault();
        if (DEBUG) console.log('Toggling menu');
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
        
        if (DEBUG) {
            console.log('Menu state:', {
                hamburgerActive: hamburger.classList.contains('active'),
                navLinksActive: navLinks.classList.contains('active'),
                bodyOverflow: body.style.overflow
            });
        }
    };

    const handleOutsideClick = (e) => {
        // Close menu when clicking anywhere in navLinks container
        if (navLinks.classList.contains('active')) {
            if (navLinks.contains(e.target) || !hamburger.contains(e.target)) {
                closeMenu();
                if (DEBUG) console.log('Closing menu from outside click');
            }
        }
    };

    try {
        hamburger.addEventListener('click', toggleMenu);
        // Listen for clicks on the entire document
        document.addEventListener('click', handleOutsideClick);
        document.addEventListener('touchstart', handleOutsideClick, { passive: true });
        
        if (DEBUG) console.log('Event listeners added successfully');
    } catch (error) {
        console.error('Error adding event listeners:', error);
    }

    const cleanup = () => {
        try {
            hamburger.removeEventListener('click', toggleMenu);
            document.removeEventListener('click', handleOutsideClick);
            document.removeEventListener('touchstart', handleOutsideClick);
        } catch (error) {
            console.error('Error during cleanup:', error);
        }
    };

    window.addEventListener('unload', cleanup);
});