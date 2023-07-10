$(document).ready(function () {
  console.log("teste");
});

$("#form-tarefa").on("submit", function (e) {
  e.preventDefault();

  const nomeTarefa = $("#nome-tarefa").val();
  $(`<li>${nomeTarefa}</li>`).appendTo("#lista-tarefa");

  $("#nome-tarefa").val("");
});

$("#lista-tarefa").on("click", "li", function () {
  $(this).toggleClass("linha");
});
