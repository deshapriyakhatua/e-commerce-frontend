let userName;
function isUserCanAccessAdminSection(){

    const jwtToken = getCookie("jwtToken");

    if (jwtToken.length == 0) {
        window.location.replace(FRONTEND_PRE_URL + "/e-commerce-frontend/error/error.html");
    }

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
            userName = data.userName;
            if (!(data.role.includes("SELLER") || data.role.includes("ADMIN"))) {
                window.location.replace(FRONTEND_PRE_URL + "/e-commerce-frontend/error/error.html");
            }
        }).catch(error => {
            window.location.replace(FRONTEND_PRE_URL + "/e-commerce-frontend/error/error.html");
        });

}
isUserCanAccessAdminSection();