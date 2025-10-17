const typingTexts = [
    "Sales",
    "App",
    "Website",
    "Business"

];

let currentTextIndex = 0;
const typewriterElement = document.getElementById('typewriter');
let isDeleting = false;
let text = '';
let delta = 100; // typing speed
let timeout = null;

function typeWriter() {
    const i = currentTextIndex % typingTexts.length;
    const fullText = typingTexts[i];

    if (isDeleting) {
        // Remove characters one by one
        text = fullText.substring(0, text.length - 1);
    } else {
        // Add characters one by one
        text = fullText.substring(0, text.length + 1);
    }

    typewriterElement.textContent = text;

    // Determine typing speed
    let typeSpeed = isDeleting ? delta / 2 : delta;

    // If word is complete
    if (!isDeleting && text === fullText) {
        typeSpeed = 2000; // pause at end of typing
        isDeleting = true;
    } else if (isDeleting && text === '') {
        isDeleting = false;
        currentTextIndex++;
        typeSpeed = 500; // pause before starting next phrase
    }

    timeout = setTimeout(typeWriter, typeSpeed);
}

// Start the typewriter effect
document.addEventListener('DOMContentLoaded', function () {
    // Set initial text
    text = typingTexts[0];
    typewriterElement.textContent = text;

    // Start animation after a delay
    setTimeout(() => {
        isDeleting = true;
        typeWriter();
    }, 3000);
});

function animateCounter(counter) {
    const target = +counter.getAttribute('data-target');
    const speed = 200; // adjust for smoother/slower

    const update = () => {
        const current = +counter.innerText;
        const increment = Math.ceil(target / speed);

        if (current < target) {
            counter.innerText = current + increment;
            requestAnimationFrame(update);
        } else {
            counter.innerText = target;
        }
    };

    update();
}

// Observer to trigger animation when section is in view
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.counter');
            counters.innerText = "0";
            counters.forEach(counter => animateCounter(counter));

        }
    });
}, {
    threshold: 0.5
});

// Observe the section
const section = document.querySelector('.project_complete_section_h');
if (section) observer.observe(section);












// review section starts here 
document.addEventListener('DOMContentLoaded', function () {
    const reviews = document.querySelectorAll('.review');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;

    // Function to show a specific review
    function showReview(index) {
        // Hide all reviews
        reviews.forEach(review => review.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        // Show the selected review
        reviews[index].classList.add('active');
        indicators[index].classList.add('active');

        currentIndex = index;
    }

    // Set up auto-sliding
    function autoSlide() {
        let nextIndex = (currentIndex + 1) % reviews.length;
        showReview(nextIndex);
    }

    // Set interval for auto-sliding (every 5 seconds)
    let slideInterval = setInterval(autoSlide, 5000);

    // Add click events to indicators
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function () {
            let index = parseInt(this.getAttribute('data-index'));
            showReview(index);

            // Reset the auto-slide timer when user clicks manually
            clearInterval(slideInterval);
            slideInterval = setInterval(autoSlide, 5000);
        });
    });




});
// contact us section 




