$(document).ready(function () {
  $("#telInput").mask("(00)00000-0000");

  $("form").validate({
    rules: {
      nomeInput: { required: true },
      emailInput: { required: true, email: true },
      telInput: { required: true },
    },
  });
});
