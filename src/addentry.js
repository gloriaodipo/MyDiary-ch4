import api from "./api";

document.getElementById("addentryform").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value
  };
  console.log(data);
  const token = localStorage.getItem("token");
  api
    .post("/user/entries", data, token)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      alert(res.message);
    })
    .catch(err => console.error(err));
});
