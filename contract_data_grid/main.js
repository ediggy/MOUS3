// main.js
import { handleC2POFileUpload, handleCSVFileUpload } from './js/fileHandler.js';
import { extractFormulas } from './js/formulaExtractor.js';
import { displayFormulas } from './js/uiRenderer.js';
import { processCSV } from './js/dataProcessor.js';

// Initialize the table plugin
export function initializeTablePlugin() {
    const formulas = [];

    const c2poInput = document.getElementById("c2poInput");
    if (c2poInput) {
        c2poInput.addEventListener("change", function(event) {
            handleC2POFileUpload(event, formulas, displayFormulas);
        });
    }

    const csvInput = document.getElementById("csvInput");
    if (csvInput) {
        csvInput.addEventListener("change", function(event) {
            handleCSVFileUpload(event, formulas, displayFormulas);
        });
    }
}

// Call the initialization when the window loads
window.onload = () => {
    initializeTablePlugin();
};
