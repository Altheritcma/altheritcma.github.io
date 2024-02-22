// Dropdown event
const dropdown_button = document.querySelector("#top-contact");
const dropdown = document.querySelector(".sub-menu-container");

dropdown_button.addEventListener("click", dropdownEffect);

function dropdownEffect() {
    dropdown.classList.toggle("open");
}


const main = document.querySelector(".container");
const nav_sidebar = document.querySelector("#nav-sidebar");
const home_img2 = document.querySelector("#home-img2");

// mouse over and leave event untuk sidebar
nav_sidebar.addEventListener("mouseover",sidebarEffect);
nav_sidebar.addEventListener("mouseleave",sidebarNoEffect);


function sidebarEffect() {           
    main.classList.add("activated");

    nav_sidebar.classList.add("activated");

    home_img2.classList.add("activated");

    dropdown.classList.remove("open");
}

function sidebarNoEffect() {           
    main.classList.remove("activated");

    nav_sidebar.classList.remove("activated");

    home_img2.classList.remove("activated");
}


