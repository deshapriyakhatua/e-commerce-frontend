/*================== Slider Banner ==================== */
const slides = [
    {
        imageUrl: "https://static.vecteezy.com/system/resources/previews/004/299/813/large_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
    },
    {
        imageUrl: "https://static.vecteezy.com/system/resources/previews/007/153/463/non_2x/shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-women-concept-free-vector.jpg"
    },
    {
        imageUrl: "https://static.vecteezy.com/system/resources/previews/004/299/835/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
    },
    {
        imageUrl: "https://static.vecteezy.com/system/resources/previews/002/006/967/non_2x/young-women-takes-a-shopping-cart-and-enjoy-online-shopping-through-smartphones-choose-to-buy-gifts-valentine-s-day-concepts-website-or-mobile-phone-application-flat-design-illustration-vector.jpg"
    }
];

/*=============== VARIABLES ===============*/

const dotsContainer = document.querySelector(".dots");
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const img = document.querySelector(".banner-img");
let index = 0;

function createDot(i) {

    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
    dot.addEventListener("click", () => {
        updateCarousel(i);
    });

    if (i === index) {
        dot.classList.add("dot_selected");
    }
}

function displayDots() {

    for (let i = 0; i < slides.length; i++) {
        createDot(i);
    }
}

function updateCarousel(i) {

    const selectDots = document.querySelectorAll(".dots .dot");
    selectDots[index].classList.remove("dot_selected");
    index = i;
    img.src = slides[index].imageUrl;
    selectDots[index].classList.add("dot_selected");
}

function slide(direction) {

    const selectDots = document.querySelectorAll(".dots .dot");
    selectDots[index].classList.remove("dot_selected");
    if (direction === "right") {
        index = (index + 1) % slides.length;
    } else {
        index = (index - 1 + slides.length) % slides.length;
    }
    img.src = slides[index].imageUrl;
    selectDots[index].classList.add("dot_selected");

}

function slideRight() {
    slide("right");
}

function slideLeft() {
    slide("left");
}

function autoSlide() {
    autoSlideInterval = setInterval(() => {
        slideRight();
    }, 3000);
}

arrowRight.addEventListener("click", slideRight);
arrowLeft.addEventListener("click", slideLeft);

dotsContainer.addEventListener("click", () => {
    clearInterval(autoSlideInterval);
    autoSlide();
});

function preloadImages() {
    for (let i = 0; i < slides.length; i++) {
        const imageObj = new Image();
        imageObj.src = slides[i].imageUrl;
    }
}

preloadImages();

img.src = slides[0].imageUrl;
autoSlide();

displayDots();

/*====================== Current Offers ==================== */

const slider = document.querySelector('.slider');
const track = document.querySelector('.slider-track');

function animate(a,b,items) {
  a.style.transform += `translateX(${-items[0].offsetWidth}px)`;
  b.style.transform += `translateX(${items[0].offsetWidth}px)`;
}

function previous(items) {
  track.prepend(items[items.length-1]);
  animate(slider,track,items);
}

function next(items) {
  track.append(items[0]);
  animate(track,slider,items);
}

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.closest('.next') && next(items);
  e.target.closest('.prev') && previous(items);
}

document.addEventListener('click',activate,false);