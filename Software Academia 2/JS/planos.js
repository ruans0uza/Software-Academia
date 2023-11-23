function selecao() {
    let Silver = document.getElementById("silver");
    let Gold = document.getElementById("gold");
    let Premium = document.getElementById("premium");
    let plano_silver = document.getElementById("planosilver");
    let plano_gold = document.getElementById("planogold");
    let plano_premium = document.getElementById("planopremium");


    if (Silver.checked) {
        plano_silver.style.display = "inline";
        plano_gold.style.display = "none";
        plano_premium.style.display = "none";
    }
    if (Gold.checked) {
        plano_silver.style.display = "none";
        plano_gold.style.display = "inline";
        plano_premium.style.display = "none";
    }
    if (Premium.checked) {
        plano_silver.style.display = "none";
        plano_gold.style.display = "none";
        plano_premium.style.display = "inline";
    }


}


var table = document.getElementById("plano1");
table.querySelectorAll("th,td").forEach(function (_el, index) {
    console.dir(_el)

    _el.addEventListener("mouseover", function () {
        var columnIndex = this.cellIndex;
        console.dir(columnIndex)

        if (columnIndex > 0) {
            table.querySelectorAll("th,td").forEach(function (_el2, index) {
                if (_el2.cellIndex == columnIndex) {
                    _el2.classList.add("colhover");
                }
            });
        }
    });

    _el.addEventListener("click", function () {
        var columnIndex = this.cellIndex;
        console.dir(columnIndex)

        if (columnIndex >= 0) {
            table.querySelectorAll("th")[columnIndex].querySelector('input').checked = true;
        }
    });

    _el.addEventListener("mouseout", function () {
        table.querySelectorAll("td.colhover, th.colhover").forEach(function (_el, index) {
            _el.classList.remove("colhover");
        });

    })

    _radioSelected = document.querySelector('[name="plano"]:checked');
    if (_radioSelected) {




    }

})


function Selecionar() {
    var select = document.getElementById("select");
    var value = select.options[select.selectedIndex].value;
    alert(value);
}

