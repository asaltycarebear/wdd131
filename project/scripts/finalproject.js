document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector("#menu"); /*# target id's*/
    const navMenu = document.querySelector("#nav-menu");

    menuButton.addEventListener("click", () => { /*=> is used in place of function ()*/
        navMenu.classList.toggle("open");

        /*Toggle*/ 
        if (navMenu.classList.contains("open")) {
            menuButton.textContent = "✖";
        } 
        else {
            menuButton.textContent = "☰";
        }
    });
});

// Function 1, and Local Storage requirement
function saveRowData(sku, quantity) {
    let rows = JSON.parse(localStorage.getItem("stockRows")) || [];

    rows.push({ sku, quantity });

    localStorage.setItem("stockRows", JSON.stringify(rows));
}

// Local Storages part 2
function uploadTableRows() {
    const stockTable = document.getElementById("stocksummary");
    if (!stockTable) return;

    let rows = JSON.parse(localStorage.getItem("stockRows")) || [];

    rows.forEach(({ sku, quantity }) => {
        const newRow = stockTable.insertRow(-1);

        // SKU
        newRow.insertCell().textContent = sku;

        // Make
        newRow.insertCell().textContent = "";

        // Model
        newRow.insertCell().textContent = "";

        // Description
        newRow.insertCell().textContent = "";

        // Location
        newRow.insertCell().textContent = "Receiving";

        // Quantity
        newRow.insertCell().textContent = quantity;

        // Velocity
        newRow.insertCell().textContent = "";
    });
}

// Page-specific logic
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    // For Recieving
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const sku = document.getElementById("sku").value.trim();
            const quantity = document.getElementById("quantity").value.trim();

            if (!sku || !quantity) {
                alert("Please enter both SKU and Quantity.");
                return;
            }

            saveRowData(sku, quantity);

            // window.location.href = "stocksummary.html"; // Redirect to stocksummary.html if requested by customer, not recomended
        });
    }

    // For Stocksummary, 
    if (document.getElementById("stocksummary")) {
        uploadTableRows();
    }
});

// Convert table to CSV
function tableToCSV(tableId) {
    const table = document.getElementById(tableId);
    let csv = [];

    // Loop through table rows
    for (let row of table.rows) {
        let cells = Array.from(row.cells).map(cell => `"${cell.textContent.trim()}"`);
        csv.push(cells.join(","));
    }
    return csv.join("\n");
}

// Export CSV function
function exportTable(tableId, clearAfter) {
    const csvData = tableToCSV(tableId);

    // Temp download link
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "stock_summary.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Clear table and storage when checked
    if (clearAfter) {
        localStorage.removeItem("stockRows");
        const table = document.getElementById(tableId);
        while (table.rows.length > 1) { // KEEP HEADER ROW!!!!
            table.deleteRow(1);
        }
    }

    // Always uncheck the box, only note out on customer request. Very scary. To be fair, if you don't un
    const checkbox = document.getElementById("clearAfterExport");
    if (checkbox) checkbox.checked = false;
}


// Clear Table
function clearTable(tableId) {
    localStorage.removeItem("stockRows");
    const table = document.getElementById(tableId);
    while (table.rows.length > 1) { // KEEP HEADER ROW!!!!
        table.deleteRow(1);
    }
}

// Event listener for both export and clearing
document.addEventListener("DOMContentLoaded", () => {
    const exportButton = document.getElementById("exportCSV");
    if (exportButton) {
        exportButton.addEventListener("click", () => {
            const clearAfter = document.getElementById("clearAfterExport").checked;
            exportTable("stocksummary", clearAfter);
        });
    }

    const clearButton = document.getElementById("clearTable"); // Need to learn how to center this popup
    if (clearButton) {
        clearButton.addEventListener("click", () => {
            if (confirm("Are you sure you want to clear the table?\n!!!!!!!!!!!!\nThis action cannot be undone.")) {
                clearTable("stocksummary");
            }
        });
    }
});