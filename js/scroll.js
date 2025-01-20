// Scroll Progress with requestAnimationFrame
const scrollProgress = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
    requestAnimationFrame(() => {
        const winScroll = window.pageYOffset || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = `${scrolled}%`;
    });
});

// Loading Screen with promise
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loading-screen');
    if (loader) {
        Promise.all([
            // Add any resource loading promises here
            new Promise(resolve => setTimeout(resolve, 800))
        ]).then(() => {
            loader.classList.add('hide');
            setTimeout(() => loader.remove(), 500);
        }).catch(error => {
            console.error('Loading error:', error);
            loader.remove();
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