//SOLUTION 1
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchData();

//SOLUTION 2
async function sendData() {
    const endpoint = 'https://jsonplaceholder.typicode.com/posts'; 
    const data = {
        title: 'foo',
        body: 'bar',
        userId: 1
    };

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log('Response:', result);
    } catch (error) {
        console.error('Error sending data:', error);
    }
}
sendData();

// SOLUTION 3
document.getElementById('fetchButton').addEventListener('click', async () => {
    const inputValue = document.getElementById('inputValue').value; 
    if (!inputValue.trim()) {
        alert('Enter a value to search.');
        return;
    }

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${inputValue}`); 
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        document.getElementById('results').innerHTML = `
        <p><strong>ID:</strong> ${data.id}</p>
        <p><strong>Title:</strong> ${data.title}</p>
        <p><strong>Body:</strong> ${data.body}</p>
    `;
} catch (error) {
    console.error(error);
    document.getElementById('results').textContent = 'Error fetching data. Please try again.';
}
});

// SOLUTION 4
document.getElementById('fetchButton').addEventListener('click', async () => {
    try {
        // Step 1: Fetch data from an API
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();

        // Step 2: Filter the results based on a criterion
        const filteredData = data.filter(user => user.id > 20); 

        // Step 3: Display the filtered data
        const resultsElement = document.getElementById('results');
        resultsElement.innerHTML = ''; 

        filteredData.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = `ID: ${user.id}, Name: ${user.name}`;
            resultsElement.appendChild(listItem);
        });
    } catch (error) {
        console.error(error);
        document.getElementById('results').textContent = 'Error fetching data.';
    }
});

//SOLUTION 5
//I couldn't figure out question 5 before deadline.

// SOLUTION 6
document.getElementById('fetchButton').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/users')  
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json(); 
        })
        .then(data => {
            const namesList = document.getElementById('namesList');
            namesList.innerHTML = '';  

            data.forEach(user => {
                const li = document.createElement('li');
                li.textContent = user.name;  
                namesList.appendChild(li);   
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

// SOLUTION 7
document.getElementById('fetchButton').addEventListener('click', async function() {
    const namesList = document.getElementById('namesList');
    namesList.innerHTML = '';  

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');  

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();

        data.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;  
            namesList.appendChild(li);   
        });

    } catch (error) {
        console.error('Error:', error);
    }
});

// SOLUTION 8
//I couldn't figure out question 8 before deadline.


// SOLUTION 9
async function deleteUser(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
            method: 'DELETE'  
        });

        console.log('Response Status:', response.status);  

        if (response.ok) {
            console.log(`User with ID ${userId} was deleted.`);
        } else {
            console.error(`Failed to delete user with ID ${userId}.`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

deleteUser(1);

// SOLUTION 10
async function updateUser(userData) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userData.id}`, {
            method: 'PUT',  
            headers: {
                'Content-Type': 'application/json'  
            },
            body: JSON.stringify(userData)  
        });

        const data = await response.json();

        console.log('Updated User Data:', data);
        
        console.log('Response Status:', response.status);  

        if (response.ok) {
            console.log(`User with ID ${userData.id} updated successfully.`);
        } else {
            console.error(`Failed to update user with ID ${userData.id}.`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

const updatedUserData = {
    id: 1,
    name: 'Taibat Yusuf',
    username: 'TaiB',
    email: 'ajaniolayinka11@gmail.com',
    phone: '08030948680'
};

updateUser(updatedUserData);





