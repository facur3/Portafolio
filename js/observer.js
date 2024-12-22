const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
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
    },
    {
        threshold: 0.1,
        rootMargin: "0px",
    }
);

document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));
