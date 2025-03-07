let sortDirection = {}; // Stores sorting order for each column

function sortTable(property) {
sortDirection[property] = !sortDirection[property]; // Toggle sort order

formulas.sort((a, b) => {
    let valA = a[property];
    let valB = b[property];

    // Sort numerically for numbers, alphabetically for strings
    if (typeof valA === "number" && typeof valB === "number") {
        return sortDirection[property] ? valA - valB : valB - valA;
    } else {
        return sortDirection[property] 
            ? valA.localeCompare(valB) 
            : valB.localeCompare(valA);
    }
});

displayFormulas(formulas);
}
