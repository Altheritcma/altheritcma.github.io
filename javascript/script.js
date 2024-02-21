const icon_menu_button = document.querySelector("#icon-menu");
const main = document.querySelector("main");
const nav_sidebar = document.querySelector("#nav-sidebar");
const home_img2 = document.querySelector("#home-img2");


icon_menu_button.addEventListener("click", function(){
    sidebarEffect();
});

function sidebarEffect() {           
    icon_menu_button.classList.toggle("activated");

    main.classList.toggle("activated");

    nav_sidebar.classList.toggle("activated");

    home_img2.classList.toggle("activated");
}





let posisiTerakhirScroll = 0;
const header_navbar = document.querySelector(".topbar");
const nav_sidebar2 = document.querySelector("#nav-sidebar");

document.addEventListener("scroll", function() {
    let scrollAtas = document.documentElement.scrollTop;

    if (scrollAtas >= posisiTerakhirScroll)
    {
        header_navbar.classList.add("activated");
        nav_sidebar2.classList.add("activated2");
        posisiTerakhirScroll = scrollAtas;
    }
    else
    {
        header_navbar.classList.remove("activated");
        nav_sidebar2.classList.remove("activated2");
        posisiTerakhirScroll = scrollAtas;
    }

    posisiTerakhirScroll = scrollAtas <= 0 ? 0 : scrollAtas;
});



