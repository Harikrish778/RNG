// script.js

// Function to fetch user data from the API
async function fetchUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      return users;
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
  
  // Function to display random user details
  function displayRandomUser(users) {
    // Get a random index from the users array
    const randomIndex = Math.floor(Math.random() * users.length);
    const user = users[randomIndex];
  
    // Display the user details in the DOM
    document.getElementById('user-name').textContent = `${user.name}`;
    document.getElementById('user-username').textContent = `${user.username}`;
    document.getElementById('user-email').textContent = `${user.email}`;
    document.getElementById('user-phone').textContent = `${user.phone}`;
    document.getElementById('user-address').textContent = `${user.address.street}, ${user.address.city}`;
  
    // Make the user details visible
    document.getElementById('user-details').style.display = 'block';
  }
  
  // Event listener for the button click
  document.getElementById('generate-btn').addEventListener('click', async () => {
    const users = await fetchUsers();
    if (users) {
      displayRandomUser(users);
    }
  });
  