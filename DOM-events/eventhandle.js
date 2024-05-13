const dk = document.getElementById("dark");
const df = document.getElementById("default");

const st = document.getElementById("status");
const lt = document.getElementById("light");
dk.addEventListener("click", () => {
  st.innerText = "Kala Pakhi Is Jole";
  lt.style.backgroundColor = "#000000";
  lt.style.color = "#ffffff";
});
df.addEventListener("click", () => {
  st.innerText = "sada Pakhi Is Jole";
  lt.style.backgroundColor = "#ffffff";
  lt.style.color = "#000000";
});

document.getElementById("btn").addEventListener("click", () => {
  const ipf = document.getElementById("tx");
  const val = ipf.value;
  document.getElementById("st").innerText = val;
  ipf.value  =""
  console.log(5);
});
