document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentSlide = 0;

    function updateNavButtons() {
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === slides.length - 1;
    }

    function showSlide(index) {
        const offset = -index * 100;
        slider.style.transform = `translateX(${offset}%)`;
        currentSlide = index;
        updateNavButtons();
    }

    prevBtn.addEventListener('click', function() {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentSlide < slides.length - 1) {
            showSlide(currentSlide + 1);
        }
    });

    updateNavButtons();

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 769) {
            slider.style.transform = 'none'; // Reset transform on desktop
            currentSlide = 0; // Reset to first slide
            updateNavButtons();
        } else {
            showSlide(currentSlide); // slide shown on mobile
        }
    });
});
