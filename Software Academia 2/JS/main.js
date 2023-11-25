function buscarAluno(id_email, senha) {
    var alunosArr = [],
        retornaAluno = false,
        buscarPorId = !senha || senha == '';

    if (localStorage.alunosArr) {
        alunosArr = JSON.parse(localStorage.alunosArr);
    }

    alunosArr.forEach(function (_aluno) {
        if (!retornaAluno) {
            if (buscarPorId && _aluno.id == id_email) {
                retornaAluno = _aluno;
            } else if (_aluno.email == id_email && _aluno.senha == senha) {
                retornaAluno = _aluno;
            }
        }
    });

    return retornaAluno;
}
