 // Alternar abas
 document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remover classe ativa de todas as abas e conteúdos
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Adicionar classe ativa à aba clicada e seu conteúdo
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});