window.addEventListener("load", () => {

    const apiUrl = BACKEND_PRE_URL + '/auth/signUp';

    const contactForm = document.getElementById('form-login');
    const responseMessage = document.getElementById('status_text');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);

        const requestOptions = {
            method: 'POST',
            body: formData
        };

        fetch(apiUrl, requestOptions)
            .then(response => {
                return response.json();
            }
            ).then(data => {

                if (data.error != undefined) {
                    responseMessage.textContent = data.error;
                } else {
                    setCookie("jwtToken", data.jwtToken, 1);
                    window.location.replace(FRONTEND_PRE_URL + "/e-commerce-frontend/products/product.html");
                }
                console.log(data);

            }
            )
            .catch(error => {
                responseMessage.textContent = error;
                console.log("error");
            });
    });

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

});