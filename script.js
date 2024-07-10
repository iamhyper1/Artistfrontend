document.getElementById('findArtistBtn').addEventListener('click', function() {
    smoothScroll('#forArtist');
});

document.getElementById('signupBtn').addEventListener('click', function() {
    alert('Sign up process initiated!');
});

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const navbar = document.querySelector('nav');

    if (scrollPosition > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function smoothScroll(target) {
    const element = document.querySelector(target);
    window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.transform = 'scale(1.1)';
        });

        box.addEventListener('mouseout', () => {
            box.style.transform = 'scale(1)';
        });
    });
});
        // script.js
// document.addEventListener('DOMContentLoaded', function() {
//     // // Enable search button when input is filled
    // document.getElementById('artist-name').addEventListener('input', function() {
    //     var input = this.value.trim();
    //     var button = document.getElementById('search-artist-btn');
    //     button.disabled = input === '';
    // });

    // Add click event for search button (add functionality as needed)
    // document.getElementById('search-artist-btn').addEventListener('click', function() {
    //     var category = document.getElementById('category').value;
    //     var artistName = document.getElementById('artist-name').value;
    //     // Implement your search logic here, e.g., fetch data based on category and artistName
    //     console.log('Searching artist:', artistName, 'in category:', category);
    // });

//     // Optional: Animation for sections
//     var sections = document.querySelectorAll('.section-heading, .featured-artists, .discover-more');
//     sections.forEach(function(section) {
//         section.style.animation = 'fadeInUp 1s ease forwards';
//     });
// });

function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    const eyeIcon = document.getElementById("eye-icon");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const loginContent = document.querySelector(".login-content");

    // Activate login content after a delay for animation
    setTimeout(function() {
        loginContent.classList.add("active");
    }, 200);
});
document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    var modal = document.getElementById("register-modal");
    var registerLink = document.getElementById("registerLink");
    var span = document.getElementsByClassName("close")[0];

    // Open the modal when the register link is clicked
    registerLink.onclick = function () {
        modal.style.display = "block";
    }

    // Close the modal when the close button is clicked
    span.onclick = function () {
        modal.style.display = "none";
    }

    // Close the modal when clicking outside of it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Toggle password visibility
    window.togglePasswordVisibility = function() {
        const passwordField = document.getElementById("password");
        const eyeIcon = document.getElementById("eye-icon");

        if (passwordField.type === "password") {
            passwordField.type = "text";
            eyeIcon.classList.remove("fa-eye");
            eyeIcon.classList.add("fa-eye-slash");
        } else {
            passwordField.type = "password";
            eyeIcon.classList.remove("fa-eye-slash");
            eyeIcon.classList.add("fa-eye");
        }
    };
});

