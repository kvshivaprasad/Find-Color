// let colorcode = document.getElementById("colorhunt");
// colorcode.addEventlisterner("onmouseover", () => {
//   console.log("is over");
// });
// colorcode.onmouseover = () => {
//   colorcode.classList.remove("colorhunt");
//   console.log("hover");
//   colorcode.innerText = "88d34";
// };
// colorcode.onmouseout = () => {
//   colorcode.innerText = "";
// };
let maindiv = document.querySelector(".maindiv");
let mode = document.querySelector(".mode");
let currentmode = "light";
mode.addEventListener("click", () => {
  if (currentmode === "light") {
    currentmode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
  } else {
    currentmode = "light";
    document.querySelector("body").style.backgroundColor = "white";
  }
});

// let mode = document.querySelector(".modebtn");
// mode.innerText = "click to change mode";
// let currentmode = "light";
// mode.addEventListener("click", () => {
//   if (currentmode === "light") {
//     currentmode = "dark";
//     document.querySelector("body").style.backgroundColor = "black";
//     document.querySelector("#ananta").innerText = "ANANTA";
//   } else {
//     currentmode = "light";
//     document.querySelector("body").style.backgroundColor = "white";
//     document.querySelector("#rahim").innerText = "RAHIM";
//   }
//   console.log(currentmode);
// });
