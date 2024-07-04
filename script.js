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
    var passwordField = document.getElementById("password");
    var eyeIcon = document.getElementById("eye-icon");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove("far", "fa-eye");
        eyeIcon.classList.add("fas", "fa-eye-slash");
    } else {
        passwordField.type = "password";
        eyeIcon.classList.remove("fas", "fa-eye-slash");
        eyeIcon.classList.add("far", "fa-eye");
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const loginContent = document.querySelector(".login-content");

    // Activate login content after a delay for animation
    setTimeout(function() {
        loginContent.classList.add("active");
    }, 200);

    // Toggle password visibility
    const togglePassword = document.querySelector(".toggle-password");
    const passwordField = document.querySelector("#password");

    togglePassword.addEventListener("click", function() {
        const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
        passwordField.setAttribute("type", type);
        this.querySelector("i").classList.toggle("fa-eye-slash");
    });
});
