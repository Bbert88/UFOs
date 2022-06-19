// import data from data.js
const tableData = data; 

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build table function
function buildTable(data) {
    // Clear table data 
    tbody.html("");
    // Loop through each object in data & append row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to table body
        let row = tbody.append("tr");
        // Loop through each field in dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);

            }
        );
        
    });
}

function handleClick(){
    //grab datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    //check if date was entered and grab the row which matches entered date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    //Build table using filtered date (if no date, filteredData will be original tableData)
    buildTable(filteredData);


};