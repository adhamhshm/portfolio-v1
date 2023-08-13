export function toggleMenu() {

    //target an element on webpage
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    //when clicked, it will add or remove "open" class in the element
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

export function toggleTheme() {
    const theme = document.body;
    theme.classList.toggle("dark-mode");
}

export { toggleMenu, toggleTheme };