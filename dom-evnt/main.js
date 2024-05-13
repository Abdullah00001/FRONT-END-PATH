const elem = document.getElementById("confirmation-text");

elem.addEventListener("keyup", (event) => {
  const elem_val = event.target.value;
  const dlt_btn = document.getElementById("delete-btn");

  if (elem_val === "CONFIRM") {
    dlt_btn.removeAttribute("disabled");
  } else {
    dlt_btn.setAttribute("disabled", true);
  }
});
