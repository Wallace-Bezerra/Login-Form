const eye = document.querySelector(".eye");
const inputSenha = document.querySelector("input[type='password']");

eye.addEventListener('click', (event) => {
  if (inputSenha.getAttribute("type") === "password") {
    inputSenha.setAttribute("type", "text");
    eye.style.backgroundImage = "url('./assets/img/eye-closed.svg')";
  }
  else {
    inputSenha.setAttribute("type", "password");
    eye.style.backgroundImage = "url('./assets/img/eye.svg')";
  }

})
// console.log(ativarSenha);

