$(document).ready(function () {
  // Aplicando máscara de CPF e CNPJ
  $("#cpf").mask("000.000.000-00", { reverse: true });
  $("#cnpj").mask("00.000.000/0000-00", { reverse: true });

  // Alterna os campos de acordo com o tipo de usuário selecionado
  $("#tipoUsuario").change(function () {
    if ($(this).val() === "fisica") {
      $("#fisicaFields").show();
      $("#juridicaFields").hide();
    } else {
        $('#juridicaFields').show();
        $('#fisicaFields').hide();
    }
  });

  // Mensagens de simulação para os botões de login social
  $(".btn-google").on("click", function () {
    showAlert("Você selecionou login com Google");
  });

  $(".btn-apple").on("click", function () {
    showAlert("Você selecionou login com Apple");
  });

  $(".btn-facebook").on("click", function () {
    showAlert("Você selecionou login com Facebook");
  });

  // Exibir alerta personalizado ao enviar o formulário
  $("#userForm").submit(function (event) {
    event.preventDefault();
    showAlert("Cadastro realizado com sucesso!");
  });
});

// Função para exibir alertas personalizados no modal de cadastro
function showAlert(message) {
  $("#alertMessage").text(message);
  $("#alertContainer").fadeIn();
}

// Função para fechar o alerta
function closeAlert() {
  $("#alertContainer").fadeOut();
}
