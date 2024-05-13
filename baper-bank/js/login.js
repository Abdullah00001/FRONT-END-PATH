const login_btn = document.getElementById("submit-btn");
const info = {
  email: "abdullah@gmail.com",
  password: "abdullah0001",
};
login_btn.addEventListener("click", (event) => {
  event.preventDefault();
  const userEmail = document.getElementById("user_Email");
  const emailValue = userEmail.value;
  const userPassword = document.getElementById("user_Password");
  const passwordValue = userPassword.value;
  if (emailValue === info.email && passwordValue === info.password) {
    window.alert("Login Succesfull");
    window.location.href = "../index.html";
  } else {
    alert("Password Vul");
  }
});
