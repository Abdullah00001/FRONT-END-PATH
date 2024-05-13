const userBTN = document.getElementById("userList");
const ul = document.getElementById("userINFOS");
const userDATAS = fetch("https://jsonplaceholder.typicode.com/users");
userBTN.addEventListener("click", () => {
  userDATAS.then((res) => res.json()).then((infos) => loadUser(infos));
});

const loadUser = (infos) => {
  for (const info of infos) {
    const li = document.createElement("li");
    li.innerText = info.name;
    ul.appendChild(li);
  }
};
