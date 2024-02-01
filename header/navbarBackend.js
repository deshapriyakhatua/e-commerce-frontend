window.addEventListener("load", () => {
    /* ======== Load Account details ========= */

    const jwtToken = getCookie("jwtToken");

    if (jwtToken.length != 0) {
        const apiUrl = BACKEND_PRE_URL + '/user/current_user';
        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + jwtToken
            }
        };

        fetch(apiUrl, requestOptions)
            .then(response => {
                return response.json();
            }).then(data => {
                disableSignIn(data.userName);
            }).catch(error => {
            });

    }

    function disableSignIn(user) {
        document.getElementById("navbar_account_dropdown_login").style.display = "none";
        document.getElementById("navbar_account_dropdown_account").style.display = "block";
        document.getElementById("navbar_account_dropdown_account").textContent = user.split("@")[0];
    }
});

