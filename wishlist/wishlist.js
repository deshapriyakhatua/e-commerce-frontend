let preOnloadProduct = window.onload;

window.onload = function () {
    if (preOnloadProduct) { preOnloadProduct(); }

    function createCards(){
        let images2 = [
            "https://www.mydesignation.com/wp-content/uploads/2019/12/manushyan-tshirt-mydesignation-mockup-latest-image-.jpg",
            "https://www.mydesignation.com/wp-content/uploads/2020/07/vada-yakshi-tshirt-pani-paali-official-merchandise-image-500x500.jpg",
            "https://www.mydesignation.com/wp-content/uploads/2022/08/oops-tshirt-mockup-image-500x500.jpg",
            "https://www.mydesignation.com/wp-content/uploads/2022/12/naatil-evideya-tshirt-mockup-image-.jpg",
            "https://www.mydesignation.com/wp-content/uploads/2022/06/TOO-HOT-TO-HANDLE-mockup-image-500x500.jpg",
            "https://www.mydesignation.com/wp-content/uploads/2023/05/kantha-tshirt-masala-coffee-official-merchandise-500x500.jpg",
            "https://www.mydesignation.com/wp-content/uploads/2022/06/TOO-HOT-TO-HANDLE-mockup-image-500x500.jpg",
            "https://www.mydesignation.com/wp-content/uploads/2020/07/vada-yakshi-tshirt-pani-paali-official-merchandise-image-500x500.jpg",
            "https://www.mydesignation.com/wp-content/uploads/2020/12/SCREW-YOU-TSHIRT-MYDESIGNATION-PRODUCT-IMAGE--500x500.jpg",
            "https://www.mydesignation.com/wp-content/uploads/2022/07/NO-BRAIN-NO-PAIN-TSHIRT-SUPPANDI-EDITION-MYDESIGNATION--500x500.jpg",
            "https://www.mydesignation.com/wp-content/uploads/2019/06/trivandrum-tshirt-mydesignation-image-latest-500x500.jpg",
            "https://www.mydesignation.com/wp-content/uploads/2023/04/naatil-evideya-tshirt-male-image.jpg",
            "https://www.mydesignation.com/wp-content/uploads/2020/12/SCREW-YOU-TSHIRT-MYDESIGNATION-PRODUCT-IMAGE--500x500.jpg",
            "https://www.mydesignation.com/wp-content/uploads/2022/07/NO-BRAIN-NO-PAIN-TSHIRT-SUPPANDI-EDITION-MYDESIGNATION--500x500.jpg",
            "https://www.mydesignation.com/wp-content/uploads/2023/01/avial-tshirt-image-500x500.jpg",
            "https://www.mydesignation.com/wp-content/uploads/2022/08/not-so-touchy-tshirt-display-mockup-image--500x500.jpg",
            "https://www.mydesignation.com/wp-content/uploads/2022/08/not-so-touchy-tshirt-display-mockup-image--500x500.jpg",
            "https://www.mydesignation.com/wp-content/uploads/2018/10/kochi-tshirt-unisex-white-image--500x500.jpg",
            "https://www.mydesignation.com/wp-content/uploads/2023/01/avial-tshirt-image-500x500.jpg",
            "https://www.mydesignation.com/wp-content/uploads/2022/08/oops-tshirt-mockup-image-500x500.jpg"
            ];

            images2.forEach((element) => {
                const card = document.createElement(`div`);
                card.className = 'card';
                card.innerHTML = `
                <img class="upload_image" src="${element}" alt="">

                <div class="product_details">
                    <p class="product_title">New Watches For men</p>
                    <p class="product_price">Price: 300 Rs.</p>
                    <p class="product_rating">4.5 <span class="material-symbols-rounded star_icon">star</span> </p>
                </div>

                <div class="product_button_box">
                    <button class="product_edit_button"> Remove <span class="material-symbols-rounded product_button_icon"> delete </span> </button>
                    <button class="product_view_button"> Cart <span class="material-symbols-rounded product_button_icon"> shopping_cart </span> </button>
                </div>
            `;
                document.querySelector(`.cardBox`).appendChild(card);
                console.log(card)
            });
    }

    createCards();






}