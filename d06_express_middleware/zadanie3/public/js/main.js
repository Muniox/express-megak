const nameInput = document.getElementById('name');
const button = document.getElementById('sendName');
const checkButton = document.getElementById('checkSavedCookie');
const showCookieName = document.getElementById('showCookieName');

button.addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:3000/cookie/set', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: nameInput.value })
        });
        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error(error);
    }
});

checkButton.addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:3000/cookie/check', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: nameInput.value })
        });
        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error(error);
    }
});

showCookieName.addEventListener('click', async () => {
        try {
        const response = await fetch('http://localhost:3000/cookie/show', {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error(error);
    }
});