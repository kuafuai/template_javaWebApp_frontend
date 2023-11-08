// This file contains the JavaScript code for the website

// Slideshow functionality
var images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
];

var slideshowContainer = document.getElementById("slideshow");
var currentIndex = 0;

function changeImage() {
    slideshowContainer.style.backgroundImage = "url('" + images[currentIndex] + "')";
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeImage, 3000);