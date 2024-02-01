window.addEventListener("load", () => {

    
    let category = getParameterByName('category');
    let apiUrl = BACKEND_PRE_URL + '/user/products/' + category;
    const jwtToken = getCookie("jwtToken");
    const requestOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwtToken
        }
    };

    fetch(apiUrl, requestOptions)
        .then(response => {
            return response.json();
        }).then(data => {

            console.log(data);
            const cardsParent = document.querySelector(`.main_product`);
            //if(data.length > 0){ cardsParent.innerHTML = ""; }
            
            data.forEach(elem => {
                let card = document.createElement("div");
                card.className = "product__card";
                card.innerHTML = `
                <div class="product__image">
                    <img src="${elem.images[0].url}" alt="Men Pack Of 2 Sustainable Shirts" class="product_main_img">
                    <div class="product__rating">
                        <span class="rating__number">4.5</span>
                        <span class="material-symbols-rounded rating__icon">star_rate_half</span>
                        <span class="rating__seperator">|</span>
                        <span class="rating__count">18.5K</span>
                    </div>
                    <div class="product__similar"><span class="similar__text">View Similar</span></div>
                </div>
                <div class="product__details">
                    <div class="product__name"><span>${elem.title}</span></div>
                    <div class="product__type"><span>Roadster</span></div>
                    <div class="product__price">
                        <span class="product__price__actual">Rs.${elem.price}</span>
                        <span class="product__discount">Rs.2999</span>
                        <span class="product__discount__percent">40% off</span>
                    </div>
                    <div class="product__wishlist__stock">
                        <div class="product__stock"><span class="stock__text">Only Few Left</span></div>
                        <div class="product__wishlist">
                            <span class="material-symbols-rounded wishlist__icon"> favorite </span>
                        </div>
                    </div>
                </div>
                `;
                cardsParent.appendChild(card);
            });

        })
        .catch(error => {
            console.log(error);
        });

});