
const loadButton = document.getElementById("load-users");
const filterInput = document.getElementById("filter-input");
const status = document.getElementById("status");
const usersList = document.getElementById("users-list");

let users = [];

async function loadUsers() {
    loadButton.disabled = true;
    status.textContent = "Loading users...";
    usersList.replaceChildren();

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to load users.");
        }

        users = await response.json();

        renderUsers(getFilteredUsers());

        status.textContent = `Successfully loaded ${users.length} users.`;
    } catch (error) {
        users = [];
        usersList.replaceChildren();
        status.textContent = "Error loading users. Please try again.";
        console.error(error);
    } finally {
        loadButton.disabled = false;
    }
}

function renderUsers(list) {
    usersList.replaceChildren();

    if (list.length === 0) {
        status.textContent = "No users match your filter.";
        return;
    }

    list.forEach(function (user) {
        const li = document.createElement("li");

        const name = document.createElement("h3");
        name.textContent = user.name;

        const email = document.createElement("p");
        email.textContent = `Email: ${user.email}`;

        const city = document.createElement("p");
        city.textContent = `City: ${user.address.city}`;

        const company = document.createElement("p");
        company.textContent = `Company: ${user.company.name}`;

        li.appendChild(name);
        li.appendChild(email);
        li.appendChild(city);
        li.appendChild(company);

        usersList.appendChild(li);
    });
}

function getFilteredUsers() {
    const searchText = filterInput.value.toLowerCase().trim();

    return users.filter(function (user) {
        return user.name.toLowerCase().includes(searchText);
    });
}

filterInput.addEventListener("input", function () {
    if (users.length === 0) {
        return;
    }

    const filteredUsers = getFilteredUsers();
    renderUsers(filteredUsers);

    if (filteredUsers.length > 0) {
        status.textContent = `Showing ${filteredUsers.length} user(s).`;
    }
});

loadButton.addEventListener("click", loadUsers);
filterInput.addEventListener("input", function () {
    if (users.length === 0) {
        return;
    }

    const filteredUsers = getFilteredUsers();
    renderUsers(filteredUsers);

    if (filteredUsers.length > 0) {
        status.textContent = `Showing ${filteredUsers.length} user(s).`;
    }
});