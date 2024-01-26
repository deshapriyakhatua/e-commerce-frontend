window.addEventListener("load", () => {

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


    /* ============== preview uploaded images on click =============== */

    document.querySelectorAll(".upload_image_button").forEach((element) => {
        element.addEventListener("click", (event) => {
            const imageDiv = event.target.parentNode.parentNode;
            imageDiv.querySelector(".upload_image").src = imageDiv.querySelector(".input_url").value;
        });
    });

    /* ============ add new row for product description ============ */

    document.querySelector(".add_new_input_field").addEventListener("click", (e)=>{
        const tableRow = document.createElement("tr");
        tableRow.className = "specification_row";
        tableRow.innerHTML = `
            <td>
                <input type="text">
            </td>
            <td>
                <input type="text">
            </td>
        `;
        document.querySelector(".product_specification_table").appendChild(tableRow);
    });

});