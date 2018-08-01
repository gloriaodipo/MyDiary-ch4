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
    .then(res => {
      console.log(res);
      alert(res.message);
      if (res.token) {
        localStorage.setItem("token", res.token);
        window.location.href = "./addentry.html";
      }
    });
});
