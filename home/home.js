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

document.querySelectorAll(".dots .dot").forEach((elem,i)=>{
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

function autoSlide(){
    clearInterval(sliderInterval);
    sliderInterval = setInterval(() => {
        slide("right");
    }, 3000);
}

document.querySelector(".arrow_right").addEventListener("click", ()=>{ 
    slide("right");
    autoSlide();
});

document.querySelector(".arrow_left").addEventListener("click",  ()=>{ 
    slide("left");
    autoSlide();
});


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

document.addEventListener('click',activate);

let currentOffersImages = [
    "https://s7ap1.scene7.com/is/image/TslDXP/bob-mobile?fmt=webp",
    "https://s7ap1.scene7.com/is/image/TslDXP/MicrosoftTeams-image%20(11)?fmt=webp",
    "https://s7ap1.scene7.com/is/image/TslDXP/tiscon-mobile-offer?fmt=webp",
    "https://s7ap1.scene7.com/is/image/TslDXP/Tiscon_23-anniversary-mobile?fmt=webp",
    "https://s7ap1.scene7.com/is/image/TslDXP/FEDERAL%20BANK%20WEBSITE%20CREATIVE?fmt=webp",
    "https://s7ap1.scene7.com/is/image/TslDXP/June10_Banner?fmt=webp",
    "https://s7ap1.scene7.com/is/image/TslDXP/Summer_Bonanza_Offer_Tiscon?fmt=webp"
];

