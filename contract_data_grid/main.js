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

    formulas.forEach((formula, index) => {
        const row = document.createElement("tr");
        row.classList.add("clickable-row"); // Style it as clickable
        row.dataset.index = index; // Store index for tracking

        const formulaCell = document.createElement("td");
        formulaCell.textContent = formula.name;

        const countCell = document.createElement("td");
        countCell.textContent = formula.occurences;

        const failCell = document.createElement("td");
        failCell.textContent = formula.failures;

        const instanceCell = document.createElement("td");
        instanceCell.textContent = formula.instanceFailurePercent;

        const totalCell = document.createElement("td");
        totalCell.textContent = formula.totalFailurePercentage;

        row.appendChild(formulaCell);
        row.appendChild(countCell);
        row.appendChild(failCell);
        row.appendChild(instanceCell);
        row.appendChild(totalCell);

        // Add row to table
        tableBody.appendChild(row);

        // Add click event to expand/collapse
        row.addEventListener("click", function () {
            toggleSubRows(this, formula);
        });
    });
}

function toggleSubRows(row, formula) {
    const index = row.dataset.index;
    const tableBody = row.parentNode;

    // Check if the next row is already an expanded row
    if (row.nextSibling && row.nextSibling.classList.contains("sub-row")) {
        // Remove existing expanded rows
        while (row.nextSibling && row.nextSibling.classList.contains("sub-row")) {
            tableBody.removeChild(row.nextSibling);
        }
        return;
    }

    // Create a new sub-row
    const subRow = document.createElement("tr");
    subRow.classList.add("sub-row"); // Style it differently

    const detailsCell = document.createElement("td");
    detailsCell.setAttribute("colspan", "5"); // Span across all columns
    detailsCell.textContent = `🔍 More details about ${formula.name}...`;

    subRow.appendChild(detailsCell);

    // Insert sub-row after the clicked row
    tableBody.insertBefore(subRow, row.nextSibling);
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
