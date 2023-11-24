function verificar_alunoLogado() {
    if (localStorage.idAlunoLogado) {
        window.location.href = 'menu.html';
    }
}
verificar_alunoLogado();


document.querySelector('.btn-action').addEventListener('click', function (e) {
    var _btn = this,
        emailVal = document.querySelector('[name="email"]').value,
        senhaVal = document.querySelector('[name="senha"]').value,
        _alunoLogado = false;

    _alunoLogado = buscarAluno(emailVal, senhaVal);

    if (_alunoLogado) {
        localStorage.idAlunoLogado = _alunoLogado.id;
        verificar_alunoLogado();
    } else {
        alert('Email ou senha incorretos');
    }

});