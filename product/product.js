/* ==================== Image select ==================== */

const imgs = document.querySelectorAll('.img-select img').forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();console.log(imgItem.src)
        document.querySelector(".product_image_large").src = imgItem.src;
        document.querySelector(".img-showcase").style.backgroundImage = `url('${imgItem.src}')`;
    });
});

/* ======================== Image zoom ======================== */

function zoom(e){
    let zoomer = e.currentTarget;
    console.log(zoomer)
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX/zoomer.offsetWidth*100
    y = offsetY/zoomer.offsetHeight*100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
}
document.querySelector(".img-showcase").addEventListener("mousemove", (e)=>{
    zoom(e);
});
document.querySelector(".img-showcase").addEventListener("touchmove", (e)=>{
    zoom(e);
});