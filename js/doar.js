// Mostrar/esconder botão para abrir o modal de campanhas específicas
function toggleModalButton(value) {
  const btn = document.getElementById("btnSelecionarCampanha");
  if (value === "especifica") {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
    document.getElementById("campanhaSelecionada").innerHTML = ""; // Limpar seleção anterior
  }
}

// Selecionar campanha no modal e exibir no formulário
function selecionarCampanha(campanha) {
  document.getElementById(
    "campanhaSelecionada"
  ).innerHTML = `<p><strong>Campanha Selecionada:</strong> ${campanha}</p>`;
  $("#modalCampanhas").modal("hide"); // Fechar o modal
}

// Script para exibir campos personalizados
document
  .getElementById("metodoPagamento")
  .addEventListener("change", function () {
    const cartao = document.getElementById("detalhesCartao");
    if (this.value === "cartao") {
      cartao.style.display = "block";
    } else {
      cartao.style.display = "none";
    }
  });
// Mostrar o campo para valor personalizado
$(document).ready(function () {
  // Seleciona todos os radio buttons e o campo "outro valor"
  const $radioButtons = $("input[name='valor']");
  const $outroValor = $("#valorDoacao");

  // Função para exibir ou esconder o campo de valor personalizado
  function toggleOutroValor() {
    if ($("input[name='valor']:checked").val() === "outro") {
      $outroValor.show().focus(); // Mostra e foca no campo
    } else {
      $outroValor.hide().val(""); // Oculta e limpa o campo
    }
  }

  // Adiciona o evento de mudança para cada radio button
  $radioButtons.on("change", toggleOutroValor);
});
