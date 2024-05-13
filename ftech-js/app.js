const btn = document.getElementById("userbtn");
const userlist = document.getElementById("users");
/* const userDatas = fetch("https://jsonplaceholder.typicode.com/users"); */

btn.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => dataLoad(data));
});

function dataLoad(data) {
  for (const user of data){
    const li = document.createElement("li");
  li.innerText = user.name;
  userlist.appendChild(li);
  } 
}
