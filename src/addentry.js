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
    .then(data => {
      console.log(data.message);
      if (data.message === "Entry has been published") {
        let msg = data.message;
        document.getElementById("addentryform").innerHTML = msg;
        window.location.href = "./getEntries.html";
      } else {
        let msg = Object.values(data);
        document.getElementById("addentryform").innerHTML = msg;
      }
    });
});
// .catch(error => {
//     console.log(error);
//   };
