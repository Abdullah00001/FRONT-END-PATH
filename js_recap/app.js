const list_items = document.querySelectorAll(".container .list-hello li");

document.getElementById("hd").style.color = "blue";
document.getElementById("hd").style.background = "#000000";

const ul = document.getElementsByClassName("list-hello");
const uli = document.getElementById("listID");

const li = document.createElement("li");

li.innerText = "mayer doya";

uli.appendChild(li);
