const BACKEND_PRE_URL = "http://localhost:8080";
const FRONTEND_PRE_URL = "http://127.0.0.1:5500";
//const FRONTEND_PRE_URL = "https://deshapriyakhatua.github.io";

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}