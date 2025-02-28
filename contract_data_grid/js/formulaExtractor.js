export function extractFormulas(text, formulas) {
    const inputSection = text.split("FTSPEC")[1];
    const formulaRegex = /:\s*([^;\n]+)/g;
    let match;

    while ((match = formulaRegex.exec(inputSection)) !== null) {
        formulas.push({
            name: match[1].trim(),
            occurences: 0,
            failures: 0,
            instanceFailurePercent: 0,
            totalFailurePercentage: 0
        });
    }
    console.log(formulas);
}
