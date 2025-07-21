
/*window. would be needed to make the button work without a full page load BUT the defer in the head section of the HTML makes this nor required.*/
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector("#menu"); /*# target id's*/
    const navMenu = document.querySelector("#nav-menu");

    menuButton.addEventListener("click", () => { /*=> is used in place of function ()*/
        navMenu.classList.toggle("open");

        /*Toggle*/ 
        if (navMenu.classList.contains("open")) {
            menuButton.textContent = "✖";
        } else {
            menuButton.textContent = "☰";
        }
    });
});