document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('nav-toggle').addEventListener('click', function() {
        var navMenu = document.getElementById('nav-menu');
        navMenu.classList.toggle('nav-menu-visible');
    });
});
