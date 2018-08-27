import api from "./api";

document.getElementsByClassName("alert-danger")[0].style.visibility = "hidden";
document.getElementById("signupform").addEventListener("submit", function(e) {
  e.preventDefault();
  let password = document.getElementById("password").value;
  let password1 = document.getElementById("password1").value;
  const data = {
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: password,
    password1: password1
  };

  if (password === password1 && password.length >= 8) {
    console.log(data);

    api
      .post("/user/signup", data)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.message === "Successfully registered") {
          window.location.href = "./login.html";
        } else {
          let alertbox = document.getElementsByClassName("alert-danger")[0];
          alertbox.innerHTML = res.message;
          alertbox.style.visibility = "visible";
        }
      });
  } else {
    let alertbox = document.getElementsByClassName("alert-danger")[0];
    let message = "Ensure password match";
    alertbox.innerHTML = message;
    alertbox.style.visibility = "visible";
  }
});
