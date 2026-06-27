let box = document.getElementById("box");
let btn = document.querySelector(".btn");
btn.addEventListener("click",()=>{
        box.style.backgroundColor="blue";
}); 
btn.addEventListener("mouseover",()=>{
        box.style.backgroundColor="purple";
});
