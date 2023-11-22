
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
    }
    if (boleto.checked) {
        div_pix.style.display = "none";
        div_boleto.style.display = "inline";
        div_cartaodecredito.style.display = "none";
    }
    if (cartaodecredito.checked) {
        document.getElementById("cartao-title").display = "block";
        div_pix.style.display = "none";
        div_boleto.style.display = "none";
        div_cartaodecredito.style.display = "grid";
    }


}


