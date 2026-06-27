let letter = document.querySelector(".letter h1");
let parent = document.querySelector(".letter");
let box = document.querySelector(".box");
document.addEventListener("keydown", (kuchbhi) => {
    letter.textContent = kuchbhi.key;
    let x = 0;
    let y = 0;
    if(kuchbhi.key === "a") y=-300;
    if(kuchbhi.key === "d") y=300;
       if(kuchbhi.key === "w") x=-300;
       if(kuchbhi.key === "s") x=300;
       box.style.transform = `translate(${x}px, ${y}px)`;
    if (kuchbhi.key === "r") {
        parent.style.backgroundColor = "red";
        box.style.backgroundColor = "black";
    } else if (kuchbhi.key === "g") {
        parent.style.backgroundColor = "green";
    } else if (kuchbhi.key === "b") {
        parent.style.backgroundColor = "blue";
    }
});