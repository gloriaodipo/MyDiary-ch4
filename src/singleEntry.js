import api from "./api";

const token = localStorage.getItem("token");
const entry_id = sessionStorage.getItem("entryid");

let url = `/user/entries/${entry_id}`;
console.log(url);

api
  .get(url, token)
  .then(res => res.json())
  .catch(e => console.error(e))
  .then(res => {
    console.log(res);
    document.getElementById("createdat").value = res.entry.created_at;
    document.getElementById("modifiedat").value = res.entry.last_modified;
    document.getElementById("title").value = res.entry.title;
    document.getElementById("description").value = res.entry.description;
  });

document.getElementById("edit").addEventListener("click", function(e) {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let url = `/user/entries/${entry_id}`;
  let data = { title: title, description: description };
  api
    .update(url, token, (data = data))
    .then(res => res.json())
    .catch(e => console.error(e))
    .then(res => {
      document.getElementsByClassName("alert")[0].innerHTML = res.message;
      console.log(res);
    });
});
