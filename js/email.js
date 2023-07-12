function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };
  const serviceID = "service_ool8nx5";
  const templateID = "template_ig3bd3o";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      console.log(res);
      alert("Message sent successfully!");
    })
    .catch((err) => console.log(err));
}

// document.getElementById("submit").addEventListener("click", sendMail)
