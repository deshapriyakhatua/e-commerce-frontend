window.addEventListener("load", () => {

    document.querySelector(".add_product_button").addEventListener("click", (event)=>{
        event.preventDefault();
        console.log("clicked");
        const reqBody = {
            "title":"fkd",
            "price":550,
            "description":"alsjlfj kjoffd woii laisl lsii slalia lias s",
            "specification":"sssf:ssd,allaf:fsfa,adfaf:aas",
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