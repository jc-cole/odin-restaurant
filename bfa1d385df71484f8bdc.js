import { renderHome } from "./home.js"
import { renderMenu } from "./menu.js"
import { renderAbout } from "./about.js"
import "./styles.css"

let pageContainer = document.querySelector("#content")

//currently reliant on global vairables pageContainer and buttons
function handleNavButtonPress(event) {
    let pressEvents = {
        "home": renderHome,
        "menu": renderMenu,
        "about": renderAbout,
    }

    buttons.forEach((node) => {
        node.classList.remove("active-button")
    })

    pageContainer.innerHTML = ""
    const buttonClassName = event.target.className
    pressEvents[buttonClassName](pageContainer)
    
    event.target.classList.toggle("active-button")
}

const buttons = document.querySelectorAll("nav button");

buttons.forEach((button) => {
    button.addEventListener("click", handleNavButtonPress)
})

document.querySelector("nav .menu").click()

