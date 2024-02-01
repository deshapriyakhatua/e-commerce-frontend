window.addEventListener("load", () => {

    document.querySelector(".sign_out").addEventListener("click",(event)=>{
        setCookie("jwtToken","",0);
        window.location.replace(FRONTEND_PRE_URL + "/e-commerce-frontend/home/home.html");
    });
    
    document.querySelector(".account_name").textContent = userName.split("@")[0].substring(0,1).toUpperCase() + userName.split("@")[0].substring(1);
    
});
