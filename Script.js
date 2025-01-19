function toggleMenu() {
    const menu = document.querySelector('.menu');
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const headerIcons = document.querySelector('.header-icons');

    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    closeMenu.classList.toggle('active');
    headerIcons.classList.toggle('active'); // Hide icons when menu is open
}
