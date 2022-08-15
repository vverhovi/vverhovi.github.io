
// Faded header
var className = "nav-up";
var scrollTrigger = 250;

window.onscroll = () => {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
};



//taking user back to top
const toTop = () => window.scrollTo({top: 0, behavior:'smooth'});


//toggle for humburger menu 

let menu = document.getElementsByClassName("nav-mobile");
let openMenu = document.getElementsByClassName("burg-menu");
let closeMenu = document.getElementsByClassName("close-menu");

function toggleMenu() {

    if(menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeMenu.style.display = "none";
        openMenu.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        openMenu.style.display = "none";
        closeMenu.style.display = "block";
    }
    
}

//shuffle



