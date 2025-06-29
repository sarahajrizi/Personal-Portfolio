function toggleMenu() {
    const menu = document.querySelector('.menu-links');7
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('active');
    icon.classList.toggle('active');
}