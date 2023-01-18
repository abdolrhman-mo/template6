// Menu Section Code

const navMenu = document.querySelector(".nav-menu")
let navOpen = false

document.querySelector(".nav-btn").addEventListener("click", () => {
    if(navOpen == false) {
        navMenu.style.height = "90vh"
        navOpen = true
    } else {
        navMenu.style.height = "0"
        navOpen = false
    }
})

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.style.height = "0"
    })
})

// About Section Code 

const aboutBtns = document.querySelectorAll(".about-us ul li")

aboutBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".about-us article > div").forEach(div => {
            div.classList.remove("show")
        })
        document.querySelectorAll(".about-us ul li").forEach(li => {
            li.classList.remove("show")
        })
        document.querySelector(`.about-us .${btn.innerText.toLowerCase()}-article`).classList.add("show")
        btn.classList.add("show")
    })
});