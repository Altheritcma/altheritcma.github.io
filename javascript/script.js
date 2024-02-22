const icon_menu_button = document.querySelector("#icon-menu");
const main = document.querySelector("main");
const side_navbar = document.querySelector(".side-navbar");
const image_page1 = document.querySelector(".image-page1");
const image_tentara = document.querySelector("#image-tentara");

icon_menu_button.addEventListener("click", function(){
    sidebarEffect();
});

function sidebarEffect() {           
    icon_menu_button.classList.toggle("activated");   

    side_navbar.classList.toggle("activated");

    main.classList.toggle("activated");

    image_page1.classList.toggle("activated");

    image_tentara.classList.toggle("activated");
}





let posisiTerakhirScroll = 0;
const header_navbar = document.querySelector(".header-navbar");

document.addEventListener("scroll", function() {
    let scrollAtas = document.documentElement.scrollTop;

    if (scrollAtas >= posisiTerakhirScroll)
    {
        header_navbar.classList.add("activated");
        posisiTerakhirScroll = scrollAtas;
    }
    else
    {
        header_navbar.classList.remove("activated");
        posisiTerakhirScroll = scrollAtas;
    }

    posisiTerakhirScroll = scrollAtas <= 0 ? 0 : scrollAtas;
});



