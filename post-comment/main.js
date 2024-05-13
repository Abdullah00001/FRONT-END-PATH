document.getElementById("submit").addEventListener("click", () => {
  const cmnt = document.getElementById("comment");
  const cmntVal = cmnt.value;
  const newCMNT = document.createElement("p");
  newCMNT.classList.add("cmnt-style");
  newCMNT.innerText = cmntVal;
  document.getElementById("coments").appendChild(newCMNT);
  console.log("hello");
  cmnt.value = "";
});

document.getElementById("dlt").addEventListener("keyup", (event) => {
  const dlr_btn = document.getElementById("dlt-btn");
  const text = event.target.value;
  if (text === "delete") {
    dlr_btn.removeAttribute("disabled");
  } else {
    dlr_btn.setAttribute("disabled", true);
  }
});
