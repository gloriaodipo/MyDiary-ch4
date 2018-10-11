import api from "./api";

const token = localStorage.getItem("token");
api
  .get("/user/entries", token)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    let entries = data["entries"];
    for (let i in entries) {
      if (entries.hasOwnProperty(i)) {
        let entry = entries[i];
        console.log(entry.title);
        document.getElementById("posts").innerHTML += `<div>
        <button class="titles" onClick="getSingle(event)" data-id="${entry.id}">
        <h3>${entry.title}</h3>
        </button>
        </div>`;
      }
    }
  })
  .catch(error => {
    console.log(error);
  });
