This folder contains javascript and html for creating a table that lists assume-guarentee contracts and their values in an aggregate run

## How to:
1: Click on the index.html in your PC file folder (You may need a server if you are using main.js in the .html, I use Live Server for VS Code)

2: Open the main directory in your favorite code editor

3: Edit and take whatever parts of the code is most suited for your project :)

## Files
index.html: table template. Currently contains buttons for uploading files, but they can be removed if your files are coming from the back-end

all.js: Contains all of the javascript code to make the table function. 

main.js: entry-point for sectioned javascript files. If you use this file, you need to run your html on a server. I use Live Server from VS Code

js> This folder contains the sectioned out javascript. See file names for what each file does

test_data> Data that I used to check if the functions worked

## Data Formats
.csv > Each line contains the name of the formula, and each data cell for the table. The Javascript looks for the matching names, so it does not matter what order the lines are in.

.c2po > see [Assume-Guarentee Contract Example](https://r2u2.github.io/r2u2/Examples/agc.html) and [R2U2 Documentation](https://r2u2.github.io/r2u2/Overview/quick_start_guide.html) for more information