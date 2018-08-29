import api from "./api";
import swal from "sweetalert";

document.getElementsByClassName("alert")[0].style.visibility = "hidden";
const token = localStorage.getItem("token");
const entry_id = sessionStorage.getItem("entryid");

let url = `/user/entries/${entry_id}`;
console.log(url);

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
      let alertbox = document.getElementsByClassName("alert")[0];
      alertbox.innerHTML = res.message;
      alertbox.style.visibility = "visible";
      console.log(res);
    });
});
