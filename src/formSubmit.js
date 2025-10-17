document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('contact_us_h_name');
    const submitBtn = document.getElementById('contact_us_h_submitBtn');
    const animatedCheck = document.getElementById('contact_us_h_animatedCheck');

    // Focus on input when page loads


    // Handle form submission
    submitBtn.addEventListener('click', function () {
        if (nameInput.value.trim() === '') {
            // Shake animation for empty input
            nameInput.style.borderColor = '#ff4757';
            nameInput.animate([
                { transform: 'translateX(0)' },
                { transform: 'translateX(-5px)' },
                { transform: 'translateX(5px)' },
                { transform: 'translateX(-5px)' },
                { transform: 'translateX(5px)' },
                { transform: 'translateX(0)' }
            ], {
                duration: 500
            });

            // Reset border color after animation
            setTimeout(() => {
                nameInput.style.borderColor = '#e0e0e0';
            }, 500);
        } else {
            // Show success animation
            animatedCheck.classList.add('contact_us_h_show');

            // Change button text
            submitBtn.textContent = 'Thank You!';
            submitBtn.style.background = 'linear-gradient(135deg, #4cd964 0%, #2ab573 100%)';

            // Reset after 3 seconds
            setTimeout(() => {
                animatedCheck.classList.remove('contact_us_h_show');
                submitBtn.textContent = 'Continue';
                submitBtn.style.background = 'linear-gradient(135deg, #2a3e62 0%, #7a96c6 100%)';
                nameInput.value = '';
                nameInput.focus();
            }, 3000);
        }
    });


});