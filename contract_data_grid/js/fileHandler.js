import { extractFormulas } from './formulaExtractor.js';
import {processCSV} from './dataProcessor.js';
export function handleC2POFileUpload(event, formulas, displayFormulas) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const text = e.target.result;
        extractFormulas(text, formulas);
        displayFormulas(formulas);
    };
    reader.readAsText(file);
}

export function handleCSVFileUpload(event, formulas, displayFormulas) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const csvData = e.target.result;
        processCSV(csvData, formulas, displayFormulas);
    };
    reader.readAsText(file);
}
