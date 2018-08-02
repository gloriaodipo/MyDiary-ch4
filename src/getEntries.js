import api from "./api";

const token = localStorage.getItem("token");
api
  .get("/user/entries", token)
  .then(res => res.json())
  .then(res => {
    console.log(res);
    alert(res.message);
  })
  .catch(err => console.error(err));
