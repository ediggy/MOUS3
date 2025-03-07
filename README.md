This is the main directory for MOUS3: (Manageably Observing and Understand by Seeing SpecificationS)

More information will be added as the project progresses

## How to:
1: Click on the index.html in your PC file folder (You may need a server if you are using main.js in the .html, I use Live Server for VS Code)

2: Open the main directory in your favorite code editor

3: Edit and take whatever parts of the code is most suited for your project :)

## Files

contract_data_grid: (incomplete) display the Assume-Guarentee Contract data. Currently has all the logic from the toggle_contract_csv_list as well.

grid_sorting: Contains buttons and logic for sorting the contract data grid from contract_data_grid

styles: css styles for the MOUSE/index.html

test_data: data that I used to ensure that each piece works

toggle_contract_csv_list: (incomplete) will contain the logic and javascript for toggling more information for each Assume-Guarentee contract

test_data> Data that I used to check if the functions worked


index.html: Main page for the final MOUS3 project. Showcases all of the building blocks for reuse.

README.md: this file :)



## Data Formats
agc_aggregate_data.csv > Each line contains the name of the formula, and each data cell for the table. The Javascript looks for the matching names, so it does not matter what order the lines are in.

.c2po > see [Assume-Guarentee Contract Example](https://r2u2.github.io/r2u2/Examples/agc.html) and [R2U2 Documentation](https://r2u2.github.io/r2u2/Overview/quick_start_guide.html) for more information