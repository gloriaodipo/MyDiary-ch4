import api from "./api";

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
        alert(res.message);
        if (res.message === "Successfully registered") {
          localStorage.setItem("success", res.message);
          window.location.href = "./login.html";
        }
      });
  } else {
    console.log(data);

    alert("Ensure passwords match");
  }
});
