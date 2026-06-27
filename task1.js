let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');
let box4 = document.querySelector('.box4');
box1.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
});
box2.addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue';
});
box3.addEventListener('click', function() {
    document.body.style.backgroundColor = 'green';
});
box4.addEventListener('click', function() {
    document.body.style.backgroundColor = 'yellow';
});
let btn = document.querySelector('.btn1');
let output = document.querySelector('.output');
let input = document.querySelector('input');

btn.addEventListener("click", function () {
    output.textContent = `You Typed: ${input.value}`;
});