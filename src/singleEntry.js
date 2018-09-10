import api from "./api";
import swal from "sweetalert";

document.getElementsByClassName("alert")[0].style.visibility = "hidden";
const token = localStorage.getItem("token");
const entry_id = sessionStorage.getItem("entryid");

let url = `/user/entries/${entry_id}`;
console.log(url);

api
  .get(url, token)
  .then(res => res.json())
  .catch(e => console.error(e))
  .then(res => {
    if (window.location.href === "./editEntry.html") {
      document.getElementById("title").innerHTML = res.entry.title;
      document.getElementById("description").innerHTML = res.entry.description;
    } else {
      console.log(res);
      document.getElementById("createdat").innerHTML += res.entry.created_at;
      document.getElementById("modifiedat").innerHTML +=
        res.entry.last_modified;
      document.getElementById("title").innerHTML += res.entry.title;
      document.getElementById("description").innerHTML += res.entry.description;
    }
  });

document.getElementById("delete").addEventListener("click", function(e) {
  e.preventDefault();
  let url = `/user/entries/${entry_id}`;
  swal({
    title: "Are you sure you want to delete?",
    text: "Once deleted, you will not be able to recover this entry!",
    icon: "warning",
    buttons: true,
    dangerMode: true
  }).then(willDelete => {
    if (willDelete) {
      api
        .delete(url, token)
        .then(res => res.json())
        .catch(e => console.error(e))
        .then(res => {
          swal("Poof! Your entry has been deleted!", {
            icon: "success"
          });
          console.log(res);
          window.location.href = "../getEntries.html";
        });
    } else {
      swal("Your entry is safe!");
    }
  });
});
