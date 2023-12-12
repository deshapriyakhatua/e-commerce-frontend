window.onload = function () {

    document.querySelectorAll(".upload_image_button").forEach((element) => {
        element.addEventListener("click", (event) => {
            const imageDiv = event.target.parentNode.parentNode;
            imageDiv.querySelector(".upload_image").src = imageDiv.querySelector(".input_url").value;
            console.log(imageDiv.querySelector(".input_url").value)
        });
    });

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
    }


    const subjectSel = document.getElementById("subject");
    const topicSel = document.getElementById("topic");
    const chapterSel = document.getElementById("chapter");

    for (let x in categoryObject) {
        subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }
    subjectSel.onchange = function () {
        //empty Chapters- and Topics- dropdowns
        chapterSel.length = 1;
        topicSel.length = 1;
        //display correct values
        for (let y in categoryObject[this.value]) {
            topicSel.options[topicSel.options.length] = new Option(y, y);
        }
    }
    topicSel.onchange = function () {
        //empty Chapters dropdown
        chapterSel.length = 1;
        //display correct values
        var z = categoryObject[subjectSel.value][this.value];
        for (let i = 0; i < z.length; i++) {
            chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
        }
    }





}