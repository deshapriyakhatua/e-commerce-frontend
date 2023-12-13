window.onload = function () {

    /* ============== open & close navigation =============== */
    
    document.querySelector(".toggle").addEventListener("click", (e) => {
        console.log("hi")
        document.querySelector(".main_navigation").style.left = "0px";
        document.querySelector(".close_navigation").style.display = "block";
    });

    document.querySelector(".close_navigation").addEventListener("click", (e) => {
        document.querySelector(".main_navigation").style.left = "-" + window.getComputedStyle(document.querySelector(':root')).getPropertyValue('--navigation-width');
        document.querySelector(".close_navigation").style.display = "none";
    });


    document.onclick = function (e) {
        console.log(e.target.className);
    }


    
}