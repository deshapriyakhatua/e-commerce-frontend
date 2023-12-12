window.onload = function () {

    document.querySelectorAll(".upload_image_button").forEach((element) => {
        element.addEventListener("click", (event) => {
            const imageDiv = event.target.parentNode.parentNode;
            imageDiv.querySelector(".upload_image").src = imageDiv.querySelector(".input_url").value;
            console.log(imageDiv.querySelector(".input_url").value)
        });
    });

   // create select tags for categories

    function createSelectTag(categoryObject) {

        let selectParent = document.querySelector("#product_category_holder");

        // add new select tag
        let selectTag = document.createElement("select");
        selectTag.className = "created_select";

        selectTag.appendChild(new Option("Select","Select"));

        // append option tags to new select tag
        if(Array.isArray(categoryObject)){

            for(let val of categoryObject){
                selectTag.appendChild(new Option(val,val));
            }

        }else{

            for(let key in categoryObject){
                selectTag.appendChild(new Option(key,key));
            }

        }
        
        selectParent.append(selectTag);

        // add event listner to new select tag
        selectTag.onchange = function () {

            let selectParent = document.querySelector("#product_category_holder");

            // first remove if select chain created
            let alreadyCreatedSelects = document.querySelectorAll(".created_select");
            let boolean = false;
            
            alreadyCreatedSelects.forEach((element, index)=>{
                if(boolean){ selectParent.removeChild(element); }
                if(element === this){ boolean = true; }
            });
            
            // if this select tag still have child
            if(this.value !== "Select" && typeof categoryObject === "object" && !Array.isArray(categoryObject)){
                createSelectTag(categoryObject[this.value]);
            }

        }

    }

    const categoryObject = {
        "Front-end": {
            "HTML": ["Links", "Images", "Tables", "Lists"],
            "CSS": ["Borders", "Margins", "Backgrounds", "Float"],
            "JavaScript": ["Variables", "Operators", "Functions", "Conditions"]
        },
        "Back-end": {
            "PHP": ["Variables", "Strings", "Arrays"],
            "SQL": ["SELECT", "UPDATE", "DELETE"]
        }
    };

    createSelectTag(categoryObject)



}