document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                entry.target.style.visibility = 'visible';
                if (entry.target.classList.contains('skill-item')) {
                    const percentage = entry.target.dataset.percentage;
                    const progress = entry.target.querySelector('.progress');
                    progress.style.width = `${percentage}%`;
                }
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '-10% 0px'
    });

    // Observe elements
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));
    
    // Initialize progress bars
    document.querySelectorAll('.skill-item').forEach(item => {
        const percentage = item.dataset.percentage;
        const progressBar = item.querySelector('.progress');
        progressBar.style.setProperty('--progress-width', `${percentage}%`);
    });
});

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Swiper initialization
const swiper = new Swiper('.mySwiper', {
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 1,
    speed: 800,
    grabCursor: true,
    spaceBetween: 150,
    slideToClickedSlide: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        scale: 0.85,
        slideShadows: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 80
        }
    }
});

// CSS classes for hidden and show states
const style = document.createElement('style');
style.innerHTML = `
.hidden {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
}
.show {
    opacity: 1;
    transform: translateY(0);
}
`;
document.head.appendChild(style);