let userName; 
const jwtToken = getCookie("jwtToken");

if (jwtToken.length == 0) {
    window.location.replace(FRONTEND_PRE_URL + "/e-commerce-frontend/error/error.html");
}

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
        console.log(data)
        if (data.role.includes("SELLER") || data.role.includes("ADMIN")) {
            userName = data.userName;
        }else{
            window.location.replace(FRONTEND_PRE_URL + "/e-commerce-frontend/error/error.html");
        }
    }).catch(error => {
        console.log(5)
    });


window.addEventListener("load", () => {
    /* ======== Load Account details ========= */

    function mapUserDetails() {
        console.log()
    }
    mapUserDetails();
});