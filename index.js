let maindiv = document.querySelector(".maindiv");
let contener = document.getElementsByClassName("contener");
let navoption = document.getElementsByClassName("navoption");
let sidebar = document.querySelector("#sidebar");
let aftermode = document.getElementsByClassName("aftermode");
let seconddiv = document.getElementsByClassName("seconddiv");
let hide = document.getElementsByClassName("hide");

let mode = document.querySelector(".mode");
let currentmode = "light";
mode.addEventListener("click", () => {
  if (currentmode === "light") {
    currentmode = "dark";
    document.querySelector("body").style.backgroundColor = "rgb(42, 42, 42)";
    document.querySelector("#mainheader").style.backgroundColor = "black";
    mainheader.style.color = "white";
    sidebar.style.backgroundColor = "black";
    for (let i = 0; i < navoption.length; i++) {
      navoption[i].style.color = "white";
    }
    for (let i = 0; i < aftermode.length; i++) {
      aftermode[i].style.color = "white";
    }
  } else {
    currentmode = "light";
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("#mainheader").style.backgroundColor =
      "rgb(240, 239, 239)";
    mainheader.style.color = "black";
    sidebar.style.backgroundColor = "rgb(240, 239, 239)";
    for (let i = 0; i < navoption.length; i++) {
      navoption[i].style.color = "black";
      // navoption[i].style.backgroundcolor = "rgb(152, 152, 152)";
    }
    for (let i = 0; i < aftermode.length; i++) {
      aftermode[i].style.color = "black";
    }
  }
});

for (i = 0; i < seconddiv.length; i++) {
  seconddiv[0].onmouseover = () => {
    hide[0].classList.remove("hide");
  };
}
