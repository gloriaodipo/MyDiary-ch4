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
        console.log(entry);
        document.getElementById("posts").innerHTML += `<div>
        <h4><i>${entry.title}</i></h4>
        <p>${entry.description}</p>
        </div><hr/>`;
      }
    }
    // for (i = 0; i < data.length; i++) {
    //   console.log(data.length);
    //   document.getElementById("posts").innerHTML += `<div>
    //   <h4><i>${data[i].title}</i></h4>
    //   <p>${data[i].description}</p>
    //   </div><hr/>`;
    // }
  })
  .catch(error => {
    console.log(error);
  });
