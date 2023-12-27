/*================== Slider Banner ==================== */
const slides = [

    "https://static.vecteezy.com/system/resources/previews/004/299/813/large_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
    ,

    "https://static.vecteezy.com/system/resources/previews/007/153/463/non_2x/shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-women-concept-free-vector.jpg"
    ,

    "https://static.vecteezy.com/system/resources/previews/004/299/835/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
    ,

    "https://static.vecteezy.com/system/resources/previews/002/006/967/non_2x/young-women-takes-a-shopping-cart-and-enjoy-online-shopping-through-smartphones-choose-to-buy-gifts-valentine-s-day-concepts-website-or-mobile-phone-application-flat-design-illustration-vector.jpg"

];

const bannerImg = document.querySelector(".banner_img");
bannerImg.src = slides[0];
let bannerIndex = 0;
let sliderInterval;
autoSlide();

document.querySelectorAll(".dots .dot").forEach((elem, i) => {
    elem.addEventListener("click", () => {
        const selectDots = document.querySelectorAll(".dots .dot");
        selectDots[bannerIndex].classList.remove("dot_selected");
        bannerIndex = i;
        bannerImg.src = slides[bannerIndex];
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
    bannerImg.src = slides[bannerIndex];
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
        track.prepend(track.removeChild(items[items.length - 1]));
    } else {
        track.append(track.removeChild(items[0]));
    }
}

document.querySelector(".btn.prev").addEventListener('click', () => { animate("left"); });
document.querySelector(".btn.next").addEventListener('click', () => { animate("right"); });


/*===================== slider functions ==================== */

/* slide on button click */
function slideOnClick(direction, scrollParent, cardWidth) {

    if (direction === "right") {
        scrollParent.scrollBy(cardWidth, 0);
    } else {
        scrollParent.scrollBy(-cardWidth, 0);
    }

}

/* create card */
function createCard(array, parent) {
    array.forEach((elem) => {
        let createdElement = document.createElement("li");
        createdElement.className = "card";
        createdElement.style.backgroundImage = `url("${elem}")`;
        parent.append(createdElement);
    })
}

/*===================== slider1 ==================== */

document.querySelector(".slider_container .slider_btn.prev").addEventListener('click', () => {
    slideOnClick("left", document.querySelector(".slider_container .slider_parent"), document.querySelector(".slider_container .slider .card").clientWidth);
});
document.querySelector(".slider_container .slider_btn.next").addEventListener('click', () => {
    slideOnClick("right", document.querySelector(".slider_container .slider_parent"), document.querySelector(".slider_container .slider .card").clientWidth);
});

let slideArr1 = [
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aa4658b5-d723-4652-9ea1-00456b355c3a1645602467046-Kurta-Sets.jpg",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aae4be67-e611-47f4-b94e-92a16a36df731645602467007-Hangbags.jpg",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0f0be09e-4155-47bf-82e1-51044e7e7fd11645602467052-Kurtas.jpg",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/dd4414f8-4e1b-4a22-997e-8e06c0a5ff861645602467167-T-Shirts.jpg",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f9ca5609-b634-42d4-8c08-a8eaebb818b71645602467085-Sarees.jpg",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0b7869d4-f825-4625-b1db-58ad10a45f301645602467093-Shirts.jpg",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b34a30a6-504b-4c94-b7e1-61391d536bc51645602467038-Jewellery.jpg",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b156f76a-26e7-4bce-9941-8a67d3c16f331645602467120-Teens-Wear.jpg",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/fb091b07-c275-4578-b08d-b4f93dfe9e841645602466976-Beauty.jpg",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b827f900-ed61-4467-84fa-a6e357787e761645602467079-Plus-Size-Styles_W.jpg",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/cd083042-3bb2-4231-8b96-0234fc0ed23f1645602467032-Jeans.jpg",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/736f3951-e67b-414f-bfb1-56e2794d441d1645602467114-Sports-Shoes.jpg",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/d13255df-c846-4dbd-8458-77ccaba4f9eb1645602467142-Trousers.jpg",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/7a774194-94e6-49b5-b8bb-64bf9901bc671645602466989-Casual-Shoes.jpg",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/5860c3c2-a639-4625-ac1d-4d55406f128a1645602467134-Track-Pants.jpg",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/07e5c29a-2eab-4b2d-b617-6565ffe1f4701645602467025-Innerwear.jpg"
];

createCard(slideArr1, document.querySelector(".slider_container .slider"));


/*===================== slider 2 ==================== */

document.querySelector(".slider_container2 .slider_btn.prev").addEventListener('click', () => {
    slideOnClick("left", document.querySelector(".slider_container2 .slider_parent"), document.querySelector(".slider_container2 .slider .card").clientWidth);
});

document.querySelector(".slider_container2 .slider_btn.next").addEventListener('click', () => {
    slideOnClick("right", document.querySelector(".slider_container2 .slider_parent"), document.querySelector(".slider_container2 .slider .card").clientWidth);
});

var slideArr2 = [
    "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/29/2eaab0d6-e843-4ad2-b1da-2159d1d30e9e1648537708005-WONDERFUL-DEALS-AHEAD-.jpg"
    ,

    "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/19/aa52212a-f867-4315-9b8b-355261ba0e651647679856552-Shirts---Trousers.jpg"
    ,

    "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/19/d506dd29-7339-48c5-8a22-a5fbfdfe16951647679856512-Top-Selling-Kurtas-----1.jpg"
    ,

    "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/19/126557af-2621-4b2d-82e6-692d643798301647679856536-Casual-Tees.jpg"
    ,

    "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/19/8492fba6-0552-4dfa-923d-e7e667fb92ee1647679856527-Heels.jpg"
    ,

    "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/19/a183b4a3-5f4c-46c0-98e4-6711f6495af51647679856543-Bath-Essentials.jpg"
    ,

    "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/19/f391abc2-aae9-4d9b-bc67-caef1676b3611647679856520-Premium-Timepieces.jpg"

];

createCard(slideArr2, document.querySelector(".slider_container2 .slider"));

/*===================== slider 3 ==================== */

document.querySelector(".slider_container3 .slider_btn.prev").addEventListener('click', () => {
    slideOnClick("left", document.querySelector(".slider_container3 .slider_parent"), document.querySelector(".slider_container3 .slider .card").clientWidth);
});

document.querySelector(".slider_container3 .slider_btn.next").addEventListener('click', () => {
    slideOnClick("right", document.querySelector(".slider_container3 .slider_parent"), document.querySelector(".slider_container3 .slider .card").clientWidth);
});

var slideArr3 = [
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/3/10/b25f89eb-fbeb-4013-829e-32ee5b5daaa01646895183668-Roadster-HRX_Unisex.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/bfa5c871-a5a5-4d81-b46e-18aedccfdc9b1644407437913-Kurta_sets-_Anouk-_AAY_-_more.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/046147d1-1874-4c10-adb9-6dbd88b606e71644407437923-Kurtas-_Anouk-_Sangria_-_more.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/76acf345-fc62-4b49-8b2c-9c0fc9c925311644407437977-Tops_-_Dressberry-_AAY_-_more.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/3923c0c1-2260-4f0e-9598-15b6f9d7731c1644407437960-Roadster_and_H-N_Shirts.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/eb70855e-98c4-412d-bf20-50804546d57e1644407437883-Dresses_-_Dressberry-_Chemistry_-_more.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/eff5a33f-ea24-4e70-84e5-ec4d25ee5c7b1644407437968-Roadster_and_KnK_Tshirts.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/667a71f0-c24b-4a00-a98c-cc6a54a815e91644407437985-Tshirts_-_Roadster-_KnK_-_more.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/ffaa74a6-4824-4b19-8936-70ffaef92f001644407437937-M-H_and_HRX_Tshirts.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/f9621136-0f00-44d5-aa06-b727a6c8f7c51644407437944-M-H_and_Wrogn_Shirts.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/3f41465b-7109-4bb2-bf79-ab89ff2128be1644407437899-HRX_and_Harvard_Trackpants.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/745cec57-af58-4ba6-8ae1-a3ccbe7c54e91644407437930-Lingerie_-_Loungewear_-_DB-_ETC.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/e27ee3af-3f6b-4106-9b20-2b4463c80ba41644407437953-Roadster-_Wrogn_Jeans.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/2b15a87a-1d92-4edf-99c2-ec390a38089e1644407437872-Activewear_-_HRX-_Slazenger.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/931b0b8f-c14d-4ec7-b923-cf512de991731644407437891-HOP_and_Anouk_Kurtas_-_sets.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/201d1bfd-287e-47b6-bef6-3c46eac444a51644407437906-Jeans_-_Roadster-_M-H_and_more.jpg"

];

createCard(slideArr3, document.querySelector(".slider_container3 .slider"));

/*===================== slider 4 ==================== */

document.querySelector(".slider_container4 .slider_btn.prev").addEventListener('click', () => {
    slideOnClick("left", document.querySelector(".slider_container4 .slider_parent"), document.querySelector(".slider_container4 .slider .card").clientWidth);
});

document.querySelector(".slider_container4 .slider_btn.next").addEventListener('click', () => {
    slideOnClick("right", document.querySelector(".slider_container4 .slider_parent"), document.querySelector(".slider_container4 .slider .card").clientWidth);
});

var slideArr4 = [
    "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/062cea23-9a6a-44b9-bdd4-87cae6a462311645602543339-Kurta-sets.jpg",

    "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/8d65d400-decd-4f42-902c-a40350a16ed11645602543346-Kurtas.jpg",

    "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/398ee53b-5899-4a9a-9d0b-b35d60c01cb41645602543325-Dresses.jpg",

    "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/2f410d81-7fae-400e-9ecc-b4a8b6df72b91645602543430-Women-Jeans.jpg",

    "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/82a9be01-3032-4725-9500-bcc94366b7931645602543399-Mens-Shirts.jpg",

    "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/c6b09c0f-5c57-472c-a3fc-854ec506a90e1645602543387-Men-T-shirt.jpg",

    "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f08e2bac-9bed-4f87-b022-0dce8defeded1645602543380-Men-Trousers.jpg"
];

createCard(slideArr4, document.querySelector(".slider_container4 .slider"));

/*===================== slider 5 ==================== */

document.querySelector(".slider_container5 .slider_btn.prev").addEventListener('click', () => {
    slideOnClick("left", document.querySelector(".slider_container5 .slider_parent"), document.querySelector(".slider_container5 .slider .card").clientWidth);
});

document.querySelector(".slider_container5 .slider_btn.next").addEventListener('click', () => {
    slideOnClick("right", document.querySelector(".slider_container5 .slider_parent"), document.querySelector(".slider_container5 .slider .card").clientWidth);
});

var slideArr5 = [
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/1ec9ffd5-335f-4ecb-a7e9-ea403da9a7df1645805770868-SS22-SeasonChecklist-PricePoints-CleanBlueDenim.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/a0e60587-5d1e-41f0-9d5f-f42a925a55921645793729467-SS22-SeasonChecklist-Trending-BlockHeels.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/99a29231-2050-4fde-ad40-efa35de66e5b1645805770994-SS22-SeasonChecklist-PricePoints-TrendySneakers.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/bdde4d47-9908-4764-b09e-5a55034e32b01645793729554-SS22-SeasonChecklist-Trending-Loungewera.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/6bcf042c-5f07-47e2-a1cb-3da58c4f94951645793729590-SS22-SeasonChecklist-Trending-SlipOns.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/50c525cc-6724-4d41-9e97-5b931a33631b1645806100291-SS22-SeasonChecklist-AddOns-New-Season-Wallets_.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/1/62ef932d-b023-4c34-b649-bc3b399057a31646114955627-SS22-SeasonChecklist-Styling-Women-Kurtas.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/518f4774-cd01-4076-b2ee-03170d232c161645793729608-SS22-SeasonChecklist-Trending-Stylecast.jpg"
];

createCard(slideArr5, document.querySelector(".slider_container5 .slider"));

/*===================== slider 6 ==================== */

document.querySelector(".slider_container6 .slider_btn.prev").addEventListener('click', () => {
    slideOnClick("left", document.querySelector(".slider_container6 .slider_parent"), document.querySelector(".slider_container6 .slider .card").clientWidth);
});

document.querySelector(".slider_container6 .slider_btn.next").addEventListener('click', () => {
    slideOnClick("right", document.querySelector(".slider_container6 .slider_parent"), document.querySelector(".slider_container6 .slider .card").clientWidth);
});

var slideArr6 = [
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/3/f0dc0024-a8d3-4aec-9e1b-d9b6873b52d51599144996663-Crocs.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/85d5e2e1-fa21-43b0-a352-438e15f1006e1598892141455-Nike.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/22b908fa-38aa-46a6-a3cd-a5ccd46b04ce1598892141560-Puma.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/26/adc58a2c-fa18-4b94-b2d6-4c692a44123d1601115417606-unnamed--6-.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8238147e-a86e-4fe4-a830-ab5c2c49beba1598892141840-W.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/7d0153c1-2fc4-49ec-ac7c-3c402d1ed45f1598948396008-USPA.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/c6a4ec29-f907-4d54-8ed7-83006938b20c1598892141612-Tommy-Hilfiger.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/26/d1fab403-7742-4a91-a781-2e36bea65a8a1598445950683-Men-s-Apparel---Roadster.png",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/4abbda25-8d58-44f7-a986-c80fa31b08b31598892141513-Only.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/26/72af0092-fd16-4b61-b1fb-e617c089fe251598456566139-image_jpeg1938580873.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/9/5a5a162e-c4ad-4497-b995-a3c077d25df71596975348916-Women-s-Ethnic-Wear_Vishudh.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/da4935ce-8f3f-4273-bfbe-6ded783cf2131598948352513-Levis.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/ee953e28-7ca8-4e08-a6a9-c51c98f823411598892141010-BIBA.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/08f15f56-156e-45c8-b0bc-7aecd0b122431598970514602-Veromoda.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/64ec275a-9d3a-432c-b3df-736a7e9518d11598892141670-UCB.jpg",

    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/26/0390ad1a-1262-4f7a-8f81-37c1644142a91598445950839-Sports---HRX-by-Hrithik-Roshan.png"
];

createCard(slideArr6, document.querySelector(".slider_container6 .slider"));