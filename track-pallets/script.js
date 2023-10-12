const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

// Initialize tasks from local storage
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to display tasks in a table
function displayTasks() {
    taskList.innerHTML = '';

    if (tasks.length === 0) {
        taskList.innerHTML = '<p>No tasks to display.</p>';
        return;
    }

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create table headers
    const headerRow = document.createElement('tr');
    const headers = ['Task Type', 'Truck Number', 'Trailer A', 'Trailer B', 'Driver Name', 'CHEP', 'LOSCAM', 'Date Created', 'Actions'];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table rows for each task
    tasks.forEach((task, index) => {
        const row = document.createElement('tr');

        const values = [
            task.taskType || '-',
            task.truckNumber || '-',
            task.trailerA || '-',
            task.trailerB || '-',
            task.driverName || '-',
            task.chep || '-',
            task.loscam || '-',
            task.dateCreated || '-'
        ];

        values.forEach(valueText => {
            const cell = document.createElement('td');
            cell.textContent = valueText;
            row.appendChild(cell);
        });

        // Create "Edit" and "Delete" buttons
        const actionsCell = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editTask(index)); // Call editTask function
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(index)); // Call deleteTask function

        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);
        row.appendChild(actionsCell);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    taskList.appendChild(table);
}

// Edit a task
function editTask(index) {
    const taskToEdit = tasks[index];
    // Populate the form with the task data for editing
    document.querySelector('input[name="taskType"][value="' + taskToEdit.taskType + '"]').checked = true;
    document.getElementById('truckNumber').value = taskToEdit.truckNumber || '';
    document.getElementById('trailerA').value = taskToEdit.trailerA || '';
    document.getElementById('trailerB').value = taskToEdit.trailerB || '';
    document.getElementById('driverName').value = taskToEdit.driverName || '';
    document.getElementById('chep').value = taskToEdit.chep || '';
    document.getElementById('loscam').value = taskToEdit.loscam || '';

    // Remove the edited task from the tasks array
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Display updated task list
    displayTasks();
}

// Delete a task
function deleteTask(index) {
    // Remove the task at the specified index from the tasks array
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Display updated task list
    displayTasks();
}

// Add a new task
taskForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const taskType = document.querySelector('input[name="taskType"]:checked').value;
    const truckNumber = document.getElementById('truckNumber').value;
    const trailerA = document.getElementById('trailerA').value;
    const trailerB = document.getElementById('trailerB').value;
    const driverName = document.getElementById('driverName').value;
    const chep = parseFloat(document.getElementById('chep').value);
    const loscam = parseFloat(document.getElementById('loscam').value);
    const dateCreated = new Date().toLocaleString(); // Capture current date and time

    const newTask = {
        taskType,
        truckNumber,
        trailerA,
        trailerB,
        driverName,
        chep,
        loscam,
        dateCreated
    };

    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Clear the form fields
    taskForm.reset();

    // Display updated task list
    displayTasks();
});

// Display initial tasks
displayTasks();

document.addEventListener('DOMContentLoaded', function () {
    // ... (existing code) ...

    // Function to filter tasks by the current date
    function filterTasksByDate() {
        const currentDate = new Date().toLocaleDateString();
        return tasks.filter(task => task.dateCreated.includes(currentDate));
    }

    // Function to generate a printable document
    function generatePrintableDocument() {
        const filteredTasks = filterTasksByDate();

        if (filteredTasks.length === 0) {
            alert("No tasks for today to print.");
            return;
        }

        const printableWindow = window.open('', '_blank');
        printableWindow.document.open();
        printableWindow.document.write('<html><head><title>Today\'s Tasks</title></head><body>');

        printableWindow.document.write('<h1>Today\'s Tasks</h1>');
        printableWindow.document.write('<table border="1">');
        printableWindow.document.write('<thead><tr><th>Task Type</th><th>Truck Number</th><th>Trailer A</th><th>Trailer B</th><th>Driver Name</th><th>CHEP</th><th>LOSCAM</th><th>Date Created</th></tr></thead>');
        printableWindow.document.write('<tbody>');

        filteredTasks.forEach(task => {
            printableWindow.document.write(`<tr><td>${task.taskType || '-'}</td><td>${task.truckNumber || '-'}</td><td>${task.trailerA || '-'}</td><td>${task.trailerB || '-'}</td><td>${task.driverName || '-'}</td><td>${task.chep || '-'}</td><td>${task.loscam || '-'}</td><td>${task.dateCreated || '-'}</td></tr>`);
        });

        printableWindow.document.write('</tbody></table>');
        printableWindow.document.write('</body></html>');
        printableWindow.document.close();
        printableWindow.print();
    }

    // Add a click event listener to the "Print" button
    document.getElementById('printButton').addEventListener('click', generatePrintableDocument);

    // Display initial tasks
    displayTasks();
});
