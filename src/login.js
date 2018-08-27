import api from "./api";

document.getElementsByClassName("alert-danger")[0].style.visibility = "hidden";
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
    .then(res => {
      console.log(res);
      if (res.token) {
        localStorage.setItem("token", res.token);
        window.location.href = "./getEntries.html";
      } else {
        let alertbox = document.getElementsByClassName("alert-danger")[0];
        alertbox.innerHTML = res.message;
        alertbox.style.visibility = "visible";
      }
    });
});
