window.addEventListener("load", () => {
    /* ======== Load Account details ========= */

    const jwtToken = getCookie("jwtToken");

    if (jwtToken.length != 0) {
        const apiUrl = BACKEND_PRE_URL + '/auth/current_user';
        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + jwtToken
            }
        };

        fetch(apiUrl, requestOptions)
            .then(response => {
                return response.ok ? response.text() : response.json();
            }).then(data => {
                if (typeof data == "string") {
                    disableSignIn(data);
                }
            }).catch(error => {
            });

    }

    function disableSignIn(user) {
        document.getElementById("navbar_account_dropdown_login").style.display = "none";
        document.getElementById("navbar_account_dropdown_account").style.display = "block";
        document.getElementById("navbar_account_dropdown_account").textContent = user.split("@")[0];
    }
});

