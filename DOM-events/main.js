const doc = document.getElementById("demo");
const cng = document.getElementById("btn");
const system = document.getElementById("sys");

cng.onclick = () => {
  doc.style.backgroundColor = "blue";
  doc.style.color = "#ffffff";
  const jabo = document.createElement("h1");
  jabo.innerText = "Inshallah jabo hhby chill hby>>>!";
  doc.appendChild(jabo);
  document.getElementById("p").style.fontSize = "30px";
};

const mode1 = document.getElementById("DM");
const mode2 = document.getElementById("DF");

mode1.addEventListener("click", () => {
  system.style.backgroundColor = "#000000";
  document.getElementById("status").style.innerText="Dark Mode On"
});
mode2.addEventListener("click", () => {
  system.style.backgroundColor = "#ffffff";
  document.getElementById("status").innerText="Dark Mode"
});
