import api from "./api";

document.getElementById("signupform").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
    // password1: document.getElementById("password1").value
  };
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
});
