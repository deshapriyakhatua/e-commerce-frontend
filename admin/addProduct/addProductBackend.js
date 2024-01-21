window.addEventListener("load", () => {

    document.querySelector(".add_product_button").addEventListener("click", (event)=>{
        event.preventDefault();
        console.log("clicked");
        const title = document.querySelector(".prduct_title").value;
        const price = document.querySelector(".product_price").value;
        const deliveryChrgs = document.querySelector(".delivery_chrgs").value;
        const description = document.querySelector(".product_desc").value;
        const specification = [...document.querySelectorAll(".specification_row")].reduce((spec, elem, index)=>{
            return spec += (index===0 ?"" :",") + elem.querySelectorAll("input")[0].value + "|" + elem.querySelectorAll("input")[1].value;
            
        }, "");
        
        const reqBody = {
            "title":title,
            "price":price,
            "description":description,
            "specification":specification,
            "category":{ "categoryName":"shirt" }
        };
    
            const apiUrl = BACKEND_PRE_URL + '/product/product';
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
    
                    if (data.error != undefined) {
                        
                    } else {
                       
                    }
                    console.log(data);
    
                }
                )
                .catch(error => {
                    
                    console.log(error);
                });
    });
    

});