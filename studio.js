
    let menuBtn = document.querySelector(".closeBtn");
    let body = document.body;

    let flag = 0;

    menuBtn.addEventListener("click", function(){

      if(flag === 0){
        body.classList.add("showMenu");
        menuBtn.innerHTML = "Close";
        flag = 1;
      }

      else{
        body.classList.remove("showMenu");
        menuBtn.innerHTML = "Menu";
        flag = 0;
      }

    });
    let dot = document.querySelector(".blue-dot");

document.addEventListener("mousemove", function(e){

    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";

});