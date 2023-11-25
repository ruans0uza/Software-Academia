function verificar_alunoLogado() {
    if (localStorage.idAlunoLogado) {
        window.location.href = '../HTML/menu.html';
    }
}
verificar_alunoLogado();


document.querySelector('#btn-login').addEventListener('click', function (e) {
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
function login() {

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (localStorage.alunosArr) {
        alert('Login bem-sucedido!');
        localStorage.setItem('username', username);
        renderWelcomeMessage(username);
    } else {
        alert('Falha no login. Verifique seu usuário e senha.');
    }
}

function verificaSelecionado() {

    if (document.getElementById('username') && document.getElementById('password'))  {
        window.location.href = "../HTML/menu.html";
    }
    else
    alert("Verfique seu usuário e senha")    
}
