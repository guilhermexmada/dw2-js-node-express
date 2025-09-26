// Capturando elementos do DOM

// const parar = document.getElementById("parar");
// parar.style.backgroundColor = "red";

// const atencao = document.getElementById("atencao");
// atencao.style.backgroundColor = "yellow";

// const prosseguir = document.getElementById("prosseguir");
// prosseguir.style.backgroundColor = "green";

function parar() {
  document.querySelector("#parar").style.backgroundColor = "red";
  document.querySelector("#atencao").style.backgroundColor = "grey";
  document.querySelector("#prosseguir").style.backgroundColor = "grey";
}

function atencao() {
  document.querySelector("#atencao").style.backgroundColor = "yellow";
  document.querySelector("#parar").style.backgroundColor = "grey";
  document.querySelector("#prosseguir").style.backgroundColor = "grey";
}

function prosseguir() {
  document.querySelector("#prosseguir").style.backgroundColor = "green";
  document.querySelector("#parar").style.backgroundColor = "grey";
  document.querySelector("#atencao").style.backgroundColor = "grey";
}