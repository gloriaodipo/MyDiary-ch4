import api from "./api";

document.getElementById("loginform").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value
  };
  console.log(data);

  api
    .post("/user/login", data)
    .then(res => res.json())
    .then(data => console.log(data));
  localStorage.setItem("success", data.message);
  if (data.message === "You are successfully logged in") {
    window.location.href = "./addentry.html";
  }
});
