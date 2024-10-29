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
      $("#fisicaFields").hide();
      $("#juridicaFields").show();
    }
  });

  // Mensagens de simulação para os botões de login social
  document.querySelector(".btn-google").addEventListener("click", function () {
    showAlert("Você selecionou login com Google");
  });

  document.querySelector(".btn-apple").addEventListener("click", function () {
    showAlert("Você selecionou login com Apple");
  });

  document
    .querySelector(".btn-facebook")
    .addEventListener("click", function () {
      showAlert("Você selecionou login com Facebook");
    });

  // Exibir alerta personalizado ao enviar o formulário
  $("#userForm").submit(function (event) {
    event.preventDefault();
    showAlert("Cadastro realizado com sucesso!");
  });
});

// Função para exibir alertas personalizados
function showAlert(message) {
  $("#alertMessage").text(message);
  $("#alertContainer").fadeIn();
}

// Função para fechar o alerta
function closeAlert() {
  $("#alertContainer").fadeOut();
}
