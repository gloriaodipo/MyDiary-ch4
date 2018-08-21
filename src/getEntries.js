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
        <h3><button onClick="getSingle(event)" data-id="${entry.id}">${
          entry.title
        }</button></h3>
        <p>${entry.description}</p>
        </div><hr/>`;
      }
    }
  })
  .catch(error => {
    console.log(error);
  });
