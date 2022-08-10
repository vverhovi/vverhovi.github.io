
//Fixed header when scroll
const body= document.body;
const nav = document.querySelector(".navbar .nav-container");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScrol <= 0) {
        body.classList.remove(scrollUp);
        return;
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        //down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
    } else if  (
        currentScroll < lastScroll &&
        body.classList.contains(scrollDown)
    ) {
        //up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
    } 
    lastScroll = currentScroll;
});