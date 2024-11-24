// script.js
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach((link, index) => {
        link.style.transitionDelay = `${index * 0.2}s`;
    });

    const title = document.querySelector('.title');
    const originalText = title.textContent;
    setTimeout(() => {
        typeWriter(title, originalText);
    }, 1000);
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

const swiper = new Swiper('.mySwiper', {
    centeredSlides: true,
    slidesPerView: 3,
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
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 100,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 150,
        }
    }
});