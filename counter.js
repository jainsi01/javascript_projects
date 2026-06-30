let count = 10;
let heading = document.querySelector("#count");
heading.innerText = count;

let timer = setInterval(function() {
    count--;
    heading.innerText = count;
    if(count == 0){
        clearInterval(timer);
    }
},1000);

