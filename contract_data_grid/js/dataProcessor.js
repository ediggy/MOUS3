export function processCSV(csvData, formulas, displayFormulas) {
    const rows = csvData.split("\n").map(row => row.split(","));

    rows.forEach(row => {
        if (row.length < 5) return; // Skip malformed rows

        const [name, occurences, failures, instanceFailurePercent, totalFailurePercentage] = row.map(val => val.trim());

        // Find the corresponding contract and update values
        let contract = formulas.find(c => c.name === name);
        if (contract) {
            contract.occurences = parseInt(occurences);
            contract.failures = parseInt(failures);
            contract.instanceFailurePercent = parseFloat(instanceFailurePercent);
            contract.totalFailurePercentage = parseFloat(totalFailurePercentage);
        }
    });

    displayFormulas(formulas);

    console.log("Updated Contracts:", formulas);
}
