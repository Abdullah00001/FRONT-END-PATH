/* const usersInfo =  */

document.getElementById("userData").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => loadUsers(data));
});

function loadUsers(data) {
  console.log(data);
}
