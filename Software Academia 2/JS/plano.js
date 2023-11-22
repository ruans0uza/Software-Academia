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
