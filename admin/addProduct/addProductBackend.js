window.addEventListener("load", () => {

    /*=================== category select add options ================= */
    function createOptionsForSelect() {
        let categorySelect = document.querySelector(".category_select");

        let apiUrl = BACKEND_PRE_URL + '/seller/categories';
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
                data.forEach(element => {
                    categorySelect.appendChild(new Option(element.categoryName,element.categoryName));
                });
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });

    }
    createOptionsForSelect();

    document.querySelector(".add_product_button").addEventListener("click", (event) => {
        event.preventDefault();
        activateUpload();
        const title = document.querySelector(".prduct_title").value;
        const price = document.querySelector(".product_price").value;
        const deliveryChrgs = document.querySelector(".delivery_chrgs").value;
        const description = document.querySelector(".product_desc").value;
        const specification = [...document.querySelectorAll(".specification_row")].reduce((spec, elem, index) => {
            return spec += (index === 0 ? "" : ",") + elem.querySelectorAll("input")[0].value + "|" + elem.querySelectorAll("input")[1].value;

        }, "");
        const categoryName = document.querySelector(".category_select").value;
        const images = [...document.querySelectorAll(".input_url")].map((elem)=>{return {"url": elem.value}});
        console.log(images)

        const reqBody = {
            "title": title,
            "price": price,
            "deliveryChrgs": deliveryChrgs,
            "description": description,
            "specification": specification,
            "category": { "categoryName": categoryName },
            "images":images
        };

        const apiUrl = BACKEND_PRE_URL + '/seller/product';
        const jwtToken = getCookie("jwtToken");
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + jwtToken
            },
            body: JSON.stringify(reqBody)
        };

        fetch(apiUrl, requestOptions)
            .then(response => {
                return response.json();
            }
            ).then(data => {
                activateUploaded(true);
                console.log(data);
            }
            )
            .catch(error => {
                activateUploaded(false);
                console.log(error);
            });
    });

    function activateUpload(){
        let button = document.querySelector("#add_product_button");
        button.className = "material-symbols-rounded uploading_icon";
        button.textContent = "progress_activity";
    }
    function activateUploaded(bool){
        let button = document.querySelector("#add_product_button");
        button.className = "material-symbols-rounded uploaded_icon";
        button.textContent = bool ?"done" :"cloud_off";
        setTimeout(()=>{
            button.className = "add_product_button";
            button.textContent = "Add Product";
        },10000);
    }

});