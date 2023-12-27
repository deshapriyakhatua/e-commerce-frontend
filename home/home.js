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

const bannerImg = document.querySelector(".banner_img");
bannerImg.src = slides[0].imageUrl;
let bannerIndex = 0;
let sliderInterval;
autoSlide();

document.querySelectorAll(".dots .dot").forEach((elem, i) => {
    elem.addEventListener("click", () => {
        const selectDots = document.querySelectorAll(".dots .dot");
        selectDots[bannerIndex].classList.remove("dot_selected");
        bannerIndex = i;
        bannerImg.src = slides[bannerIndex].imageUrl;
        selectDots[bannerIndex].classList.add("dot_selected");
        autoSlide();
    });
});

function slide(direction) {

    const selectDots = document.querySelectorAll(".dots .dot");
    selectDots[bannerIndex].classList.remove("dot_selected");
    if (direction === "right") {
        bannerIndex = (bannerIndex + 1) % slides.length;
    } else {
        bannerIndex = (bannerIndex - 1 + slides.length) % slides.length;
    }
    bannerImg.src = slides[bannerIndex].imageUrl;
    selectDots[bannerIndex].classList.add("dot_selected");

}

function autoSlide() {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(() => {
        slide("right");
    }, 3000);
}

document.querySelector(".arrow_right").addEventListener("click", () => {
    slide("right");
    autoSlide();
});

document.querySelector(".arrow_left").addEventListener("click", () => {
    slide("left");
    autoSlide();
});


/*====================== Current Offers ==================== */

function animate(direction) {
    let track = document.querySelector('.slider_track');
    let items = document.querySelectorAll('.item');
    if (direction === "left") {
        track.prepend(track.removeChild(items[items.length-1]));
    } else {
        track.append(track.removeChild(items[0]));
    }
}

document.querySelector(".btn.prev").addEventListener('click', ()=>{ animate("left"); });
document.querySelector(".btn.next").addEventListener('click', ()=>{ animate("right"); });


/*===================== slider 2 ==================== */

function slide2(direction, distance){
    console.log(distance)
    if(direction === "right"){
        document.querySelector(".slider_parent").scrollBy(distance, 0);
    }else{
        document.querySelector(".slider_parent").scrollBy(-distance, 0);
    }
}
let cardWidth = document.querySelector(".slider .card").clientWidth;
document.querySelector(".slider_btn.prev").addEventListener('click', ()=>{ slide2("left", cardWidth); });
document.querySelector(".slider_btn.next").addEventListener('click', ()=>{ slide2("right", cardWidth); });