
// const dots = document.getElementsByClassName("js-news__dot");
// const slider = document.getElementsByClassName("news__swiper-item");

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     if (n > slides.length) {slideIndex = 1}    
//     if (n < 1) {slideIndex = slider.length}
//     for (i = 0; i < slides.length; i++) {
//         slider[i].style.display = "none";  
//     }
//     for (i = 0; i < dots.length; i++) {
//          dots[i].className = dots[i].className.replace(" news__slider-dot--active", "");
//     }
//     dots[n - 1].className += (" ")

//     return n;
// }


var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
    handleChangeSlider(n);
}

function showSlides(n) {
    var i;
    var dots = document.getElementsByClassName("js-news__dot");
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" news__slider-dot--active", "");
    }
    dots[slideIndex - 1].className += " news__slider-dot--active";
}


const sliderItems = document.querySelectorAll(".news__swiper-item");
const sliderItemWidth = sliderItems[0].offsetWidth;
const sliderMain = document.querySelector(".news__swiper-wrapper");

let postionX = 0;

function handleChangeSlider(direction) {
    postionX = -(sliderItemWidth * (direction - 1));
    sliderMain.style = `transform: translateX(${postionX}px)`;
}
