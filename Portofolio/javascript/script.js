// Dropdown event
const dropdown_button = document.querySelector(".topbar h4");
const dropdown = document.querySelector(".sub-menu-container");

dropdown_button.addEventListener("click", dropdownEffect);

function dropdownEffect() {
  dropdown.classList.toggle("open");
}

// mouse over and leave event untuk sidebar
const main = document.querySelector(".container");
const nav_sidebar = document.querySelector(".sidebar");

nav_sidebar.addEventListener("mouseover", sidebarEffect);
nav_sidebar.addEventListener("mouseleave", sidebarNoEffect);

function sidebarEffect() {
  main.classList.add("activated");

  nav_sidebar.classList.add("activated");

  dropdown.classList.remove("open");
}

function sidebarNoEffect() {
  main.classList.remove("activated");

  nav_sidebar.classList.remove("activated");
}

// card slider view effect
let items = document.querySelectorAll(".item");
let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");



let active = 0;
function loadItems() {
  items[active].style.transform = `none`;
  items[active].style.zIndex = 1;
  items[active].style.width = "400px";

  let stt = 0;

  for (var i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${220 * stt}px)
    scale(${1 - 0.2 * stt}) perspective(20px) rotateY(-1deg)`;

    items[i].style.width = "400px";
    items[i].style.zIndex = -stt;
  }
  stt = 0;
  for (var i = active - 1; i >= 0; i--) {
    stt++;
    items[i].style.transform = `translateX(${-220 * stt}px)
    scale(${1 - 0.2 * stt}) perspective(20px) rotateY(1deg)`;

    items[i].style.width = "400px";
    items[i].style.zIndex = -stt;
  }



  items[active].addEventListener("mouseover", function () {
    items[active].style.cursor = "pointer";
  });

  items[active].addEventListener("mouseout", function () {
    items[active].style.cursor = "default";
  });







  items[active].addEventListener("click", function () {
    items[active].style.width = "calc(400px + 20%)";
    stt = 0;
    for (var i = active + 1; i < items.length; i++) {
      stt++;
      items[i].style.transform = `none`;

      items[i].style.width = "400px";
      items[i].style.zIndex = -stt;
    }
    stt = 0;
    for (var i = active - 1; i >= 0; i--) {
      stt++;
      items[i].style.transform = `translateX(${-220 * stt}px)
      scale(${1 - 0.2 * stt}) perspective(20px) rotateY(1deg)`;

      items[i].style.width = "400px";
      items[i].style.zIndex = -stt;
    }
  });

  document.addEventListener("click", function (event) {
    if (event.target !== items[active] && !items[active].contains(event.target)) 
    {
      items[active].style.width = "400px";
      stt = 0;
      for (var i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${220 * stt}px)
      scale(${1 - 0.2 * stt}) perspective(20px) rotateY(-1deg)`;

        items[i].style.width = "400px";
        items[i].style.zIndex = -stt;
      }
      stt = 0;
      for (var i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-220 * stt}px)
      scale(${1 - 0.2 * stt}) perspective(20px) rotateY(1deg)`;
        items[i].style.width = "400px";
        items[i].style.zIndex = -stt;
      }
    }
  });
}



function checkLeftMarginItems() {

  if (active > 0) {    
    items[active].style.left = `calc(50% - 230px)`;
    for (var i = active + 1; i < items.length; i++) {
      items[i].style.left = `calc(50% - 230px)`;
    }
    for (var i = active - 1; i >= 0; i--) {
      items[i].style.left = `calc(50% - 230px)`;
    }
  } else{
    items[active].style.left = 0;
    for (var i = active + 1; i < items.length; i++) {
      items[i].style.left = 0;
    }
    for (var i = active - 1; i >= 0; i--) {
      items[i].style.left = 0;
    }
  }
  loadItems();
}

checkLeftMarginItems();

nextBtn.onclick = function () {
  if (active + 1 < items.length) {
    active += 1;
  } else {
    return;
  }
  checkLeftMarginItems();
};

prevBtn.onclick = function () {
  if (active - 1 >= 0) {
    active -= 1;
  } else {
    return;
  }
  checkLeftMarginItems();
};
