const images = [
    "https://images.pexels.com/photos/32785885/pexels-photo-32785885/free-photo-of-vibrant-pink-roses-in-bloom.jpeg?auto=compress&w=1260&h=750&dpr=2",

    "https://images.pexels.com/photos/28954309/pexels-photo-28954309/free-photo-of-elegant-floral-vase-with-vibrant-red-blooms.jpeg?auto=compress&w=600",

    "https://images.pexels.com/photos/31739469/pexels-photo-31739469.jpeg?auto=compress&w=600",

    "https://images.pexels.com/photos/35678159/pexels-photo-35678159.jpeg?auto=compress&w=600",

    "https://images.pexels.com/photos/36502358/pexels-photo-36502358.jpeg?auto=compress&w=600"
];
let index = 0;

const slider = document.getElementById("slider");

slider.src = images[0];

setInterval(() => {
    index++;

    if (index === images.length) {
        index = 0;
    }

    slider.src = images[index];

}, 1000);