window.addEventListener("load", () => {

    let cardBox = document.querySelector(".cardBox");

    let apiUrl = BACKEND_PRE_URL + '/seller/products';
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

            if(data.length > 0){ cardBox.innerHTML = ""; }
            
            data.forEach(elem => {
                let card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `
                    <img class="upload_image" src="${elem.images[0].url}" alt="">

                    <div class="product_details">
                        <p class="product_title">${elem.title}</p>
                        <p class="product_reviews">300 Orders | 67 Reviews</p>
                        <p class="product_rating">4.5 <span class="material-symbols-rounded star_icon">star</span> </p>
                    </div>

                    <div class="product_button_box">
                        <button class="product_edit_button"> Edit</button>
                        <button class="product_view_button"> View</button>
                    </div>
                `;
                cardBox.appendChild(card);
            });
            console.log(data);

        })
        .catch(error => {
            document.querySelector("#load_products_icon").textContent = "cloud_off";
            document.querySelector("#load_products_icon").classList.remove("infinite_rotate");
            console.log(error);
        });

});