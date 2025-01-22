// Scroll Progress with requestAnimationFrame
const scrollProgress = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
    const now = Date.now();
    if (now - lastScrollTime >= throttleDelay) {
        const scrollProgress = document.querySelector('.scroll-progress');
        if (scrollProgress) {
            const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            
            requestAnimationFrame(() => {
                scrollProgress.style.width = `${scrolled}%`;
            });
        }
        lastScrollTime = now;
    }
});

// Loading Screen with promise
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loading-screen');

    if (loader) {
        // Simulate a delay (e.g., waiting for resources to load)
        Promise.all([
            new Promise(resolve => setTimeout(resolve, 1500)) // Adjust the delay as needed
        ]).then(() => {
            loader.classList.add('hide'); // Hide the loading screen
            setTimeout(() => loader.remove(), 500); // Remove it from the DOM after the transition
        }).catch(error => {
            console.error('Loading error:', error);
            loader.remove(); // Remove the loader if there's an error
        });
    }
});

//Parallax Effect
const parallaxElements = document.querySelectorAll('.parallax');
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                const rect = element.getBoundingClientRect();
                const visible = rect.top < window.innerHeight && rect.bottom > 0;
                
                if (visible) {
                    const offset = window.scrollY * speed;
                    element.style.transform = `translateY(${offset}px)`;
                }
            });
            ticking = false;
        });
        ticking = true;
    }
});

const scrollProgressBar = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
    const windowScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (windowScroll / height) * 100;
    
    scrollProgressBar.style.width = `${scrolled}%`;
});