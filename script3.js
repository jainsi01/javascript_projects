let cross = document.querySelector(".cross")
let popup = document.querySelector(".popup")
setTimeout(() => {
    popup.style.visibility = "visible"
}, 5000)

cross.addEventListener("click", () => {
    popup.style.visibility = "hidden"
})