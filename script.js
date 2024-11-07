const faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

function calcularPercentual() {
    const faturamentoTotal = Object.values(faturamento).reduce((acc, val) => acc + val, 0);
    const percentualRepresentacao = {};

    for (const estado in faturamento) {
        percentualRepresentacao[estado] = (faturamento[estado] / faturamentoTotal * 100).toFixed(2);
    }

    let resultadosHTML = '';
    for (const estado in percentualRepresentacao) {
        resultadosHTML += `<p>${estado}: ${percentualRepresentacao[estado]}%</p>`;
    }

    document.getElementById('resultados').innerHTML = resultadosHTML;
}
