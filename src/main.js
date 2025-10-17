//  Navbar js

document.addEventListener('DOMContentLoaded', function () {
    const servicesLink = document.getElementById('servicesLink');
    const servicesDropdown = document.getElementById('servicesDropdown');
    const showDropdownBtn = document.getElementById('showDropdown');
    const hideDropdownBtn = document.getElementById('hideDropdown');
    const toggleDropdownBtn = document.getElementById('toggleDropdown');

    let dropdownTimeout;

    // Show dropdown function
    function showDropdown() {
        clearTimeout(dropdownTimeout);
        servicesDropdown.classList.add('active');
    }

    // Hide dropdown function with delay
    function hideDropdown() {
        dropdownTimeout = setTimeout(() => {
            servicesDropdown.classList.remove('active');
        }, 300); // 300ms delay before hiding
    }

    // Cancel hiding if needed
    function cancelHideDropdown() {
        clearTimeout(dropdownTimeout);
    }

    // Event listeners for services link
    servicesLink.addEventListener('mouseenter', showDropdown);
    servicesLink.addEventListener('mouseleave', hideDropdown);

    // Event listeners for dropdown itself
    servicesDropdown.addEventListener('mouseenter', cancelHideDropdown);
    servicesDropdown.addEventListener('mouseleave', hideDropdown);



    // Close dropdown when clicking outside
    document.addEventListener('click', function (event) {
        if (!servicesLink.contains(event.target) && !servicesDropdown.contains(event.target)) {
            hideDropdown();
        }
    });
});


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Change icon based on menu state
    const icon = hamburger.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.querySelector('i').classList.remove('fa-times');
        hamburger.querySelector('i').classList.add('fa-bars');
    });
});



// Scroll to top button

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button


function scrollFunction() {

    // let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop

    if (scrollTop > 30) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTo({
        top: 0,
        behavior: "smooth"
    }); // For Safari
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    }); // For Chrome, Firefox, IE and Opera
}
window.addEventListener('scroll', scrollFunction);
document.body.addEventListener('scroll', scrollFunction)