document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                entry.target.style.visibility = 'visible';
                if (entry.target.classList.contains('skill-item')) {
                    const percentage = entry.target.dataset.percentage;
                    const progress = entry.target.querySelector('.progress');
                    progress.style.setProperty('--progress-width', `${percentage}%`);
                    progress.style.animation = 'progress 1s ease-out forwards';
                }
            }
        });
    }, {
        threshold: 0.5, // Trigger when half visible
        rootMargin: '-10% 0px' // Trigger near center
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

document.querySelectorAll('.card-item').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const rotateX = (y - rect.height / 2) / 10;
        const rotateY = (x - rect.width / 2) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
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
