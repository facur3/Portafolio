document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.mySwiper', {
        centeredSlides: true,
        slidesPerView: "auto",
        initialSlide: 1,
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
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 80,
            },
        },
        touchRatio: 1.5,
        touchAngle: 45,
        touchMoveStopPropagation: true,
        watchSlidesProgress: true,
        grabCursor: true,
        observer: true,
        observeParents: true,
        updateOnWindowResize: true,
        resizeObserver: true,
    });
});