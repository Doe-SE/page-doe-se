document.addEventListener('DOMContentLoaded', function() {

  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });

  const gliderElement = document.querySelector('.glider');
  const glider = new Glider(gliderElement, {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: '.dots',
      arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
      },
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
              }
          }
      ]
  });

  // Função para mover o carrossel automaticamente
  function autoplay() {
      let autoplayInterval = setInterval(() => {
          if (gliderElement.scrollLeft + gliderElement.clientWidth >= gliderElement.scrollWidth) {
              glider.scrollItem(0); // Volta ao primeiro slide
          } else {
              glider.scrollItem(glider.page + 1); // Avança para o próximo slide
          }
      }, 3000); // Tempo em milissegundos (3000ms = 3s)

      // Pausar autoplay ao interagir com o carrossel
      gliderElement.addEventListener('mouseover', () => clearInterval(autoplayInterval));
      gliderElement.addEventListener('mouseout', () => autoplayInterval = setInterval(() => {
          if (gliderElement.scrollLeft + gliderElement.clientWidth >= gliderElement.scrollWidth) {
              glider.scrollItem(0);
          } else {
              glider.scrollItem(glider.page + 1);
          }
      }, 3000));
  }

  autoplay();
});

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
