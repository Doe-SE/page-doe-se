// Gerenciamento de abas
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function () {
        const tabName = this.getAttribute('data-tab');

        // Remover a classe "active" de todas as abas
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        // Ocultar todos os conteúdos
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        document.getElementById(tabName).classList.add('active');
    });
});

// Função para mostrar/ocultar ações da engrenagem
function toggleActions(element) {
    const actions = element.nextElementSibling;
    actions.classList.toggle('active');
}

// Função para alternar texto do toggle
function toggleLabel(checkbox) {
    const label = checkbox.parentNode.parentNode.nextElementSibling;
    label.textContent = checkbox.checked ? "Ativo" : "Desativo";
    localStorage.setItem(checkbox.id, checkbox.checked);
}

// Carregar o estado dos checkboxes do localStorage
document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = [document.getElementById('checkbox1'), document.getElementById('checkbox2')];
    checkboxes.forEach(checkbox => {
        checkbox.checked = localStorage.getItem(checkbox.id) === 'true';
        toggleLabel(checkbox); // Atualiza o texto do label
    });
});