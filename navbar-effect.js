// navbar-effect during scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        // add class transparent
        navbar.classList.add('transparent');
    } else {
        // remove class transparent
        navbar.classList.remove('transparent');
    }
});
