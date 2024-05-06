// Function to add a new item to the list
function addItem() {
    const itemList = document.getElementById('itemList');
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    itemList.appendChild(newItem);
}

// Function to remove the last item from the list
function removeItem() {
    const itemList = document.getElementById('itemList');
    const lastItem = itemList.lastElementChild;
    if (lastItem) {
        itemList.removeChild(lastItem);
    }
}

// Add event listeners to the buttons
document.getElementById('addBtn').addEventListener('click', addItem);
document.getElementById('removeBtn').addEventListener('click', removeItem);


// create a table
// Function to create a table from an array of persons
function createTable(persons) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    thead.innerHTML = `<tr><th>First Name</th><th>Last Name</th><th>Email</th><th>Position</th></tr>`;

    const tbody = document.createElement('tbody');
    for (let i = 0; i < persons.length; i++) {
        const person = persons[i];
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${person.firstName}</td>
            <td>${person.lastName}</td>
            <td>${person.email}</td>
            <td>${person.position}</td>
        `;
        tbody.appendChild(tr);
    }

    table.appendChild(thead);
    table.appendChild(tbody);

    // Append the table to the existing container with the ID "container"
    const container = document.getElementById('container');
    container.appendChild(table);
}

// Array of persons data
const persons = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@doe.com',
        position: 'CTO'
    },
    {
        firstName: 'Johan',
        lastName: 'Smith',
        email: 'johan@smith.com',
        position: 'CTO'
    },
    {
        firstName: 'Shamil',
        lastName: 'Kurbanov',
        email: 'shamil@kurbanov.com',
        position: 'CTO'
    },
    {
        firstName: 'January',
        lastName: 'Doe',
        email: 'january@doe.com',
        position: 'CTO'
    }
];

// Call the createTable function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    createTable(persons);
});