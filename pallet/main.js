// Get references to elements
const truckNumberInput = document.getElementById('truckNumber');
const chepCountDisplay = document.getElementById('chepCount');
const loscamCountDisplay = document.getElementById('loscamCount');
const chepPlusButton = document.getElementById('chepPlus');
const chepMinusButton = document.getElementById('chepMinus');
const loscamPlusButton = document.getElementById('loscamPlus');
const loscamMinusButton = document.getElementById('loscamMinus');
const chepResetButton = document.getElementById('chepReset');
const loscamResetButton = document.getElementById('loscamReset');
const saveButton = document.getElementById('saveButton');
const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

// Initialize counts
let chepCount = 0;
let loscamCount = 0;

// Load counts from local storage (if available)
if (localStorage.getItem('chepCount')) {
    chepCount = parseInt(localStorage.getItem('chepCount'));
    chepCountDisplay.textContent = chepCount;
}

if (localStorage.getItem('loscamCount')) {
    loscamCount = parseInt(localStorage.getItem('loscamCount'));
    loscamCountDisplay.textContent = loscamCount;
}

// Event listeners
chepPlusButton.addEventListener('click', () => {
    chepCount++;
    chepCountDisplay.textContent = chepCount;
});

chepMinusButton.addEventListener('click', () => {
    if (chepCount > 0) {
        chepCount--;
        chepCountDisplay.textContent = chepCount;
    }
});

loscamPlusButton.addEventListener('click', () => {
    loscamCount++;
    loscamCountDisplay.textContent = loscamCount;
});

loscamMinusButton.addEventListener('click', () => {
    if (loscamCount > 0) {
        loscamCount--;
        loscamCountDisplay.textContent = loscamCount;
    }
});

chepResetButton.addEventListener('click', () => {
    chepCount = 0;
    chepCountDisplay.textContent = chepCount;
});

loscamResetButton.addEventListener('click', () => {
    loscamCount = 0;
    loscamCountDisplay.textContent = loscamCount;
});

saveButton.addEventListener('click', () => {
    const truckNumber = truckNumberInput.value;

    // Create a new row for the saved data
    const row = dataTable.insertRow(0);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3); // Edit button
    const cell5 = row.insertCell(4); // Delete button

    cell1.textContent = truckNumber;
    cell2.textContent = chepCount;
    cell3.textContent = loscamCount;
    cell4.innerHTML = '<button class="editButton">Edit</button>';
    cell5.innerHTML = '<button class="deleteButton">Delete</button>';

    // Save counts to local storage
    localStorage.setItem('chepCount', chepCount);
    localStorage.setItem('loscamCount', loscamCount);

    // Clear the input and reset counts
    truckNumberInput.value = '';
    chepCount = 0;
    loscamCount = 0;
    chepCountDisplay.textContent = chepCount;
    loscamCountDisplay.textContent = loscamCount;

    // Add event listeners to the edit and delete buttons in the new row
    const editButton = cell4.querySelector('.editButton');
    const deleteButton = cell5.querySelector('.deleteButton');

    // ...

editButton.addEventListener('click', () => {
    const newRow = row.rowIndex;

    const updatedTruckNumber = prompt('Edit Truck Number:', cell1.textContent);
    if (updatedTruckNumber !== null) {
        const updatedCHEPCount = prompt('Edit CHEP Count:', cell2.textContent);
        const updatedLoscamCount = prompt('Edit Loscam Count:', cell3.textContent);

        // Update the row with the edited data
        cell1.textContent = updatedTruckNumber;
        cell2.textContent = updatedCHEPCount;
        cell3.textContent = updatedLoscamCount;
    }
});


    deleteButton.addEventListener('click', () => {
    // Get the row index
    const rowIndex = row.rowIndex;

    // Check if the rowIndex is within the valid range (greater than 0)
    if (rowIndex > 0) {
        // Remove the data from local storage using a unique identifier for each entry
        localStorage.removeItem(`entry_${rowIndex}`);

        // Remove the row from the table
        dataTable.deleteRow(rowIndex - 1); // Subtract 1 to adjust for the header row
    }
});
});


document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.metaKey) {
        if (event.key === 'H') {
            // Trigger the CHEP plus operation (increment count)
            chepCount++;
            chepCountDisplay.textContent = chepCount;
        } else if (event.key === 'J') {
            // Trigger the CHEP minus operation (decrement count)
            if (chepCount > 0) {
                chepCount--;
                chepCountDisplay.textContent = chepCount;
            }
        } else if (event.key === 'K') {
            // Trigger the Loscam plus operation (increment count)
            loscamCount++;
            loscamCountDisplay.textContent = loscamCount;
        } else if (event.key === 'L') {
            // Trigger the Loscam minus operation (decrement count)
            if (loscamCount > 0) {
                loscamCount--;
                loscamCountDisplay.textContent = loscamCount;
            }
        }
    }
});


document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
    console.log('ctrlKey:', event.ctrlKey);
    console.log('shiftKey:', event.shiftKey);
    console.log('metaKey:', event.metaKey);
});
