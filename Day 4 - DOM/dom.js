const table = document.createElement("table");

for (let i = 0; i < 5; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 5; j++) {
        const cell = document.createElement("td");
        cell.textContent = (i + 1) + "," + (j + 1);
        row.appendChild(cell);
    }

    table.appendChild(row);
}

document.body.appendChild(table);