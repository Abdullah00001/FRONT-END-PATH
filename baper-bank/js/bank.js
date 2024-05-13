const deposite_Btn = document.getElementById("depo-btn");
const withdraw_Btn = document.getElementById("Withdraw-btn");
deposite_Btn.addEventListener("click", () => {
  let amount = parseInt(document.getElementById("deposite").value);
  let updateDepo = document.getElementById("dep_balance");

  const newD = parseInt(updateDepo.innerText);

  // main_bal += amount;

  amount += newD;
  updateDepo.innerText = amount.toString();
});
