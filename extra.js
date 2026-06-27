
let images = document.querySelectorAll(".images img");

let index = 0;
images[index].style.display = "block";

setInterval(() => {

    images[index].style.display = "none";
    index++;
    if(index >= images.length){
        index = 0;
    }
    images[index].style.display = "block";

}, 2000);
