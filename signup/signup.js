// async function postJSON(data) {
//     try {
//       const response = await fetch("https://example.com/profile", {
//         method: "POST", // or 'PUT'
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
  
//       const result = await response.json();
//       console.log("Success:", result);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }
  
//   const data = { username: "example" };
//   postJSON(data);
  

// const formData = document.getElementById("form-login");


const apiUrl = 'http://localhost:8080/auth/signUp';

const contactForm = document.getElementById('form-login');
const responseMessage = document.getElementById('status_text');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(contactForm);

  const requestOptions = {
    method: 'POST',
    body: formData,
  };

  fetch(apiUrl, requestOptions)
    .then(response => {
            if (!response.ok) {
                //responseMessage.textContent= response.json().detail;
                console.log(response.json());
            }
            return response.json();
        }
    ).then(data => {
            document.cookie = `jwtToken=${data.jwtToken}`;
        }
    )
    .catch(error => {
        //responseMessage.textContent = error;
        console.log(error);
    });
});