const eye = document.querySelector(".eye");
const inputSenha = document.querySelector("input[type='password']");
const btn = document.querySelector("button");
console.log(btn);

eye.addEventListener('click', () => {
  if (inputSenha.getAttribute("type") === "password") {
    inputSenha.setAttribute("type", "text");
    eye.style.backgroundImage = "url('./assets/img/eye-closed.svg')";
  }
  else {
    inputSenha.setAttribute("type", "password");
    eye.style.backgroundImage = "url('./assets/img/eye.svg')";
  }
})
inputSenha.addEventListener("keyup", () => {
  if (inputSenha.value.length >= 8) {
    inputSenha.classList.remove("error");
    console.log(inputSenha.parentElement.nextElementSibling.classList.remove("ativo"));
  }
})

btn.addEventListener("click", (event) => {
  event.preventDefault();

  if (!document.querySelector("#email").checkValidity()) {
    const email = document.querySelector(".emailContainer");

    if (!email.querySelector('.erroMsg')) {
      const erroMsg = document.createElement("span")
      document.querySelector("#email").classList.add("error");
      erroMsg.classList.add("erroMsg", "ativo");
      erroMsg.innerText = "Email não valido."
      email.appendChild(erroMsg);
    }
    else {
      email.querySelector('.erroMsg').classList.add("ativo");
    }
  }
  else {
    document.querySelector(".emailContainer .erroMsg").classList.remove("ativo");
    document.querySelector("#email").classList.remove("error");
  }
  if (inputSenha.value.length < 8) {
    inputSenha.classList.add("error");
    const erros = document.querySelectorAll(".erroMsg")
    erros[1].classList.add("ativo");
  }
  else {
    inputSenha.classList.remove("error");
    document.querySelectorAll(".erroMsg")[1].classList.remove("ativo");

  }
})

