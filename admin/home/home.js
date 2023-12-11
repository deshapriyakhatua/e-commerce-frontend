document.querySelector(".toggle").addEventListener("click",(e)=>{
    console.log("hi")
    document.querySelector(".navigation").style.left = "0px";
});

window.onload = function(){
    document.onclick = function(e){
        console.log(e.target.className);
    }
}