document.addEventListener('DOMContentLoaded', function() {
    const btnExcluir = document.querySelectorAll('.btn-excluir');
    const modal = document.getElementById('modal-confirmacao');
    const btnCancelar = document.getElementById('btn-cancelar-exclusao');
    const btnConfirmar = document.getElementById('btn-confirmar-exclusao');

    btnExcluir.forEach(btn => {
        btn.addEventListener('click', function() {
            const postId = this.getAttribute('data-post-id');
            const modalUrl = `/admin/excluir/${postId}`;
            // Exibe o modal de confirmação
            modal.style.display = 'block';
            // Atribui o postId ao botão de confirmação para uso posterior
            btnConfirmar.dataset.postId = postId;
        });
    });

    btnCancelar.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    btnConfirmar.addEventListener('click', function() {
        const postId = btnConfirmar.dataset.postId;
        window.location.href = `/admin/excluir/confirmar/${postId}`;
    });
});
