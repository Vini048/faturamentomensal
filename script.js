// Objeto com o faturamento mensal por estado
const faturamentoPorEstado = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
};

function calcularPercentuais(faturamento) {
    // Calcula o valor total do faturamento
    const totalFaturamento = Object.values(faturamento).reduce((total, valor) => total + valor, 0);

    // Calcula o percentual para cada estado
    const percentuais = {};
    for (let estado in faturamento) {
        const percentual = (faturamento[estado] / totalFaturamento) * 100;
        percentuais[estado] = percentual;
    }

    return percentuais;
}

// Calcula os percentuais
const percentuais = calcularPercentuais(faturamentoPorEstado);

// Imprime os resultados
console.log("Percentual de representação por estado:");
for (let estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado].toFixed(2)}%`);
}

// Imprime o valor total do faturamento
const totalFaturamento = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor, 0);
console.log(`\nValor total do faturamento: R$ ${totalFaturamento.toFixed(2)}`);
