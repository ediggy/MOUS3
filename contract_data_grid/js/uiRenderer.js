export function displayFormulas(formulas) {
    const tableBody = document.querySelector("#formulaTable tbody");
    tableBody.innerHTML = ""; // Clear previous content

    formulas.forEach(({ name, occurences, failures, instanceFailurePercent, totalFailurePercentage }) => {
        const row = document.createElement("tr");

        const formulaCell = document.createElement("td");
        formulaCell.textContent = name;

        const countCell = document.createElement("td");
        countCell.textContent = occurences;

        const failCell = document.createElement("td");
        failCell.textContent = failures;

        const instanceCell = document.createElement("td");
        instanceCell.textContent = instanceFailurePercent;

        const totalCell = document.createElement("td");
        totalCell.textContent = totalFailurePercentage;

        row.appendChild(formulaCell);
        row.appendChild(countCell);
        row.appendChild(failCell);
        row.appendChild(instanceCell);
        row.appendChild(totalCell);

        tableBody.appendChild(row);
    });
}
