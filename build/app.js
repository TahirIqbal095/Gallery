const tl = gsap.timeline({ defaults: { ease: "power1.out" }})

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25})
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5})
tl.to(".intro", { y: "-100%", duration: 1}, "<")
tl.fromTo("nav", { opacity:0}, {opacity:1, duration: 1})
tl.fromTo(".welcome-msg", { opacity:0}, {opacity:1, duration: 1}, "<")

// navbar

const hambrgerBtn = document.querySelector(".hamburger")
const hamburgerItems = document.querySelector(".hamburger-items")
const hamburgerIcon = document.querySelector(".hamburger-icon")
const hamburgerCloseIcon = document.querySelector(".hamburger-close-icon")

hambrgerBtn.addEventListener("click", () =>{
    hamburgerItems.classList.toggle("open")
    hamburgerIcon.classList.toggle("hidden")
    hamburgerCloseIcon.classList.toggle("hidden")
})