'use strict';

document.addEventListener('DOMContentLoaded', function () {
    console.log('Hello Bulma!');
});




const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);




document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function moveToNextSlide() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}

document.getElementById('dropdown is-active').addEventListener('click',  function(event) {
    event.preventDefault();
    
    console.log('connected');
});

document.getElementById("input").addEventListener('click', function(event) {
    document.getElementById("search-button").addEventListener('click', function() {
        event.preventDefault();
        console.log(event.target.value);
        console.log('input');
    })
    event.preventDefault();
    console.log(event.target.value);
    console.log('input');
    clear();
    
})

function moveToPrevSlide() {
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}