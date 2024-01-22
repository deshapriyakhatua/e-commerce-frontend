let userName; 
const jwtToken = getCookie("jwtToken");

if (jwtToken.length != 0) {
    const apiUrl = BACKEND_PRE_URL + '/account/current_user';
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
            if (data.role.includes("SELLER")) {
                userName = data.userName;
            }else{
                window.location.replace(FRONTEND_PRE_URL + "/e-commerce-frontend/error/error.html");
            }
        }).catch(error => {
        });

}

window.addEventListener("load", () => {
    /* ======== Load Account details ========= */

    function mapUserDetails() {
        console.log()
    }
    mapUserDetails();
});