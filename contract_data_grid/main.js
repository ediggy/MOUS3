let formulas = [];

// Gets .c2po file when button is clicked.
// Not necessary if file is inputted through backend
document.getElementById("c2poInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const text = e.target.result;
        extractFormulas(text);
        displayFormulas(formulas);
    };
    reader.readAsText(file);
});

document.getElementById("csvInput").addEventListener("change", function(event) {
    processCSV();
});

// Pull out the contract names from .c2po file
function extractFormulas(text) {
    console.log('extract formulas function');
    const inputSection = text.split("FTSPEC")[1];
    const formulaRegex = /:\s*([^;\n]+)/g;
    let match = [];

    while ((match = formulaRegex.exec(inputSection)) !== null) {
        formulas.push({
            name: match[1].trim(),
            occurences: 0,
            failures: 0,
            instanceFailurePercent: 0,
            totalFailurePercentage: 0
        });
    }
    return formulas;
}

    function displayFormulas(formulas) {
        const tableBody = document.querySelector("#formulaTable tbody");
        tableBody.innerHTML = ""; // Clear previous content

        formulas.forEach(({name, occurences, failures, instanceFailurePercent, totalFailurePercentage}) => {
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

    function processCSV() {
    const fileInput = document.getElementById("csvInput");
    if (!fileInput.files.length) {
        alert("Please select a CSV file.");
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
        const csvData = event.target.result;
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
    };

    reader.readAsText(file);
}
