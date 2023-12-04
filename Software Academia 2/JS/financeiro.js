document.addEventListener('DOMContentLoaded', function () {
    var options = document.querySelectorAll('.pmt-option');
    options.forEach(function (option) {
        option.addEventListener('change', selecao);
    });

    var selecionarBtn = document.getElementById('selecionar');
    if (selecionarBtn) {
        selecionarBtn.addEventListener('click', selecao);
    }
});

function selecao() {
    let pix = document.getElementById("pix");
    let boleto = document.getElementById("boleto");
    let cartaodecredito = document.getElementById("cartaodecredito");

    let div_pix = document.getElementById("div-pix");
    let div_boleto = document.getElementById("div-boleto");
    let div_cartaodecredito = document.getElementById("div-cartaoDeCredito");

    if (pix.checked) {
        div_pix.style.display = "inline";
        div_boleto.style.display = "none";
        div_cartaodecredito.style.display = "none";
    } else if (boleto.checked) {
        div_pix.style.display = "none";
        div_boleto.style.display = "inline";
        div_cartaodecredito.style.display = "none";
    } else if (cartaodecredito.checked) {
        /*
        document.getElementById("cartao-title").style.display = "block";
        div_pix.style.display = "none";
        div_boleto.style.display = "none";
        div_cartaodecredito.style.display = "grid";
        */
    }
}


var url = new URL(window.location.href);
var planoNome = url.searchParams.get('plano');
console.dir(planoNome)

if (planoNome) {
    if (planoNome == 'Gold') {

    }
}


function openCardModal() {
    document.querySelector('.card-modal').classList.add('card-opened');
    /*
    var radioButton = document.getElementById("cartaodecredito");

    if (radioButton.checked) {
        window.location.href = "card.html";
    }
    */
}

document.querySelectorAll('.card-modal .close-modal').forEach(function (_btn) {
    _btn.addEventListener('click', function (e) {
        document.querySelector('.card-modal').classList.remove('card-opened');
    });
})

document.querySelector('.send-card-information').addEventListener('click', function (e) {
    alert('Aguardando confirmação')
});

  document.getElementById('finalizarCompraBtn').onclick = function() {
    alert('Aguardando confirmação');
};

document.getElementById('boletoBtn').onclick = function() {
    alert('Aguardando pagamento');
};

document.getElementById('gerar-boleto').addEventListener('click', function () {
    var nome = document.getElementById('nome').value;
    var cpf = document.getElementById('cpf').value;

    if (nome.trim() === '' || cpf.trim() === '') {
        alert('Preencha todos os campos antes de gerar o boleto.');
        return;
    }

    var doc = new jsPDF();

    doc.text(20, 20, 'Nome: ' + nome);
    doc.text(20, 30, 'CPF: ' + cpf);

    doc.save('boleto.pdf');

    var link = document.createElement('a');
    link.href = doc.output('bloburl'); // Cria um blob URL do PDF
    link.download = 'boleto.pdf';

    // Adicione o link ao corpo do documento e clique nele
    document.body.appendChild(link);
    link.click();

    // Remova o link do corpo do documento
    document.body.removeChild(link);
});
