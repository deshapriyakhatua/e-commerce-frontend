document.querySelector(".filter__options_container").addEventListener("click",()=>{
    console.log(document.querySelector(".main__left"))
    document.querySelector(".main__left").classList.toggle("hide_filter_container");
    document.querySelector(".main__left").classList.toggle("show_filter_container");
    document.querySelector(".filter_dropdown_arrow").classList.toggle("rotate");
});


