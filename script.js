const form = document.getElementById("form-verify");

function verify(num1, num2) {
  let response = num2 > num1;
  return response;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const campoA = parseInt(document.getElementById("campoa").value);
  const campoB = parseInt(document.getElementById("campob").value);
  const sucess = `Parabéns! O número <b>${campoB}</b> é maior que o número <b>${campoA}</b>.`;
  const error = `Não foi dessa vez. O número <b>${campoB}</b> é menor que o número <b>${campoA}</b>.`;
  const message = document.querySelector("#message");
  if (verify(campoA, campoB)) {
    message.innerHTML = sucess;
    message.removeAttribute("class");
    message.classList.add("sucess-message");
    message.style.display = "block";
  } else {
    message.innerHTML = error;
    message.removeAttribute("class");
    message.classList.add("error-message");
    message.style.display = "block;";
  }
});
