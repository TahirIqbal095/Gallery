
// Gsap Animation
const tl = gsap.timeline({ defaults: { ease: "power1.out" } })

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 })
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 })
tl.to(".intro", { y: "-100%", duration: 1 }, "<")
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 })
tl.fromTo(".welcome-msg", { opacity: 0 }, { opacity: 1, duration: 1 }, "<")

// navbar
const hambrgerBtn = document.querySelector(".hamburger")
const hamburgerItems = document.querySelector(".hamburger-items")
const items = document.querySelectorAll(".hamburger-items li")
const hamburgerIcon = document.querySelector(".hamburger-icon")
const hamburgerCloseIcon = document.querySelector(".hamburger-close-icon")

hambrgerBtn.addEventListener("click", () => {
    hamburgerItems.classList.toggle("open")
    hamburgerIcon.classList.toggle("hidden")
    hamburgerCloseIcon.classList.toggle("hidden")

    items.forEach(link => {
        link.classList.toggle("fade")
    })
})

// Caruosel
let middleNumber = 0
let imgEl = document.querySelectorAll(".wallpaper-container img")
let backwardEl = document.querySelector(".backward")
let forwardEl = document.querySelector(".forward")


function middleOne() {
    if (imgEl.length % 2 == 0) {
        middleNumber = imgEl.length / 2 - 1
    } else {
        middleNumber = (imgEl.length + 1) / 2 - 1
    }
    return middleNumber
}

imgEl[middleOne()].classList.add("fit-the-container")

for (let i = 0; i < imgEl.length; i++) {
    imgEl[i].addEventListener("click", () => {
        imgEl[i].classList.add("fit-the-container")
    })
}